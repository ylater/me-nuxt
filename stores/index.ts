
export const useAppStore = defineStore('app', {
  state: () => ({
    unlocked: false,
    visiblePin: false,
    video: '',
    coverImage:''
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
    },
    setCoverImage(val: string) {
      this.coverImage = val
    }
  },
  getters: {
    
  },

})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
