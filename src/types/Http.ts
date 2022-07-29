export interface Http {
  baseUrl: string
  get: (endpoint: string, query?: any) => Promise<any>
  post: (endpoint: string, body?: any) => Promise<any>
  put: (endpoint: string, body?: any) => Promise<any>
  delete: (endpoint: string) => Promise<any>
}
