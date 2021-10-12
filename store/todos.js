export const state = () => ({
  list: [
    {id:1, user_id:1, title:'Wake up', done:false},
    {id:2, user_id:1, title:'Get bananas', done:false},
    {id:3, user_id:1, title:'Eat bananas', done:false},
    {id:4, user_id:1, title:'Poo bananas', done:false},
    {id:5, user_id:1, title:'Show Dr poo bananas', done:false},
  ]
})

export const mutations = {
  add(state, todo) {
    state.list.push(todo)
  },
  remove(state, todo ) {
    state.list.splice(state.list.indexOf(todo), 1)
    // state.list = state.list.filter(task=> task.id !== todo.id)
    console.log(['state.list',state.list])
  },
  toggle(state, todo) {
    todo.done = !todo.done
  },
}