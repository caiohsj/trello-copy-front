import { defineStore } from "pinia";
import { UserResource } from "@/api/resources/user";
import type { User } from "@/types/models/User";
import { useToastStore } from "./toast";
import { useSessionStore } from "./session";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: {},
  }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    createUser(user: User) {
      UserResource.create(user)
        .then((response) => {
          this.$patch((state) => (state.user = response));
          useSessionStore().createSession({
            email: user.email,
            password: user.password,
          });
        })
        .catch((err) => useToastStore().showToast(err));
    },
  },
});
