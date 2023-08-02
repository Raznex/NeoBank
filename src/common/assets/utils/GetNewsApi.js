class GetNewsApi {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  _request(url, options) {
    return fetch(url, options).then(this._getResponseData);
  }

  getNews = () => {
    return this._request(`${this._url}`, {
      method: "GET",
      headers: this._headers,
    });
  };
}

const getNewsApi = new GetNewsApi({
  // url: "https://newsapi.org/v2/everything?q=keyword&apiKey=e3f179be39aa49c4b4320b572a2744a8",
  url: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  },
});


export default getNewsApi;
