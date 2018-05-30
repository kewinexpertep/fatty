<template>
  <div class="hello">
    <section class="hero head is-medium is-bold">
          <nav class="navbar is-transparent">
            <div id="navbarExampleTransparentExample" class="navbar-menu">
              <div class="navbar-end">
                <div class="navbar-item">
                  <div class="field is-grouped">
                    <p class="control">
                      <a class="button is-info">
                        <span class="fas fa-home">
                          <i class="fas fa-info-circle"></i>
                        </span>
                        <span><router-link tag="li" to="/">HOME</router-link></span>
                      </a>
                     </p>
                  </div>
                </div>
              </div>
            </div>
          </nav>
      <div class="hero-body head">
        <div class="columns is-centered">
          <div class="column is-8 is-mobile-10">
            <router-link tag="li" to="/">
              <a><img src="../assets/logo.png" class="logo"></a>
            </router-link><br>
            <p class="title is-5" style="color:white;"> ร่างกายคุณต้องการพลังงาน {{tdee}} Kcal ต่อวัน</p>
          </div>
          <div class="column is-3 is-mobile-10">
            <div class="card">
              <div class="card-content">
                <p class="title">
                  <label class="">name:  {{profile.name}}</label>
                </p>
                <a class="subtitle">
                      <p class="title is-6">name:  {{profile.name}}</p>
                      <p class="title is-6">age:  {{profile.age}} years</p>
                      <p class="title is-6">sex:  {{profile.sex}}</p>
                      <p class="title is-6">weight:  {{profile.weight}} kg</p>
                      <p class="title is-6">height:  {{profile.height}} cm</p>
                      <p class="title is-6">bmi:  {{bmi}}</p>
                      <p class="title is-6">bmr:  {{bmr}}</p>
                      <p class="title is-6">tdee:  {{tdee}}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="column is-8 is-offset-2">
    <div class="card">
    <div class="column">
      <foodspanal :foods="cart"></foodspanal>
    </div>
      <div class="card">
      <div class="card-content">
    <div><h1 class="title is-1">Total <strong>{{sumCal}}</strong>  Kcal</h1></div>
    <div class="columns">
      <div class="column">
        <div class="hero  is-bold column is-12 is-offset-1"><br>
          <span v-if="tdee-sumCal > 0">พลังงานที่คุณขาด</span>
          <span v-else>พลังงานที่เกิน </span>
          <p class="title is-4"> {{Math.abs(tdee-sumCal)}} Kcal</p>
        </div>
      </div>
      <div class="column">
        <div class="hero  is-bold column is-12 is-offset-1"><br>
          ค่าดัชนีมวลกายของคุณ {{bmi}}
          <p class="title is-5" v-if="bmi < 18.5">น้ำหนักน้อย / ผอม</p>
          <p class="title is-5" v-else-if="bmi < 22.90">ปกติ (สุขภาพดี)</p>
          <p class="title is-5" v-else-if="bmi < 29.90">ท้วม / โรคอ้วนระดับ 1</p>
          <p class="title is-5" v-else-if="bmi < 29.90">อ้วน / โรคอ้วนระดับ 2</p>
          <p class="title is-5" v-else-if="bmi > 30">อ้วนมาก / โรคอ้วนระดับ 3</p>
        </div>
      </div>
      <div class="column">
        <div class="hero is-bold column is-12 is-offset-1">
            bmi : {{bmi}}<progress class="progress is-success" :value="bmi" max="40"></progress>
            bmr : {{bmr}}<progress class="progress is-warning" :value="bmr" max="3000"></progress>
            tdee : {{tdee}}<progress class="progress is-info" :value="tdee" max="3000"></progress>
        </div>
      </div>
    </div>
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
  height: 100px;
}
.hero.head {

  background-image: url('../assets/24840.jpg');
  background-size: cover;

}
</style>
