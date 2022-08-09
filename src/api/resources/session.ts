import type { CreateSessionParams } from "@/types/stores/CreateSessionParams";
import http from "@/api/http";

export const SessionResource = {
  sign_in(session: CreateSessionParams) {
    return http.post("/users/sign_in", session);
  },
};
