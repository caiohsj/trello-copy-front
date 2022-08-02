export interface Http {
  baseUrl: string;
  get: (endpoint: string, query?: BodyInit) => Promise<JSON>;
  post: (endpoint: string, body?: object) => Promise<JSON>;
  put: (endpoint: string, body?: object) => Promise<JSON>;
  delete: (endpoint: string) => Promise<JSON>;
}
