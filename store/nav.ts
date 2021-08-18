export const state = () => ({
  IS_NAV_SLIM: false,
})

export const mutations = {
  SET_IS_NAV_SLIM: (state: any, value: boolean) => (state.IS_NAV_SLIM = value),
}
