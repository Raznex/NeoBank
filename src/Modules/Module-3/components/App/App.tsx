import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import getNewsApi from '../../Api/GetNewsApi';
import getChangeApi from '../../Api/GetChangeValue';
import '../Content/_Content.scss';
import { currencyPairs, intervalMilliseconds } from '../../utils/Constants';
import CreditCard from '../CreditCard/CreditCard';
import PageNotFound from '../PageNotFound/PageNotFound';
import { Pair, ExchangeResult, CurrencyData, NewsCards } from '../../utils/Interface';


const App = () => {
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return {
      innerWidth,
      innerHeight,
    };
  }
  const [cards, setCards] = useState<NewsCards[]>([]);
  const [addCard, setAddCard] = useState(3);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [isLoading, setIsLoading] = useState(false);
  const [currency, setCurrency] = useState<CurrencyData[]>([]);

  const calculateOffset = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1300) {
      setAddCard(3);
    } else if (windowWidth >= 800) {
      setAddCard(2);
    } else if (windowWidth >= 550) {
      setAddCard(1);
    }
  };

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    calculateOffset();
  }, [windowSize]);
  // Получение массива карточек и рендер на страницу
  useEffect(() => {
    setIsLoading(true);

    async function fetchAndFilterNews() {
      try {
        const data = await getNewsApi.getNews();

        const filteredCards = await Promise.all(
          data.articles.map(async (card: NewsCards) => {
            if (!card.urlToImage) {
              return null; // Пропускаем карточку без изображения
            }

            try {
              const imageUrl = new URL(card.urlToImage);
              if (imageUrl.protocol !== 'http:' && imageUrl.protocol !== 'https:') {
                return null; // Пропускаем карточку с неправильным URL
              }
            } catch (error) {
              return null;
            }

            const descriptionElement = document.createElement('div');
            descriptionElement.innerHTML = card.description;
            const descriptionText = descriptionElement.textContent;
            if (!descriptionText || descriptionText.trim().length === 0) {
              return null; // Пропускаем карточку с пустым описанием
            }

            // Дождитесь загрузки изображения или истечения таймаута (1 секунда)
            try {
              await Promise.race([
                new Promise((resolve, reject) => {
                  const img = new Image();
                  img.src = card.urlToImage;
                  img.onload = resolve;
                  img.onerror = reject;
                }),
                new Promise((resolve, reject) => {
                  setTimeout(() => reject(new Error('Image load timeout')), 1000);
                }),
              ]);
              return card; // Возвращаем карточку, если изображение загрузилось успешно
            } catch (error) {
              return null;
            }
          }),
        );

        const validCards: NewsCards[] = filteredCards.filter((card) => card !== null);
        setCards(validCards);
        setIsLoading(false);
      } catch (error) {
      }
    }

    fetchAndFilterNews();
  }, []);

  // Запрос к обмену валюты
  function getExchangeRate(pair: Pair): Promise<ExchangeResult> {
    return getChangeApi.getChange(pair).then((res: string[]) => {
      const value = res;
      return {
        value,
        pair,
      };
    });
  }

  // Массив промисов для всех запросов
  function intervalRequestsPeriodically() {
    const exchangeRatePromises = currencyPairs.map((pair) => getExchangeRate(pair));
    Promise.all(exchangeRatePromises)
      .then((res: ExchangeResult[]) => {
        const exchangeRatesArray = res.map((result, i: number) => ({
          // @ts-ignore
          value: result.value.toFixed(2),
          currency: currencyPairs[i].from,
        }));
        setCurrency(exchangeRatesArray);
      })
      .catch(() => {
      });
  }

  function executeRequestsOnLoad() {
    intervalRequestsPeriodically();
    setInterval(intervalRequestsPeriodically, intervalMilliseconds);
  }

  // Вызов функции при загрузке страницы
  window.onload = executeRequestsOnLoad;
  return (
    <>
      <Header />
      <main className="content">
        <Routes>
          <Route
            path="/"
            element={ (
              <Main
                cards={ cards }
                addCard={ addCard }
                isLoading={ isLoading }
                currency={ currency }
              />
            ) }
          />
          <Route path="/credit-card" element={ <CreditCard /> } />
          <Route path="*" element={ <PageNotFound /> } />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
