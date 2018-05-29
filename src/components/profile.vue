<template>
  <div class="hello">

    <!-- <div v-for="food in foods" :key="food.memid">
      {{food.foodname}}</div> -->
    <div class="column is-8 is-offset-2">
    <nav class="level is-mobile">
      <div class="level-item has-text-centered">
        <router-link tag="li" to="/">
          <a><img src="../assets/logo.png" class="logo"></a>
        </router-link>
      </div>
      <div class="level-item has-text-centered">
        <b-field lable="search">
            <b-input v-model="keyword"
            placeholder="อาหารที่ต้องการค้นหา"
            @keyup.native.enter="enter"
            @input="search()"
            ></b-input>
            <button class="button is-danger" @click="search()">search</button>
        </b-field>
      </div>
       <div class="level-item has-text-centered">
        <h1 class="title">
          icon
        </h1>
      </div>
   </nav>
   <nav class="level is-mobile">
      <div class="level-item has-text-centered">
      </div>
      <div class="level-item has-text-centered">
        <div class="has-text-left">
          <p class="title is-5">you need</p>
          <p class="title is-5">Power <strong class="name">{{sumCal}} Kcal</strong></p>
          <p class="title is-6">See more</p>
        </div>
      </div>
       <div class="level-item has-text-left">
        <div class="hero is-medium is-primary is-bold column is-7 is-offset-2">
          <p class="title is-5">sex: female</p>
          <p class="title is-5">age: 13 years</p>
          <p class="title is-5">weight: 55 kg</p>
          <p class="title is-5">height: 166 cm</p>
        </div>
      </div>
   </nav>
    <!-- <div class="column" v-for="food in foods" :key="food.Food_ID"> -->
    <div class="column">
      <foodspanal :foods="cart"></foodspanal>
    </div>
    <div class="column"></div>
    <nav class="level is-mobile">
      <div class="level-item has-text-centered">
      </div>
       <div class="level-item has-text-centered">
        <div class="hero is-medium is-primary is-bold column is-12 is-offset-1">
          <p class="title is-5">sex: female</p>
          <p class="title is-5">age: 13 years</p>
          <p class="title is-5">weight: 55 kg</p>
          <p class="title is-5">height: 166 cm</p>
        </div>
      </div>
       <div class="level-item has-centered">
        <div class="hero is-medium is-primary is-bold column is-12 is-offset-2">
          <p class="title is-5">sex: female</p>
          <p class="title is-5">age: 13 years</p>
          <p class="title is-5">weight: 55 kg</p>
          <p class="title is-5">height: 166 cm</p>
        </div>
      </div>
       <div class="level-item has-centered">
        <div class="hero is-medium is-primary is-bold column is-12 is-offset-2">
          <p class="title is-5">sex: female</p>
          <p class="title is-5">age: 13 years</p>
          <p class="title is-5">weight: 55 kg</p>
          <p class="title is-5">height: 166 cm</p>
        </div>
      </div>
   </nav>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
import { mapGetters } from 'vuex'
import foodspanal from './foodspanal'
export default {
  name: 'HelloWorld',
  components: { foodspanal },
  data () {
    return {
      tmp: 7,
      keyword: ''
    }
  },
  methods: {
  },
  computed: {
    ...mapGetters([
      'cart'
    ]),
    sumCal () {
      var sum = 0
      for (var i = 0; i < this.cart.length; i++) {
        sum += parseInt(this.cart[i].Energy)
      }
      return sum
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.logo {
  height: 50px;
}
</style>
