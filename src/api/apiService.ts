import { useSessionStore } from "@/stores/session";
import type { Http } from "@/types/Http";

export const ApiService: Http = {
  baseUrl: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  authorization: () => {
    const currentUser = useSessionStore().getCurrentUser;

    if (!currentUser) return {};

    return {
      USER_EMAIL: currentUser.email,
      USER_TOKEN: currentUser.authentication_token,
    };
  },
  async get(endpoint: string, query?: BodyInit) {
    const response = await fetch(this.baseUrl + endpoint, {
      method: "GET",
      body: query,
      headers: {
        ...this.headers,
        ...this.authorization(),
      },
    });
    const json = await response.json();
    return new Promise<any>((resolve, reject) => {
      if (response.ok) resolve(json);
      reject(json);
    });
  },
  async post(endpoint: string, params: BodyInit) {
    const response = await fetch(this.baseUrl + endpoint, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        ...this.headers,
        ...this.authorization(),
      },
    });
    const json = await response.json();
    return new Promise<any>((resolve, reject) => {
      if (response.ok) resolve(json);
      reject(json);
    });
  },
  async postFormData(endpoint: string, params: FormData) {
    const response = await fetch(this.baseUrl + endpoint, {
      method: "POST",
      body: params,
      headers: {
        ...this.authorization(),
      },
    });
    const json = await response.json();
    return new Promise<any>((resolve, reject) => {
      if (response.ok) resolve(json);
      reject(json);
    });
  },
  async put(endpoint: string, params: BodyInit) {
    const response = await fetch(this.baseUrl + endpoint, {
      method: "PUT",
      body: JSON.stringify(params),
      headers: {
        ...this.headers,
        ...this.authorization(),
      },
    });
    const json = await response.json();
    return new Promise<any>((resolve, reject) => {
      if (response.ok) resolve(json);
      reject(json);
    });
  },
  async putFormData(endpoint: string, params: FormData) {
    const response = await fetch(this.baseUrl + endpoint, {
      method: "PUT",
      body: params,
      headers: {
        ...this.authorization(),
      },
    });
    const json = await response.json();
    return new Promise<any>((resolve, reject) => {
      if (response.ok) resolve(json);
      reject(json);
    });
  },
  async delete(endpoint: string) {
    const response = await fetch(this.baseUrl + endpoint, {
      method: "DELETE",
      headers: {
        ...this.headers,
        ...this.authorization(),
      },
    });
    const json = await response.json();
    return new Promise<any>((resolve, reject) => {
      if (response.ok) resolve(json);
      reject(json);
    });
  },
};
