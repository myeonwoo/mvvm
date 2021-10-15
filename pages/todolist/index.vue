<template>
  <div class="home mx-4 mt-5">
    <v-row>
      <v-col cols="12" sm="3">
        <v-text-field v-model="newTodo.start_at" type="date" label="start"></v-text-field>
      </v-col>
      <v-col cols="12" sm="3">
        <v-text-field v-model="newTodo.end_at" type="date" label="end"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          outlined
          label="TODO 추가"
          append-icon="mdi-plus"
          class="pa-3"
          hide-details
          clearable
          v-model="newTodo.title"
          @click:append="addTodo"
          @keyup.enter="addTodo"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-divider></v-divider>
    
    
    <v-list flat class="pt-0" style="min-height: 700px;">
      <div
        v-for="(todo, idx) in todoInfo.list"
        :key="todo.id"
      >
        <v-list-item
          @click="toggleTodo(todo)"
          :class="{'blue lighten-5':todo.completed}"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="todo.completed" color="primary"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                :class="{'text-decoration-line-through':todo.completed}"
              >{{idx+1}}. {{todo.title}} ({{todo.id}})</v-list-item-title>
            </v-list-item-content>

            <v-btn icon
              @click="$event.stopPropagation()"
              :to="`/todolist/${todo.id}`"
            >
              <v-icon color="primary lighten-1">mdi-selection-search</v-icon>
            </v-btn>

            <v-list-item-action>
              <v-btn icon
                @click="deleteTodo(todo), $event.stopPropagation()"
              >
                <v-icon color="primary lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>

        </v-list-item>
        <v-divider></v-divider>
      </div>
      
    </v-list>
    <div class="text-center">
      <v-pagination
        :value="todoInfo.paginations.page"
        :length="todoInfo.paginations.totalpage"
        :total-visible="9"
        @input="selectPage"
      ></v-pagination>
    </div>


    <div v-if="true">
      <v-btn @click="append_more">append more</v-btn>
      <v-btn @click="empty_list">empty list</v-btn>
      <v-btn @click="increment">increment counter({{counter}})</v-btn>
      <v-btn @click="goPage">Go Page</v-btn>
      <v-btn @click="set_info">set_info</v-btn>

      <h4>todoInfo</h4>
      <pre>
        {{todoInfo}}
      </pre>
      <h4>완료 TODOs</h4>
      <pre>
        {{completedTodos}}
      </pre>
    </div>

    <v-snackbar
      v-model="snackbar.open"
    >
      {{ snackbar.msg }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar.open = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-overlay :value="overlay.window">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>

  </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  data: () => ({
    snackbar: {
      open: false,
      text: 'It is snackbar'
    },
    newTodo: {
      title:'',
      start_at:'',
      end_at:''
    },
    overlay: {
      window: false
    },
    selectedTodoId: null
  }),
  computed: {
    counter(){
      return this.$store.state.counter
    },
    todos () {
      // return this.$store.state.list
      return this.$store.state.todos.list
    },
    todoInfo () {
      return this.$store.state.todos.info
    },
    selectedTodo () {
      return this.$store.getters['todos/getTodoById'](this.selectedTodoId);
    },
    completedTodos(){
      return this.$store.getters['todos/getCompletedTodos']
    },
  },
  methods: {
    ...mapMutations({
      increment: 'increment',
      // toggle: 'todos/toggle',
      empty_list: 'todos/empty_list',
    }),
    set_info(){
      let list = [1,2,3,4]
      
      this.$store.commit('todos/set_info', {list,paginations:this.paginations})
    },
    goPage(){
      this.$router.go(1);
    },
    selectPage(page) {
      let paginations = Object.assign({}, this.todoInfo.paginations)
      paginations.page = page
      this.$store.commit('todos/set_info_paginations', paginations)
      this.init_todos()
    },
    selectTodo(todo) {
      this.selectedTodoId = todo.id
    },
    openSnackbar(msg) {
      this.snackbar.msg = msg;
      this.snackbar.open = true;
    },
    /* Vuex 사용하는 methods */
    async addTodo () {
      let todo = {
        user_id: 2,
        userid: "mw.lim@gmail.com",
        title: this.newTodo.title,
        start_at: this.newTodo.start_at ? `${this.newTodo.start_at} 00:00:00`: '',
        end_at: this.newTodo.end_at ? `${this.newTodo.end_at} 23:59:59`: '',
        completed: false
      }

      // TODO: api 호출 리턴 데이타 입력
      let newTodo = await this.$axios.$post('http://127.0.0.1:8000/api/todo/store', {todo});

      this.newTodo.title = ''
      this.newTodo.start_at = ''
      this.newTodo.end_at = ''

      let paginations = Object.assign({},this.todoInfo.paginations)
      paginations.page = 1
      this.$store.commit('todos/set_info_paginations', paginations)

      // 리스트 업데이트
      this.init_todos()

      this.openSnackbar(`TODO: ${newTodo.title} 추가되었습니다.`)
    },
    async toggleTodo(todo) {

      this.$store.commit('todos/toggle', todo)

      // TODO: api 호출 리턴 데이타 입력
      let result = await this.$axios.$put('http://127.0.0.1:8000/api/todo/'+todo.id, {todo});

      this.openSnackbar(`TODO: ${todo.title} 상태 변경되었습니다.`)
    },
    async deleteTodo(todo) {

      // TODO: api 호출 리턴 데이타 입력
      let result = await this.$axios.$delete('http://127.0.0.1:8000/api/todo/'+todo.id);

      // 리스트 업데이트
      this.init_todos()

      this.openSnackbar(`TODO: ${todo.title} 삭제되었습니다.`)
    },
    append_more() {

      this.newTodo.title = "도서관 가기"
      this.addTodo();

      return;

      let list = [
        {id:Date.now(), user_id:1, title:'낮잠자기', completed:false},
        {id:(Date.now() + 1), user_id:1, title:'도서관 가기', completed:false},
        {id:(Date.now() + 2), user_id:1, title:'책읽기', completed:false},
      ];

      this.$store.commit('todos/append_list', list)

      this.openSnackbar(`리스트 추가되었습니다.`)
    },
    async init_todos() {
      this.overlay.window = true;
      let params = {
        page: this.todoInfo.paginations.page, 
        limit: this.todoInfo.paginations.limit
      }

      /* start: TODO : api 호출 */
      let todos = await this.$axios.$get('http://127.0.0.1:8000/api/todos', {
        params: params
      })
      .then(res => {return res})
      .catch((err, ctx) => {
        alert('API 호출 에러 발생하여 임시 데이타 사용합니다.');
        return {
          totalpage: 1,
          result: [
            {id:1, user_id:1, userid:'mw.lim@gmail.com', title:'Wake up', completed:true},
            {id:2, user_id:1, userid:'mw.lim@gmail.com', title:'Get bananas', completed:false},
            {id:3, user_id:1, userid:'mw.lim@gmail.com', title:'Eat bananas', completed:false},
            {id:4, user_id:1, userid:'mw.lim@gmail.com', title:'Poo bananas', completed:false},
            {id:5, user_id:1, userid:'mw.lim@gmail.com', title:'Show Dr poo bananas', completed:false},
          ]
        }
      });
      /* end: TODO : api 호출 */

      if (todos.result) {
        // this.paginations.totalPage = todos.totalpage;
        // this.$store.commit('todos/set_list', todos.result)

        let list = todos.result
        let paginations = Object.assign({},this.todoInfo.paginations)
        paginations.totalpage = todos.totalpage;
        console.log({todos,list,paginations});
        this.$store.commit('todos/set_info', {list,paginations})
      }


      this.overlay.window = false;
    }
  },
  mounted(){
    this.init_todos()
  }
}

</script>
<style scoped>
</style>
