<template>
  <div>
    <v-container>
      <div class="text-h6" v-pre>Part2 - 메세지  Binding</div>
      <v-row>
        <v-col cols="12" sm="6" md="3">message</v-col>
        <v-col cols="12" sm="6" md="9">{{message}}</v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="3">입력</v-col>
        <v-col cols="12" sm="6" md="9">
          <input type="text" class="form-control" id="inputPart2Input" v-model="message">
        </v-col>
      </v-row>

      <div class="text-h6">Part 3: Vue Directives</div>
      <v-row>
        <v-col cols="12" sm="6" md="3">Part 3-1 : v-cloak</v-col>
        <v-col cols="12" sm="6" md="9" v-cloak>{{message}}</v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="3">Part 3-2 : v-show</v-col>
        <v-col cols="12" sm="6" md="9">
          <div v-show="viewed">You have viewed this page - v-show</div>
          <div v-if="viewed">You have viewed this page - v-if</div>
          <div v-else>You have NOT viewed this page</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="3">Part 3-3 : v-html</v-col>
        <v-col cols="12" sm="6" md="9" v-html="intro"></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="3">Part 3-4 : v-if</v-col>
        <v-col cols="12" sm="6" md="9">
          <div v-if="viewed">viewed == true</div>
          <div v-if="viewed == viewed2">Viewed == viewed2</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="3">Part 3-5 : v-once</v-col>
        <v-col cols="12" sm="6" md="9" v-once>{{message}}</v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="3">Part 3-6 : v-pre</v-col>
        <v-col cols="12" sm="6" md="9" v-pre>{{obj1}}</v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="3">Part 3-7 : v-text</v-col>
        <v-col cols="12" sm="6" md="9" v-text="message"></v-col>
      </v-row>

      <h5 >Part 4: V-Bind Directive (v-bind)</h5>
      <v-row>
        <v-col cols="12" sm="6" md="3">:title</v-col>
        <v-col cols="12" sm="6" md="9" :title="img.title">{{img.title}}</v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="3">:src,:alt,:title</v-col>
        <v-col cols="12" sm="6" md="9">
          <img class="rounded float-start" :src="img.url" :alt="img.title" :title="img.title" />
          <img class="rounded float-end" :src="img.url" :alt="img.title" :title="img.title" />
        </v-col>
      </v-row>


      <div class="text-h6">Part 5: Looping</div>
      <v-row>
        <v-col cols="12" sm="6" md="3">v-for="todo in todos"</v-col>
        <v-col cols="12" sm="6" md="9">
          <ul>
            <li v-for="todo in todos">todo #{{todo.id}} : {{todo.text}}</li>
          </ul>
        </v-col>
      </v-row>

      <div class="text-h6">Part 6: 2-Way Binding</div>
      <v-row>
        <v-col cols="12" sm="6" md="3">v-model</v-col>
        <v-col cols="12" sm="6" md="9">
          <input type="text" class="form-control" v-model="message" />
        </v-col>
      </v-row>

      <div class="text-h6">Part 7: Event Handling</div>
      <v-row>
        <v-col cols="12" sm="6" md="3">카운터</v-col>
        <v-col cols="12" sm="6" md="9">
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-btn
                color="primary" depressed x-small tile
                @click="countUp(counters.o1)"
              >Cnt +</v-btn>
              <v-btn
                color="warning" depressed x-small tile
                @click="countDown(counters.o1)"
              >Cnt -</v-btn>
              <v-btn
                depressed x-small tile
                @click="clearCounterInterval(counters.o1)"
                v-if="counters.o1.intervalId"
              >1초 인터벌 종료</v-btn>
              <v-btn
                color="primary" depressed x-small tile
                @click="setCounterInterval(counters.o1)"
                v-else
              >1초 인터벌 시작</v-btn>
              {{ counters.o1.num }}
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-btn
                color="primary" depressed x-small tile
                @click="countUp(counters.o2)"
              >Cnt +</v-btn>
              <v-btn
                color="warning" depressed x-small tile
                @click="countDown(counters.o2)"
              >Cnt -</v-btn>
              <v-btn
                depressed x-small tile
                @click="clearCounterInterval(counters.o2)"
                v-if="counters.o2.intervalId"
              >1초 인터벌 종료</v-btn>
              <v-btn
                color="primary" depressed x-small tile
                @click="setCounterInterval(counters.o2)"
                v-else
              >1초 인터벌 시작</v-btn>
              {{ counters.o2.num }}
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <div class="text-h6">Part 8: Computed Properties</div>
      <v-row>
        <v-col cols="12" sm="6" md="3">유저</v-col>
        <v-col cols="12" sm="6" md="9">
          <v-row>
            <v-col>
              <input type="text" class="form-control" placeholder="First Name" v-model="user.firstname"/>
            </v-col>
            <v-col>
              <input type="text" class="form-control" placeholder="Last Name" v-model="user.lastname"/>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" md="2">firstname</v-col>
            <v-col cols="12" sm="6" md="4">
              <div class="bg-secondary text-white"> {{user.firstname}}</div>
            </v-col>
            <v-col cols="12" sm="6" md="2">lastname</v-col>
            <v-col cols="12" sm="6" md="4">
              <div class="bg-secondary text-white">{{user.lastname}}</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              Hello <span style="color: #D3ADAD" > {{fullname}}</span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <div class="text-h6">Part 9: Getter & Setter Computed Properties</div>
      <v-row>
        <v-col cols="12" sm="6" md="3">유저</v-col>
        <v-col cols="12" sm="6" md="9">
          <v-row>
            <v-col>
              <label>First Name:</label>
              <input type="text" class="form-control" v-model="user.firstname"/>
            </v-col>
            <v-col>
              <label>Last Name:</label>
              <input type="text" class="form-control" v-model="user.lastname"/>
            </v-col>
            <v-col>
              <label>Full Name:</label>
              <input type="text" class="form-control" v-model="fullnameAlt"/>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" md="2">firstname</v-col>
            <v-col cols="12" sm="6" md="4">
              <div class="bg-secondary text-white">{{user.firstname}}</div>
            </v-col>
            <v-col cols="12" sm="6" md="2">lastname</v-col>
            <v-col cols="12" sm="6" md="4">
              <div class="bg-secondary text-white">{{user.lastname}}</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              Hello <span style="color: #D3ADAD" > {{fullname}}</span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <div class="text-h6">Part 10: AJAX to External API</div>
      <v-row>
        <v-col cols="12" sm="6" md="3">미국 zip 코드</v-col>
        <v-col cols="12" sm="6" md="9">
          <input type="text" class="form-control" placeholder="Starting Zip" v-model="startingZip">
        </v-col>
      </v-row>

    </v-container>



    <div class="container">



      <div class="row">
        <h5>Part 10: AJAX to External API</h5>
        <hr>

        <!-- <div class="mb-3 row">
          <label class="col-sm-2 col-form-label fw-bolder">Fill Out This Form</label>
          <div class="col-sm-10 row">
            <div class="col-6">
              <input type="text" class="form-control" placeholder="Starting Zip" v-model="startingZip">
              <span class="city-span">{{startingCity}}</span>
            </div>
            <div class="col-6">
              <input type="text" class="form-control" placeholder="Ending Zip" v-model="endingZip">
              <span class="city-span">{{endingCity}}</span>
            </div>
          </div>
        </div> -->

      </div>
      <hr>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue World',
      intro: "Welcome to the Tutorial <small>It is all about Vue.js</small>",
      viewed: true,
      viewed2: true,

      img: {
        title: "You loaded the page on " + new Date(),
        url: "https://dummyimage.com/200x50/E0CECE/000",
      },

      todos: [
        { id: 4, text: 'Learn Vue' },
        { id: 2, text: 'Like the video' },
        { id: 6, text: 'Subscribe to DevMarketer' }
      ],

      counters: {
        o1: {num:0, intervalId:null},
        o2: {num:0, intervalId:null},
      },

      user: {
        xp: 10,
        firstname:'',
        lastname:'',
      },

      startingZip: '12121',
      startingCity: '',
      endingZip: '',
      endingCity: '',

      obj1: {title:'test'},
    }
  },
  methods: {
    countUp: function(o) {
      o.num += 1
    },
    countDown: function(o) {
      o.num -= 1
    },
    setCounterInterval: function(o) {
      if (o.intervalId) clearInterval(o.intervalId);
      o.intervalId = setInterval(()=>o.num++, 1000);
    },
    clearCounterInterval: function(o) {
      clearInterval(o.intervalId);
      o.intervalId = null;
    },
    addXP: function() {
      return this.user.xp += 10
    },
    decreaseXP: function() {
      return this.user.xp -= 10
    },

    // lookupStartingZip: _.debounce(function() {
    //   var app = this
    //   app.startingCity = "Searching..."
    //   axios.get('http://ziptasticapi.com/' + app.startingZip)
    //         .then(function (response) {
    //           app.startingCity = response.data.city + ', ' + response.data.state
    //         })
    //         .catch(function (error) {
    //           app.startingCity = "Invalid Zipcode"
    //         })
    // }, 500),
    // lookupEndingZip: _.debounce(function() {
    //   var app = this
    //   app.endingCity = "Searching..."
    //   axios.get('http://ziptasticapi.com/' + app.endingZip)
    //         .then(function (response) {
    //           app.endingCity = response.data.city + ', ' + response.data.state
    //         })
    //         .catch(function (error) {
    //           app.endingCity = "Invalid Zipcode"
    //         })
    // }, 500)
  },
  computed: {
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    },
    fullname: function() {
      return this.user.firstname + " " + this.user.lastname
    },
    userLevel: function() {
      if (this.user.xp >= 200) {
        return "Pro"
      } else if (this.user.xp >= 100) {
        return "Intermediate"
      } else if (this.user.xp >= 0) {
        return "Beginner"
      } else {
        return "Banned"
      }
    },
    fullnameAlt: {
      // getter function
      get: function() {
        return this.user.firstname + " " + this.user.lastname
      },
      // setter function
      set: function(value) {
        var name = value.split(' ')
        this.user.firstname = name[0]
        this.user.lastname = name[name.length - 1]
      }
    },
  },
  watch: {
    // startingZip: function() {
    //   this.startingCity = ''
    //   if (this.startingZip.length == 5) {
    //     this.lookupStartingZip()
    //   }
    // },
    // endingZip: function() {
    //   this.endingCity = ''
    //   if (this.endingZip.length == 5) {
    //     this.lookupEndingZip()
    //   }
    // }
  },
  mounted() {
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
  span.city-span {
    color: (#444);
    text-transform: uppercase;
    margin-left: 5px;
    margin-top: 10px;
  }
</style>