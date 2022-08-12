import type { User } from "@/types/models/User";
import http from "@/api/http";

export const UserResource = {
  create(user: User) {
    return http.post("/api/v1/users", user);
  },
};
