import { ApiService } from "@/api/apiService";
import type { Session } from "@/types/models/Session";

export const SessionResource = {
  sign_in(session: Session) {
    return ApiService.post("/users/sign_in", session);
  },
};
