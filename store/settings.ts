const user: object = {
  state: () => ({
    LOCALE: 'en',
    SCREEN_WIDTH: 111,
   }),
  getters: {
    IS_SM: (stateLocal: any) => stateLocal.SCREEN_WIDTH < 768,
  },
  mutations: {
    SET_LOCALE: (state: any, locale: string) => (state.LOCALE = locale),
    SET_SCREEN_WIDTH: (state: any, value: number) =>
      (state.SCREEN_WIDTH = value),
    SET_IS_DARK: (state: any, value: boolean) => (state.IS_DARK = value),
    SET_USE_MOCK: (state: any, value: boolean) => (state.USE_MOCK = value),
  },
  namespaced: true,
}

export default user
