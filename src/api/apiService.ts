import type { Http } from "@/types/Http"

export const ApiService: Http = {
  baseUrl: 'http://localhost:3000',
  async get(endpoint: string, query?: any) {
    const response = await fetch(this.baseUrl + endpoint, { method: 'GET', body: query })
    return response.json()
  },
  async post(endpoint: string, params: any) {
    const response = await fetch(this.baseUrl + endpoint, { method: 'POST', body: JSON.stringify(params), headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
    return response.json()
  },
  async put(endpoint: string, params: any) {
    const response = await fetch(this.baseUrl + endpoint, { method: 'PUT', body: JSON.stringify(params), headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
    return response.json()
  },
  async delete(endpoint: string) {
    const response = await fetch(this.baseUrl + endpoint, { method: 'DELETE' })
    return response.json()
  }
}
