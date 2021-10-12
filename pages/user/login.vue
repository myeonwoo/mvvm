<template>
  <div>
    <v-app>
      <v-card width="400" class="mx-auto mt-5">
        <v-card-title>
          <h1 class="display-1">Login</h1>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="email"
              prepend-icon="mdi-email"
              :rules="[rules.required, rules.email]"
              label="이메일"
            ></v-text-field>
            <v-text-field 
              label="아이디" 
              prepend-icon="mdi-account-circle"
              v-model="uerid"
            />
            <v-text-field 
              :type="showPassword ? 'text':'password'"
              label="비밀번호" 
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye':'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              @keyup.enter="login"
              v-model="password"
            />
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="success">등록</v-btn>
          <v-spacer></v-spacer>
          <v-btn type="submit" color="info" @submit="login">로그인</v-btn>
        </v-card-actions>

      </v-card>
      <v-btn @click="goback">go back</v-btn>
    </v-app>
  </div>
</template>

<script>
export default {
  layout: 'blank',
  methods: {
    goback(){
      this.$router.back();
    },
    login(){
      if (!this.password) {
        alert('비밀번호를 입력해주세요.');
      }
      else if (!this.userid) {
        alert('아이디를 입력해주세요.');
      }
      else if (!this.userid) {
        alert('아이디를 입력해주세요.');
      }
    }
  },
  data () {
    return {
      showPassword: false,
      password:'',
      userid:'',
      email:'',
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 20 || 'Max 20 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
    }
  }
}
</script>
