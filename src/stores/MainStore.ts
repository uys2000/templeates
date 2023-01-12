export const useMainStore = defineStore("MainStore", {
  state: () => {
    return {};
  },
  actions: {},
  getters: {},
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot));
}
