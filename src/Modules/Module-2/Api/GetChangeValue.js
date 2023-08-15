class GetChangeValueApi {
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

  getChange = ({from, to}) => {
    return this._request(`${this._url}${from}&to=${to}&q=1.0`, {
      method: "GET",
      headers: this._headers,
    });
  };
}

const getChangeApi = new GetChangeValueApi({
  url: "https://currency-exchange.p.rapidapi.com/exchange?from=",
  headers: {
    'X-RapidAPI-Key': '7f2d3197c0mshace66c6eb6ab592p1b9145jsn2fe9716a3175',
    'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
  },
});


export default getChangeApi;
