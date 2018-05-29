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
          <p class="title is-5">name:  {{profile.name}}</p>
          <p class="title is-5">age:  {{profile.age}} years</p>
          <p class="title is-5">sex:  {{profile.sex}}</p>
          <p class="title is-5">weight:  {{profile.weight}} kg</p>
          <p class="title is-5">height:  {{profile.height}} cm</p>
          <p class="title is-5">bmi:  {{bmi}}</p>
          <p class="title is-5">bmr:  {{bmr}}</p>
          <p class="title is-5">tdee:  {{tdee}}</p>

        </div>
      </div>
   </nav>
    <!-- <div class="column" v-for="food in foods" :key="food.Food_ID"> -->
    <div class="column">
      <foodspanal :foods="cart"></foodspanal>
    </div>
    <div><h1 class="title is-1">Total <strong>{{sumCal}}</strong>  Kcal</h1></div>
    <div class="columns">
      <div class="column">
        <div class="hero is-primary is-bold column is-12 is-offset-1">
          <p class="title is-5">sex: {{sumCal}}</p>
          <p class="title is-5">age: 13 years</p>
          <p class="title is-5">weight: 55 kg</p>
          <p class="title is-5">height: 166 cm</p>
        </div>
      </div>
      <div class="column">
        <div class="hero is-primary is-bold column is-12 is-offset-1">
          <p class="title is-5">sex: female</p>
          <p class="title is-5">age: 13 years</p>
          <p class="title is-5">weight: 55 kg</p>
          <p class="title is-5">height: 166 cm</p>
        </div>
      </div>
      <div class="column">
        <div class="hero is-primary is-bold column is-12 is-offset-1">
          <p class="title is-5">sex: female</p>
          <p class="title is-5">age: 13 years</p>
          <p class="title is-5">weight: 55 kg</p>
          <p class="title is-5">height: 166 cm</p>
        </div>
      </div>
    </div>
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
    find (obj, arr) {
      var index = -1
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].Food_ID === obj.Food_ID) {
          index = i
          break
        }
      }
      return index
    }
  },
  computed: {
    ...mapGetters([
      'cart',
      'amount',
      'profile'
    ]),
    sumCal () {
      var sum = 0
      for (var i = 0; i < this.cart.length; i++) {
        var index = this.find(this.cart[i], this.amount)
        sum += parseInt(this.cart[i].Energy) * parseInt(this.amount[index].qty)
      }
      return sum
    },
    bmi () {
      const weight = this.profile.weight
      const height = this.profile.height
      const bmiSum = weight / ((height / 100) * (height / 100))
      return parseFloat(bmiSum).toFixed(2)
    },
    bmr () {
      const weight = this.profile.weight
      const height = this.profile.height
      const age = this.profile.age
      if (this.profile.sex === 'female') {
        const bmrFemaleSum = 665 + (9.6 * weight) + (1.8 * height) - (4.7 * age)
        return parseFloat(bmrFemaleSum).toFixed(2)
      } else {
        const bmrMaleSum = 66 + (13.7 * weight) + (5 * height) - (6.8 * age)
        return parseFloat(bmrMaleSum).toFixed(2)
      }
    },
    tdee () {
      if (this.profile.activity === '1') {
        const tdee = (1.2 * this.bmr)
        return parseFloat(tdee).toFixed(2)
      } else if (this.profile.activity === '2') {
        const tdee = (1.375 * this.bmr)
        return parseFloat(tdee).toFixed(2)
      } else if (this.profile.activity === '3') {
        const tdee = (1.55 * this.bmr)
        return parseFloat(tdee).toFixed(2)
      } else if (this.profile.activity === '4') {
        const tdee = (1.7 * this.bmr)
        return parseFloat(tdee).toFixed(2)
      } else {
        const tdee = (1.9 * this.bmr)
        return parseFloat(tdee).toFixed(2)
      }
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
