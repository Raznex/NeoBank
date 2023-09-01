interface GetChangeValueApiOptions {
  url: string;
  headers: HeadersInit;
}

class GetChangeValueApi {
  private readonly _url: string;

  private readonly _headers: HeadersInit;

  constructor(options: GetChangeValueApiOptions) {
    // eslint-disable-next-line no-underscore-dangle
    this._url = options.url;
    // eslint-disable-next-line no-underscore-dangle
    this._headers = options.headers;
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
  getChange = ({ from, to }: { from: string; to: string }) => this._request(`${this._url}${from}&to=${to}&q=1.0`, {
    method: 'GET',
    // eslint-disable-next-line no-underscore-dangle
    headers: this._headers,
  });
}


const getChangeApi = new GetChangeValueApi({
  url: 'https://currency-exchange.p.rapidapi.com/exchange?from=',
  headers: {
    'X-RapidAPI-Key': '7f2d3197c0mshace66c6eb6ab592p1b9145jsn2fe9716a3175',
    'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com',
  },
});


export default getChangeApi;
