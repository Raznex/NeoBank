// @ts-ignore
interface GetNewsApiOptions {
  url: string;
  headers: HeadersInit;
}

class GetNewsApi {
  private _url: string;
  private _headers: HeadersInit;

  constructor(options: GetNewsApiOptions) {
    this._url = options.url;
    this._headers = options.headers;
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
      headers: this._headers,
    });
  };
}
