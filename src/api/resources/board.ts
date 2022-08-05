import { ApiService } from "@/api/apiService";

export const BoardResource = {
  create(board: FormData) {
    return ApiService.postFormData("/api/v1/boards", board);
  },
  index() {
    return ApiService.get("/api/v1/boards");
  },
};
