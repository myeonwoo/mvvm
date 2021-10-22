<template>
  <div class="container ma-4" v-cloak>
    <div class="row">
      <h4>메세지 선택</h4>
      <span v-if="messageType=='message1'">{{message1}}</span>
      <span v-else-if="messageType=='message2'">{{message2}}</span>
      <span v-else-if="messageType=='message3'">{{message3}}</span>
      <span v-else>해당 사항 없는 타입.</span>
    </div>

    <div class="row">
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-sm btn-primary" @click="setMessageType('message1')">message1</button>
        <button type="button" class="btn btn-sm btn-info" @click="setMessageType('message2')">message2</button>
        <button type="button" class="btn btn-sm btn-warning" @click="setMessageType('message3')">message3</button>
      </div>
    </div>
    <div class="row">
      <div class="btn btn-info">Info</div>
      <button type="button" class="btn btn-info">Info</button>
      <div class="btn btn-info">Info</div>
    </div>

    <v-divider></v-divider>

    <div class="btn btn-info" @click="changeTheImage">changeTheImage</div>
    <input class="form-control" type="text" v-model="userInput"> {{userInput}}

    <div class="pa-4">
      <div class="card" style="width: 18rem;">
        <img :src="theImg.img" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">{{theImg.title}}</h5>
          <p class="card-text">{{theImg.text}}</p>
          <div class="btn btn-secondary ">Go somewhere</div>
        </div>
      </div>
    </div>

    <v-divider></v-divider>
    <ul>
      <li v-for="todo in todos">item #{{todo.id}}</li>
    </ul>


  </div>
</template>

<script>
export default {
  data () {
    return {
      messageType: 'message1',
      message1: 'message1 : Hello Vue World',
      message2: 'message2 : hello there',
      message3: `message3 : What's up`,

      images: [
        {id:1, selected:false, img:'https://picsum.photos/600/300/?image=1', title:"imag 1", text:"text 1"},
        {id:2, selected:false, img:'https://picsum.photos/600/300/?image=2', title:"imag 2", text:"text 2"},
        {id:3, selected:false, img:'https://picsum.photos/600/300/?image=3', title:"imag 3", text:"text 3"},
        {id:4, selected:false, img:'https://picsum.photos/600/300/?image=4', title:"imag 4", text:"text 4"},
        {id:5, selected:false, img:'https://picsum.photos/600/300/?image=5', title:"imag 5", text:"text 5"},
        {id:6, selected:false, img:'https://picsum.photos/600/300/?image=6', title:"imag 6", text:"text 6"},
        {id:7, selected:false, img:'https://picsum.photos/600/300/?image=7', title:"imag 7", text:"text 7"},
        {id:8, selected:false, img:'https://picsum.photos/600/300/?image=8', title:"imag 8", text:"text 8"},
        {id:9, selected:false, img:'https://picsum.photos/600/300/?image=9', title:"imag 9", text:"text 9"},
        {id:10, selected:false, img:'https://picsum.photos/600/300/?image=10', title:"imag 10", text:"text 10"},
        {id:11, selected:false, img:'https://picsum.photos/600/300/?image=11', title:"imag 11", text:"text 11"},
        {id:12, selected:true, img:'https://picsum.photos/600/300/?image=12', title:"imag 12", text:"text 12"},
        {id:13, selected:false, img:'https://picsum.photos/600/300/?image=13', title:"imag 13", text:"text 13"},
        {id:14, selected:false, img:'https://picsum.photos/600/300/?image=14', title:"imag 14", text:"text 14"},
        {id:15, selected:false, img:'https://picsum.photos/600/300/?image=15', title:"imag 15", text:"text 15"},
        {id:16, selected:false, img:'https://picsum.photos/600/300/?image=16', title:"imag 16", text:"text 16"},
        {id:17, selected:false, img:'https://picsum.photos/600/300/?image=17', title:"imag 17", text:"text 17"},
        {id:18, selected:false, img:'https://picsum.photos/600/300/?image=18', title:"imag 18", text:"text 18"},
        {id:19, selected:false, img:'https://picsum.photos/600/300/?image=19', title:"imag 19", text:"text 19"},
        {id:20, selected:false, img:'https://picsum.photos/600/300/?image=20', title:"imag 20", text:"text 20"},
        {id:21, selected:false, img:'https://picsum.photos/600/300/?image=21', title:"imag 21", text:"text 21"},
        {id:22, selected:false, img:'https://picsum.photos/600/300/?image=22', title:"imag 22", text:"text 22"},
        {id:23, selected:false, img:'https://picsum.photos/600/300/?image=23', title:"imag 23", text:"text 23"},
        {id:24, selected:false, img:'https://picsum.photos/600/300/?image=24', title:"imag 24", text:"text 24"},
        {id:25, selected:true, img:'https://picsum.photos/600/300/?image=25', title:"imag 25", text:"text 25"},
      ],

      count: 1000,
      todos: [
        { text: 'Learn Vue', id: 4 },
        { text: 'Like the video', id: 2 },
        { text: 'Subscribe to DevMarketer', id: 6 }
      ],

      userInput: ''
    }
  },
  methods: {
    changeTheImage(){
      let images = this.images.filter(img => img.id != this.theImg.id)
      let i = Math.floor(Math.random() * images.length);
      this.images.forEach(img => (img.id == images[i].id) ? img.selected = true : img.selected = false)
    },
    setMessageType(type) {
      this.messageType = type;
    }
  },

  computed: {
    theImg(){
      let img = this.images.find(img => img.selected == true)
      const blankImg = {id:0, selected:false, img:'https://dummyimage.com/600x300/E0CECE/000', title:"no image", text:"no image"};
      return img ? img : blankImg;
    }
  }
}
</script>

<style scoped>
  [v-cloak] {
    display: none;
  }
  textarea, pre {
    background-color: #D1C0C0;
    overflow: hidden;
  }
</style>