export interface Rest {
  get(endpoint: string, query: object): Promise<JSON>;
  post(endpoint: string, body: object | FormData): Promise<JSON>;
  put(endpoint: string, body: object | FormData): Promise<JSON>;
  delete(endpoint: string): Promise<JSON>;
}
