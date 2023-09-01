class GetNewsApi {
  constructor(options) {
    // eslint-disable-next-line no-underscore-dangle
    this._url = options.url;
    // eslint-disable-next-line no-underscore-dangle
    this._headers = options.headers;
  }

  // eslint-disable-next-line class-methods-use-this,no-underscore-dangle
  _getResponseData(res) {
    if (!res.ok) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  // eslint-disable-next-line no-underscore-dangle
  _request(url, options) {
    // eslint-disable-next-line no-underscore-dangle
    return fetch(url, options).then(this._getResponseData);
  }

  getNews = () => this._request(`${this._url}`, {
    method: 'GET',
    // eslint-disable-next-line no-underscore-dangle
    headers: this._headers,
  });
}

const getNewsApi = new GetNewsApi({
  url: 'https://newsapi.org/v2/everything?q=keyword&apiKey=e3f179be39aa49c4b4320b572a2744a8',
});


export default getNewsApi;
