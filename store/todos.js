export const state = () => ({
  // item: {id:1, user_id:1, userid:'mw.lim@gmail.com', title:'Wake up', completed:false}
  list: [],
  info: {
    list: [],
    paginations: {
      page: 1,
      limit: 10,
      totalPage: 1,
      totalcount:1
    },
  }
})

export const mutations = {
  set_info(state, {list, paginations}) {
    state.info.list = list;
    state.info.paginations = paginations;
  },
  set_info_paginations(state, paginations) {
    state.info.paginations = paginations;
  },

  set_list(state, list) {
    state.info.list = list;
  },
  append_list(state, list) {
    state.info.list = state.info.list.concat(list);
  },
  empty_list(state){
    state.info.list = []
  },
  add(state, todo) {
    state.info.list.push(todo)
  },
  remove(state, todo) {
    state.info.list = state.info.list.filter(task=> task.id !== todo.id)
  },
  toggle(state, todo) {
    todo.completed = !todo.completed
  },
  update_todo(state, i_todo) {
    let s_todo = state.info.list.find(todo => todo.id == i_todo.id)
    if (s_todo) Object.assign(s_todo, i_todo)
  },
}

export const getters = {
  get_info: state => {
    return state.info
  },
  getTodoById: (state) => (id) => {
    return state.info.list.find(todo => todo.id == id)
  },
  getCompletedTodos: state => {
    return state.info.list.filter(todo => todo.completed)
  },
  getAllTodos: state => {
    return state.info.list
  },
}