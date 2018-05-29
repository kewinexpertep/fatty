<template>
  <div class="hello bg">

    <div class="column is-8 is-offset-2">
    <section>
      <!-- <div class="hero-body"> -->

        <!-- <img src = "/static/24840.jpg" width="1000"> -->

        <div class="title fatty">
          Fatty
        </div>
        <div class="column is-4 is-offset-4">
          <b-field lable="search">
              <b-input v-model="keyword"
              placeholder="อาหารที่ต้องการค้นหา"
              @keyup.native.enter="enter"
              @input="search()"
              ></b-input>
              <button class="button is-danger" @click="search()">search</button>
          </b-field>
        <!-- </div> -->
      </div>
    </section>
    <div class="column" v-for="food in foods" :key="food.Food_ID">
      <div class="card">
        <header class="card-header">
          <div class="column is-3">
            <figure class="media-left">
                <figure class="image is-64x64">
                  <img src="../assets/foods/f1.png">
                </figure>
            </figure>
          </div>
          <div class="column is-4 is-offset-1">
            <div class="media-content">
              <div class="field">
                <span class="control">
                   <p class="title is-3">
                    {{food.foodname}}
                  </p>
                </span>
              </div>
              <button class="button is-danger" v-if="food.Fat !== ''" @click="flagSeemore = true">See more</button>
            </div>
          </div>
          <div class="column is-3 is-offset-1">
            <div class="media-content">
              <div class="field">
                <span class="control">
                   <p class="title is-3">{{food.Energy}}</p>
                   <p class="title is-5">Kcal</p>
                </span>
              </div>
            </div>
          </div>
        </header>
        <footer class="card-footer" v-if="flagSeemore">
          <div class="card-footer-item">
            <div class="card-footer-item">
              <div class="media-content">
                <p class="bd-notification is-primary has-text-left"><strong class="name">น้ำ</strong></p>
                <p class="bd-notification is-primary has-text-left"><strong class="name">โปรตีน</strong></p>
                <p class="bd-notification is-primary has-text-left"><strong class="name">ไขมัน</strong></p>
                <p class="bd-notification is-primary has-text-left"><strong class="name">คาร์โบไฮเดรต</strong></p>
                <p class="bd-notification is-primary has-text-left"><strong class="name">ใยอาหาร</strong></p>
              </div>
              <div class="media-content">
                <p class="bd-notification is-primary has-text-left">{{food.Water}} g.</p>
                <p class="bd-notification is-primary has-text-left">{{food.Protien}} g.</p>
                <p class="bd-notification is-primary has-text-left">{{food.Fat}} g.</p>
                <p class="bd-notification is-primary has-text-left">{{food.Carbohydrate}} g.</p>
                <p class="bd-notification is-primary has-text-left">{{food.Dietary_Fiber}} g.</p>
              </div>
            </div>
            <div class="card-footer-item">
              <div class="media-content">
                <p class="bd-notification is-primary has-text-left"><strong class="name">แคลเซียม</strong></p>
                <p class="bd-notification is-primary has-text-left"><strong class="name">ฟอสฟอรัส</strong></p>
                <p class="bd-notification is-primary has-text-left"><strong class="name">ธาตุเหล็ก</strong></p>
              </div>
              <div class="media-content">
                <p class="bd-notification is-primary has-text-left">{{food.Calcium}}</p>
                <p class="bd-notification is-primary has-text-left">{{food.Phosphorus}}</p>
                <p class="bd-notification is-primary has-text-left" v-if="food.Iron !== ''">{{food.Iron}}g.</p>
                <p class="bd-notification is-primary has-text-left" v-if="food.Iron == ''">0 g.</p>
              </div>
            </div>
            <div class="card-footer-item">
              <div class="media-content">
                <p class="bd-notification is-primary has-text-left"><strong class="name">วิตามิน A1</strong></p>
                <p class="bd-notification is-primary has-text-left"><strong class="name">เบตาคาโรทีน</strong></p>
                <p class="bd-notification is-primary has-text-left"><strong class="name">วิตามิน B1</strong></p>
                <p class="bd-notification is-primary has-text-left"><strong class="name">วิตามิน B2</strong></p>
                <p class="bd-notification is-primary has-text-left"><strong class="name">วิตามิน E</strong></p>
                <p class="bd-notification is-primary has-text-left"><strong class="name">วิตามิน B3</strong></p>
                <p class="bd-notification is-primary has-text-left"><strong class="name">วิตามิน C</strong></p>
              </div>
              <div class="media-content">
                <p class="bd-notification is-primary has-text-left" v-if="food.Total_Vit_A == ''">-</p>
                <p class="bd-notification is-primary has-text-left" v-if="food.Total_Vit_A !== ''">{{food.Total_Vit_A}}%</p>
                <p class="bd-notification is-primary has-text-left" v-if="food.Betacarotene == ''">-</p>
                <p class="bd-notification is-primary has-text-left" v-if="food.Betacarotene !== ''">{{food.Betacarotene}}%</p>
                <p class="bd-notification is-primary has-text-left" v-if="food.Thiamin == ''">-</p>
                <p class="bd-notification is-primary has-text-left" v-if="food.Thiamin !== ''">{{food.Thiamin}}%</p>
                <p class="bd-notification is-primary has-text-left" v-if="food.Riboflavin == ''">-</p>
                <p class="bd-notification is-primary has-text-left" v-if="food.Riboflavin !== ''">{{food.Riboflavin}}%</p>
                <p class="bd-notification is-primary has-text-left" v-if="food.Vitamin_E == ''">-E</p>
                <p class="bd-notification is-primary has-text-left" v-if="food.Vitamin_E !== ''">{{food.Vitamin_E}}%</p>
                <p class="bd-notification is-primary has-text-left" v-if="food.Niacin == ''">-</p>
                <p class="bd-notification is-primary has-text-left" v-if="food.Niacin !== ''">{{food.Niacin}}%</p>
                <p class="bd-notification is-primary has-text-left" v-if="food.Vitamin_C == ''">-</p>
                <p class="bd-notification is-primary has-text-left" v-if="food.Vitamin_C !== ''">{{food.Vitamin_C}}%</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      foods: [],
      flagSeemore: false,
      keyword: ''
    }
  },
  mounted () {
    this.getAllMembers()
  },
  methods: {
    search () {
      let self = this
      axios.get('//fatty-db.herokuapp.com?crud=search&key=' + this.keyword).then(function (response) {
        console.log(response.data.foods)
        self.foods = response.data.foods
      })
    },
    getAllMembers: function () {
      let self = this
      axios.get('//fatty-db.herokuapp.com/index.php').then(function (response) {
        console.log(response.data.foods)
        self.foods = response.data.foods
      })
    }
  }
  // created () {
  //   document.body.style.background = "#0001 url('/static/24840.jpg')no-repeat right top"
  // }
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
.name {
  margin-right: 30px;
}
.bg {

   background: url(/static/24840.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.fatty{
  font-family: 'Poiret One', cursive;
  color: aliceblue;
  font-size: 100px;
}

</style>
