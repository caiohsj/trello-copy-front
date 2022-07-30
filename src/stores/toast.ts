import { defineStore } from "pinia";

export const useToastStore = defineStore({
  id: "toast",
  state: () => ({
    messages: new Array<string>(),
    show: false,
  }),
  actions: {
    showToast(messages: Array<string>) {
      this.$patch((state) => (state.messages = messages));
      this.$patch((state) => (state.show = true));
    },
    hideToast() {
      this.$patch((state) => (state.show = false));
    },
  },
});
