class GetNewsApi {
  private readonly _url: string;

  constructor(options: { url: string }) {
    // eslint-disable-next-line no-underscore-dangle
    this._url = options.url;
  }

  // eslint-disable-next-line no-underscore-dangle,class-methods-use-this
  private _getResponseData(res: Response) {
    if (!res.ok) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  // eslint-disable-next-line no-underscore-dangle
  private _request(url: string, options: RequestInit) {
    // eslint-disable-next-line no-underscore-dangle
    return fetch(url, options).then(this._getResponseData);
  }

  // eslint-disable-next-line no-underscore-dangle
  getNews = () => this._request(`${this._url}`, {
    method: 'GET',
  });
}

const getNewsApi = new GetNewsApi({
  url: 'https://newsapi.org/v2/everything?q=keyword&apiKey=e3f179be39aa49c4b4320b572a2744a8',
});


export default getNewsApi;
