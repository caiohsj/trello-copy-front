import http from "@/api/http";

export const BoardResource = {
  create(board: FormData) {
    return http.post("/api/v1/boards", board);
  },
  index() {
    return http.get("/api/v1/boards");
  },
};
