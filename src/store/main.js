import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    value: "",
  }),
  actions: {
    setValue(value) {
      this.value = value;
    },
  },
  getters: {
    getValue: (state) => state.value,
  },
});
