export const state = () => ({
  // item: {id:1, user_id:1, userid:'mw.lim@gmail.com', title:'Wake up', completed:false}
  list: []
})

export const mutations = {
  set_list(state, list) {
    state.list = list;
    // state.list.splice(0, state.list.length);
    // list.forEach(todo => state.list.push(todo));

    // 즉시 반영 안되는 경우
    // state.list = list;
  },
  append_list(state, list) {
    // list.forEach(todo => state.list.push(todo))

    // 즉시 반영 안되는 경우
    state.list = state.list.concat(list);
  },
  empty_list(state){
    // state.list.splice(0, state.list.length)
    state.list = []
  },
  add(state, todo) {
    state.list.push(todo)
  },
  remove(state, todo) {
    // state.list.splice(state.list.indexOf(todo), 1)

    // 즉시 반영 안되는 경우
    state.list = state.list.filter(task=> task.id !== todo.id)
  },
  toggle(state, todo) {
    todo.completed = !todo.completed
  },
}

export const getters = {
  getTodoById: (state) => (id) => {
    return state.list.find(todo => todo.id == id)
  },
  getCompletedTodos: state => {
    return state.list.filter(todo => todo.completed)
  },
}