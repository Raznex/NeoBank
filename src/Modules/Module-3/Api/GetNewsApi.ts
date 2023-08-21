// @ts-ignore
// eslint-disable-next-line
interface GetNewsApiOptions {
  url: string;
  headers: HeadersInit;
}

class GetNewsApi {
  private _url: string;

  constructor(options: { url: string }) {
    this._url = options.url;
  }

  private _getResponseData(res: Response) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  private _request(url: string, options: RequestInit) {
    return fetch(url, options).then(this._getResponseData);
  }

  getNews = () => {
    return this._request(`${this._url}`, {
      method: "GET",
    });
  };
}

const getNewsApi = new GetNewsApi({
  url: "https://newsapi.org/v2/everything?q=keyword&apiKey=e3f179be39aa49c4b4320b572a2744a8",
});


export default getNewsApi;
