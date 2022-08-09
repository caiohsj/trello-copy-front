import type { Rest } from "@/types/Rest";

export class RestClient implements Rest {
  baseUrl = "http://localhost:3000";
  headers = new Headers();
  private request: Request = new Request(this.baseUrl);
  interceptRequest?: (req: Request) => Request;

  async get(endpoint: string, query: object = {}) {
    if (query && typeof Object) {
      const queryParams = new URLSearchParams(
        Array.from(Object.entries(query))
      ).toString();
      endpoint += `?${queryParams}`;
    }

    const response = await this.createRequest(endpoint, "GET");
    const json = await response.json();

    return new Promise<any>((resolve, reject) => {
      if (response.ok) resolve(json);
      reject(json);
    });
  }

  async post(endpoint: string, params: object | FormData) {
    const response = await this.createRequest(endpoint, "POST", params);
    const json = await response.json();

    return new Promise<any>((resolve, reject) => {
      if (response.ok) resolve(json);
      reject(json);
    });
  }

  async put(endpoint: string, params: object) {
    const response = await this.createRequest(endpoint, "PUT", params);
    const json = await response.json();

    return new Promise<any>((resolve, reject) => {
      if (response.ok) resolve(json);
      reject(json);
    });
  }

  async delete(endpoint: string) {
    const response = await this.createRequest(endpoint, "DELETE");
    const json = await response.json();

    return new Promise<any>((resolve, reject) => {
      if (response.ok) resolve(json);
      reject(json);
    });
  }

  private createRequest(
    endpoint: string,
    method: string,
    body?: object | FormData
  ): Promise<Response> {
    const parsedBody = this.parseBody(body);

    this.request = new Request(new URL(endpoint, this.baseUrl), {
      method: method,
      headers: this.headers,
      body: parsedBody,
    });

    if (this.interceptRequest) {
      return fetch(this.interceptRequest(this.request));
    }

    return fetch(this.request);
  }

  private parseBody(body?: object | FormData): FormData | string | null {
    if (!body) return null;

    if (body && !(body instanceof FormData)) {
      this.headers.set("Content-Type", "application/json");
      this.headers.set("Accept", "application/json");
      return JSON.stringify(body);
    }

    return body;
  }
}
