export interface Http {
  baseUrl: string;
  headers: HeadersInit;
  authorization: () => object;
  get: (endpoint: string, query?: BodyInit) => Promise<any>;
  post: (endpoint: string, body: BodyInit) => Promise<any>;
  postFormData: (endpoint: string, body: FormData) => Promise<any>;
  put: (endpoint: string, body: BodyInit) => Promise<any>;
  putFormData: (endpoint: string, body: FormData) => Promise<any>;
  delete: (endpoint: string) => Promise<any>;
}
