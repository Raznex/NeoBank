interface GetChangeValueApiOptions {
  url: string;
  headers: HeadersInit;
}

class GetChangeValueApi {
  private _url: string;
  private _headers: HeadersInit;

  constructor(options: GetChangeValueApiOptions) {
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

  getChange = ({ from, to }: { from: string, to: string }) => {
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
