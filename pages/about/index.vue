<template>
  <div class="about pa-6">
    <h1>About Vuetify Todo</h1>

    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <span
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          영상 보기
        </span>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Privacy Policy
        </v-card-title>

        <v-card-text>
          <div v-if="dialog" >
            <iframe style="width: 100%;" height="315" src="https://www.youtube.com/embed/CjXgoYo86yY?start=60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div v-else>
            
          </div>
        </v-card-text>



        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A accusantium sunt veniam voluptatem accusamus ex id omnis repellat alias perspiciatis laborum consequuntur temporibus voluptate esse magni eveniet quisquam, suscipit velit.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A accusantium sunt veniam voluptatem accusamus ex id omnis repellat alias perspiciatis laborum consequuntur temporibus voluptate esse magni eveniet quisquam, suscipit velit.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A accusantium sunt veniam voluptatem accusamus ex id omnis repellat alias perspiciatis laborum consequuntur temporibus voluptate esse magni eveniet quisquam, suscipit velit.</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showClip: false,
      dialog: false
    }
  }
}
</script>

<style lang="css" scoped>
</style>