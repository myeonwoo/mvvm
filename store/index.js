export const state = () => ({
  counter: 10,
  list: [],
})

export const mutations = {
  increment(state) {
    state.counter++
  },
}