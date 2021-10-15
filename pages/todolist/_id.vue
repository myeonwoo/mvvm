<template>
  <div>
    <h4>pages/todolist/_id.vue</h4>
    
    <div v-if="true">
      ID : {{id}}
      Todo: <pre>{{todo}}</pre>
      valid: <pre>{{valid}}</pre>
      counter: <pre>{{counter}}</pre>
      selectedTodo: <pre>{{selectedTodo}}</pre>
    </div>

    <v-btn @click="backPage">go back</v-btn>

    <v-form v-if="todo">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="todo.title"
              :rules="rules.title"
              :counter="50"
              label="Title"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="todo.userid"
              :rules="rules.userid"
              label="userid"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-checkbox
              v-model="todo.completed"
              :label="`완료 여부: ${todo.completed}`"
            ></v-checkbox>
          </v-col>

        </v-row>
        <v-row>
          <v-col cols="12" md="4" >
            <v-text-field v-model="todo.start_at" type="date" label="start"></v-text-field>
          </v-col>
          <v-col cols="12" md="4" >
            <v-text-field v-model="todo.end_at" type="date" label="end"></v-text-field>
          </v-col>
          <v-col cols="12" md="4" >
            ccc
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4" >
            aaa
          </v-col>
          <v-col cols="12" md="4" >
            bbb
          </v-col>
          <v-col cols="12" md="4" >
            ccc
          </v-col>
        </v-row>

        <v-btn
          class="mr-4"
          type="submit"
          :disabled="!valid"
          @click.prevent="submitForm"
        >
          submit
        </v-btn>
        <v-btn icon
          :to="`/todolist`"
        > 돌아가기
        </v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  data () {
    return {
      id: this.$route.params.id,
      todo: null,
      rules: {
        title: [
          v => !!v || 'Title is required',
          v => v.length <= 50 || 'Title must be less than 50 characters',
        ],
        userid: [
          v => !!v || 'userid is required',
          v => /.+@.+/.test(v) || 'userid must be valid with E-mail format',
        ],
        email: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
      },
    }
  },
  computed: {
    valid(){
      if (this.todo && this.todo.title && this.todo.userid) return true;
      else return false;
    },
    counter(){
      return this.$store.state.counter
    },
    selectedTodo () {
      return this.$store.getters['todos/getTodoById'](this.id);
    },
  },
  methods: {
    backPage(){
      this.$router.back();
    },
    async submitForm(){

      let todo = this.todo;

      console.log(['submitForm',todo]);
      // return;
      // TODO: api 업데이트
      let result = await this.$axios.$put(`http://127.0.0.1:8000/api/todo/${todo.id}`, {todo});
      // let result = await this.$axios.$put('http://127.0.0.1:8000/api/todo/'+todo.id, {todo});

      console.log(['submitForm',todo, result]);
      // store 업데이트
      this.update_todo(todo)

      // 부모 페이지로 되돌아 가기
      this.$router.back();
      // // this.$router.replace('/todolist');
    },

    ...mapMutations({
      update_todo: 'todos/update_todo',
    }),
  },
  fetch(){
    console.log(['hrere',this.id])
    // this.todo = this.$store.getters['todos/getTodoById'](this.id);
    let todo = this.$store.getters['todos/getTodoById'](this.id);
    todo = todo ? todo : {title:''};
    this.todo = Object.assign({}, todo)
this.todo.start_at = '2021-10-14';
  },
}
</script>

<style lang="css" scoped>
</style>