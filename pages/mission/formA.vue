<template>
  <div class="">

    <button @click="goback">Go Back</button>
    <button type="button">Click Me!</button>
    <v-btn 
      color="primary"
    >test</v-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg:'content ....'
    }
  },
  methods: {
    goback(){
      this.$router.back();
    }
  }
}
</script>

<style lang="css" scoped>
.mycontainer {
  width: 90%;
  margin: auto;
  display: flex;
  border: 1px solid red;
}
</style>