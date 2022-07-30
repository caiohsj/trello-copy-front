import type { Http } from "@/types/Http";

export const ApiService: Http = {
  baseUrl: "http://localhost:3000",
  async get(endpoint: string, query?: BodyInit) {
    const response = await fetch(this.baseUrl + endpoint, {
      method: "GET",
      body: query,
    });
    const json = await response.json();
    return new Promise<JSON>((resolve, reject) => {
      if (response.ok) resolve(json);
      reject(json);
    });
  },
  async post(endpoint: string, params: object) {
    const response = await fetch(this.baseUrl + endpoint, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const json = await response.json();
    return new Promise<JSON>((resolve, reject) => {
      if (response.ok) resolve(json);
      reject(json);
    });
  },
  async put(endpoint: string, params: object) {
    const response = await fetch(this.baseUrl + endpoint, {
      method: "PUT",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const json = await response.json();
    return new Promise<JSON>((resolve, reject) => {
      if (response.ok) resolve(json);
      reject(json);
    });
  },
  async delete(endpoint: string) {
    const response = await fetch(this.baseUrl + endpoint, { method: "DELETE" });
    const json = await response.json();
    return new Promise<JSON>((resolve, reject) => {
      if (response.ok) resolve(json);
      reject(json);
    });
  },
};
