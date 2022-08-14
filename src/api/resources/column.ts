import http from "@/api/http";
import type { Column } from "@/types/models/Column";

export const ColumnResource = {
  create(column: Column) {
    return http.post("/api/v1/columns", column);
  },
  update(column: Column) {
    return http.put(`/api/v1/columns/${column.id}`, column);
  },
  show(id: number) {
    return http.get(`/api/v1/columns/${id}`);
  },
};
