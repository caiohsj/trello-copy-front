import type { User } from "@/types/models/User";
import http from "@/api/http";

export const UserResource = {
  create(user: User) {
    return http.post("/users", user);
  },
};
