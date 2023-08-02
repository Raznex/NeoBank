import getNewsApi from "../../assets/utils/GetNewsApi.js";

const template = document.getElementById("card-add");
const newsContainer = document.getElementById("newsContainer");
let newsData = [];
//Рендер одной карточки с новостями
function renderCard(data) {
  const newsCard = template.content.querySelector('.news__card').cloneNode(true);
  const imageElement = newsCard.querySelector(".news__card-image");
  const titleElement = newsCard.querySelector(".news__card-title");
  const textElement = newsCard.querySelector(".news__card-text");
  imageElement.src = data.description;
  imageElement.alt = data.nameRU;
  titleElement.textContent = data.nameRU;
  textElement.textContent = data.description;
  newsContainer.appendChild(newsCard);
  return newsCard;
}

// Получение массива карточек и рендер на страницу
getNewsApi.getNews()
  .then((data) => {
    newsData = data;
    newsData.forEach((item) => {
      renderCard(item);
    });
  })
  .catch((error) => {
    console.error(error);
  });
