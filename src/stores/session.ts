import { defineStore } from "pinia";
import { SessionResource } from "@/api/resources/session";
import type { Session } from "@/types/models/Session";
import { useToastStore } from "./toast";

export const useSessionStore = defineStore({
  id: "session",
  state: () => ({
    session: localStorage.getItem("session") || "",
  }),
  getters: {
    getCurrentUser: (state) => JSON.parse(state.session),
    hasSession: (state) => (state.session ? true : false),
  },
  actions: {
    createSession(session: Session) {
      SessionResource.sign_in(session)
        .then((response) => {
          const jsonResponse = JSON.stringify(response);
          this.$patch((state) => (state.session = jsonResponse));
          localStorage.setItem("session", jsonResponse);
        })
        .catch((err) => useToastStore().showToast(err));
    },
    destroySession() {
      this.$patch((state) => (state.session = ""));
      localStorage.removeItem("session");
    },
  },
});
