<template>
  <div class="home mx-4 mt-5">
    <v-text-field
      outlined
      label="업무 추가"
      append-icon="mdi-plus"
      class="pa-3"
      hide-details
      clearable
      v-model="newTaskTitke"
      @click:append="addTodo"
      @keyup.enter="addTodo"
    ></v-text-field>
    <v-list flat class="pt-0">
      <div
        v-for="task in tasks"
        :key="task.id"
      >
        <v-list-item
          @click="toggleTodo(task.id)"
          :class="{'blue lighten-5':task.done}"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                :class="{'text-decoration-line-through':task.done}"
              >{{task.title}}</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon
                @click.prevent="deleteTask(task.id), $event.stopPropagation()"
              >
                <v-icon color="primary lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>

        </v-list-item>
        <v-divider></v-divider>
      </div>
      
    </v-list>
    <v-btn @click="test_axios">test axios</v-btn>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  data: () => ({
    newTaskTitke: '',
    tasks: [],
    // tasks: [
    //   {id:1, title:'Wake up', done:false},
    //   {id:2, title:'Get bananas', done:false},
    //   {id:3, title:'Eat bananas', done:false},
    //   {id:4, title:'Poo bananas', done:false},
    //   {id:5, title:'Show Dr poo bananasaa', done:false},
    // ],
    myitems: [
      {id:1, user_id:1, title:'Wake up', done:false},
    ],
    counter: 0
  }),
  async asyncData({ $axios }) {
    const myitems = await $axios.$get('http://127.0.0.1:8000/api/items')
    
    return { myitems }
  },
  mounted() {
    this.counter = this.$store.state.counter;
    this.tasks = this.$store.state.todos.list;
  },
  computed: {
    // counter () {
    //   return this.$store.state.counter
    // },
    // todos () {
    //   return this.$store.state.todos.list
    // }
  },
  methods: {
    async test_axios() {
      let data = await this.$axios.$get('http://127.0.0.1:8000/api/items');
      console.log(data)
    },
    /* Vuex 사용하는 methods */
    addTodo () {
      // TODO: api 호출 리턴 데이타 입력
      let task = {
        id:Date.now(),
        title:this.newTaskTitke,
        done:false
      }
      this.$store.commit('todos/add', task)
      this.newTaskTitke = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    }),
    toggleTodo(id) {
      // TODO: api 호출 리턴 데이타 입력
      let todo = this.tasks.filter(task=> task.id === id)[0]
      console.log(['toggleTodo',todo]);
      this.$store.commit('todos/toggle', todo)
    },
    deleteTask(id) {

      // TODO: api 호출 리턴 데이타 입력
      let todo = this.tasks.filter(task=> task.id === id)[0]
      console.log(['deleteTask',todo]);
      // return;
      this.$store.commit('todos/remove', todo)

      // this.tasks = this.tasks.filter(task=> task.id !== id)
    },
    addTask() {
      let task = {
        id:Date.now(),
        title:this.newTaskTitke,
        done:false
      }
      this.newTaskTitke = ''
      this.tasks.push(task)
    }
  }
}

</script>
<style lang="css" scoped>
</style>
