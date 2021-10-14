<template>
  <div>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              통합 어드민
            </v-list-item-title>
            <v-list-item-subtitle>Best Site</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app color="primary" dark :src="require(`@/assets/img/todolist/mountain.jpg`)" prominent>
        <template v-slot:img="{ props }">
          <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
        </template>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>Vuetify</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-main>
        <Nuxt />
      </v-main>
    </v-app>
  </div>
</template>
<script>
export default {
  head: {
    title: '통합 어드민 가이드'
  },
  data: () => ({
    drawer: true,
    items: [
      { title: '로그인/아웃', icon: 'mdi-login', to: '/user/login' },
      { title: 'Todo', icon: 'mdi-format-list-checks', to: '/todolist/viewlist' },
      { title: 'Calendar', icon: 'mdi-calendar', to: '/calendar' },
      { title: 'About', icon: 'mdi-help-box', to: '/todolist/about' },
      { title: '미션 Form A', icon: 'mdi-bullseye-arrow', to: '/mission/formA' },
    ],
    right: null,
  })
}

</script>
<style scoped>
</style>
