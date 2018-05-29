<template>
  <div class="hello">
    <section class="hero head is-medium is-bold">
      <div class="hero-body">
        <router-link tag="li" to="/">
          <a><img src="../assets/logo.png" class="logo"></a>
        </router-link>
        <router-link tag="li" to="/profile">
          <a>profile</a>
        </router-link>
        <div class="columns is-centered">
          <div class="column is-desktop-7 is-mobile-10 is-narrow">
            <b-field lable="search">
                <b-input v-model="keyword"
                placeholder="อาหารที่ต้องการค้นหา"
                ></b-input>
                <button class="button is-danger" @click="search()">search</button>
            </b-field>
          </div>
        </div>
      </div>
    </section>
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <foodspanal :foods="foods"></foodspanal>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
import foodspanal from './foodspanal'
export default {
  name: 'HelloWorld',
  components: { foodspanal },
  data () {
    return {
      foods: [],
      keyword: '',
      Cart: [],
      tmp: ''
    }
  },
  mounted () {
    this.getAllMembers()
  },
  methods: {
    ...mapActions([
      'storeCart'
    ]),
    showSeemore (food) {
      if (this.tmp === food.Food_ID) {
        this.tmp = ''
      } else {
        this.tmp = food.Food_ID
      }
    },
    search () {
      let self = this
      axios.get('//fatty-db.herokuapp.com?crud=search&key=' + this.keyword).then(function (response) {
        self.foods = response.data.foods
      })
    },
    getAllMembers: function () {
      let self = this
      axios.get('//fatty-db.herokuapp.com/index.php').then(function (response) {
        self.foods = response.data.foods
      })
    }
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
.name {
  margin-right: 30px;
}
.logo {
  height: 80px;
}
.hero.head {

  background-image: url('../assets/24840.jpg');
  background-size: cover;
}
</style>
