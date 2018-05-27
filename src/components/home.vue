<template>
  <div class="hello">
    <div class="column is-8 is-offset-2">
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
           Fatty
          </h1>
          <div class="column is-6 is-offset-3">
            <b-field lable="search">
                <b-input v-model="keyword"
                placeholder="อาหารที่ต้องการค้นหา"
                @keyup.native.enter="enter"
                @input="search()"
                ></b-input>
            </b-field>
          </div>
        </div>
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
                <p class="bd-notification is-primary has-text-centered"><strong class="name">น้ำ</strong>{{food.Water}}</p>
                <p class="bd-notification is-primary has-text-centered"><strong class="name">โปรตีน</strong>{{food.Protien}}</p>
                <p class="bd-notification is-primary has-text-centered"><strong class="name">ไขมัน</strong>{{food.Fat}}</p>
                <p class="bd-notification is-primary has-text-centered"><strong class="name">คาร์โบไฮเดรต</strong>{{food.Carbohydrate}}</p>
                <p class="bd-notification is-primary has-text-centered"><strong class="name">ใยอาหาร</strong>{{food.Dietary_Fiber}}</p>
              </div>
            </div>
            <div class="card-footer-item">
              <div class="media-content">
                <p class="bd-notification is-primary has-text-centered"><strong class="name">แคลเซียม</strong>{{food.Calcium}}</p>
                <p class="bd-notification is-primary has-text-centered"><strong class="name">ฟอสฟอรัส</strong>{{food.Phosphorus}}</p>
                <p class="bd-notification is-primary has-text-centered"><strong class="name">ธาตุเหล็ก</strong>{{food.Iron}}</p>
              </div>
            </div>
            <div class="card-footer-item">
              <div class="media-content">
                <p class="bd-notification is-primary has-text-centered"><strong class="name">วิตามิน A1</strong>{{food.Total_Vit_A}}</p>
                <p class="bd-notification is-primary has-text-centered"><strong class="name">เบตาคาโรทีน</strong>{{food.Betacarotene}}</p>
                <p class="bd-notification is-primary has-text-centered"><strong class="name">วิตามิน B1</strong>{{food.Thiamin}}</p>
                <p class="bd-notification is-primary has-text-centered"><strong class="name">วิตามิน B2</strong>{{food.Riboflavin}}</p>
                <p class="bd-notification is-primary has-text-centered"><strong class="name">วิตามิน E</strong>{{food.VitaminE}}</p>
                <p class="bd-notification is-primary has-text-centered"><strong class="name">วิตามิน B3</strong>{{food.Niacin}}</p>
                <p class="bd-notification is-primary has-text-centered"><strong class="name">วิตามิน C</strong>{{food.VitaminC}}</p>
              </div>
            </div>
          </div>nam,e
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
</style>
