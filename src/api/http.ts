import { useSessionStore } from "@/stores/session";
import { RestClient } from "./rest.client";

const http = new RestClient();

http.interceptRequest = (req: Request): Request => {
  const sessionStore = useSessionStore();

  if (sessionStore.hasSession) {
    req.headers.set("USER_EMAIL", sessionStore.getCurrentUser.email);
    req.headers.set(
      "USER_TOKEN",
      sessionStore.getCurrentUser.authentication_token
    );
  }
  return req;
};

export default http;
