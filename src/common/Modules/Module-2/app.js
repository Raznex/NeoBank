import getNewsApi from "../../assets/utils/GetNewsApi.js";
import getChangeApi from "../../assets/utils/GetChangeValue.js";
import {
  currencyPairs,
  intervalMilliseconds,
  template,
  newsContainer,
  currencyElements,
} from "../../assets/utils/Constants.js";

//Рендер одной карточки с новостями
function renderCard(data) {
  if (!data.urlToImage || hasMarkup(data.description)) {
    return null;
  }
  const newsCard = template.content.querySelector('.news__card').cloneNode(true);
  const imageElement = newsCard.querySelector(".news__card-image");
  const titleElement = newsCard.querySelector(".news__card-title");
  const textElement = newsCard.querySelector(".news__card-text");
  const linkElement = newsCard.querySelector(".news__card-link");
  imageElement.src = data.urlToImage;
  linkElement.href = data.url;
  imageElement.alt = data.title;
  titleElement.textContent = data.title;
  textElement.textContent = data.description;
  newsContainer.appendChild(newsCard);
  return newsCard;
}

function hasMarkup(str) {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = str;
  return tempElement.children.length > 0;
}

// Получение массива карточек и рендер на страницу
getNewsApi.getNews()
  .then((data) => {
    console.log(data)
    let newsData = [];
    newsData = data.articles;
    newsData.forEach((item) => {
      renderCard(item);
    });
  })
  .catch((error) => {
    console.error(error);
  });

// Запрос к обмену валюты
function getExchangeRate(pair) {
  return getChangeApi.getChange(pair)
    .then((res) => {
      const value = res;
      const arr = {pair, value};
      return arr;
      return `Exchange rate from ${pair.from} to ${pair.to}`;
    });
}

// Массив промисов для всех запросов
function intervalRequestsPeriodically() {
  const exchangeRatePromises = currencyPairs.map((pair) => getExchangeRate(pair));

  Promise.all(exchangeRatePromises)
    .then((results) => {
      const exchangeRatesArray = results.map((result) => {
        return `${result.value}`;
      });
      const roundedExchangeArray = exchangeRatesArray.map((str) => parseFloat(str).toFixed(2));
      for (let i = 0; i < currencyElements.length; i++) {
        currencyElements[i].textContent = roundedExchangeArray[i];
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

function executeRequestsOnLoad() {
  intervalRequestsPeriodically();
  setInterval(intervalRequestsPeriodically, intervalMilliseconds);
}

// Вызов функции при загрузке страницы
window.onload = executeRequestsOnLoad;

