export interface Http {
  baseUrl: string;
  headers: HeadersInit;
  authorization: () => object;
  get: (endpoint: string, query?: BodyInit) => Promise<any>;
  post: (endpoint: string, body?: object) => Promise<any>;
  put: (endpoint: string, body?: object) => Promise<any>;
  delete: (endpoint: string) => Promise<any>;
}
