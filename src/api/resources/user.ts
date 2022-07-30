import { ApiService } from "@/api/apiService"
import type { User } from "@/types/models/User"

export const UserResource = {
  create(user: User) {
    return ApiService.post('/users', user)
  }
}
