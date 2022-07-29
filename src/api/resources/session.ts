import { ApiService } from "@/api/apiService"
import type { Session } from "@/types/models/session";

export const SessionResource = {
  sign_in(session: Session) {
    return ApiService.post('/users/sign_in', session)
  }
}
