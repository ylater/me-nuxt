
export const useAppStore = defineStore('app', {
  state: () => ({
    unlocked: false,
    visiblePin: false,
    video: '',
  }),
  persist: {
    storage: persistedState.sessionStorage,
  },
  actions: {
    setUnlocked(val: boolean) {
      this.unlocked = val
    },
    setVisiblePin(val: boolean) {
      this.visiblePin = val
    },
    setBgVideo(val: string) {
      this.video = val
    }
  }

})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
