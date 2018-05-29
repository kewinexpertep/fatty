<template>
  <div class="hello">
    <section class="hero head is-medium is-bold">
        <router-link tag="li" to="/profile">
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
                        <span> &nbsp; PROFILE</span>
                      </a>
                      <button class="button is-warning" @click="showAddProfile()"><i class="fas fa-user"></i></button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </router-link>
      <div class="hero-body">
        <router-link tag="li" to="/">
          <a><img src="../assets/logo.png" class="logo"></a>
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
<b-modal :active.sync="isModalActive">
      <div class="card card-content">
        <div class="title columns is-centered">
         กรอกข้อมูลส่วนตัว
        </div>

        <div class="columns is-centered">
          <div class="column is-7">
            <b-field label="ชื่อ">
          <b-input type="text" placeholder="ชื่อ" v-model="name"></b-input>
        </b-field>
          </div>
          <div class="column">
          <b-field label="อายุ">
          <b-input type="number" placeholder="อายุ" v-model="age"></b-input>
        </b-field>
        </div>
        </div>

      <div class="columns">
        <div class="column">
            <b-field label="เพศ">
          <div class="block">
            <b-radio v-model="sex"
                native-value="male">
                ชาย
            </b-radio>
            <b-radio v-model="sex"
                native-value="female">
                หญิง
            </b-radio>
        </div>
        </b-field>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <b-field label="น้ำหนัก">
          <b-input type="number" placeholder="น้ำหนัก" v-model="weight"></b-input>
        </b-field>
        </div>
        <div class="column">
          <b-field label="ส่วนสูง">
          <b-input type="number" placeholder="ส่วนสูง" v-model="height"></b-input>
        </b-field>
        </div>
      </div>

    <div class="columns is-centered">
      <b-field label="ระดับการออกกำลังกายของคุณ">
            <b-select v-model="activity" placeholder="Select a character" required>
                <option value="1">น้อย หรือไม่ค่อยออกกำลังกาย</option>
                <option value="2">ปานกลาง ออกกำลังกาย 1-3 ครั้งต่อสัปดาห์</option>
                <option value="3">ค่อนข้างหนัก ออกกำลังกาย 4-5 ครั้งต่อสัปดาห์</option>
                <option value="4">หนัก ออกกำลังกาย 6-7 ครั้งต่อสัปดาห์</option>
                <option value="5">หนักมาก ออกกำลังกายวันละ 2 ครั้งขึ้นไป</option>
            </b-select>
        </b-field>
    </div>

        <div class="columns is-centered">
          <div class="column">
            <button class="button is-success " @click="addProfile(name, sex, age, weight, height, activity)">ตกลง</button>
          </div>
        </div>
      </div>
    </b-modal>

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
      isModalActive: false,
      foods: [],
      keyword: '',
      Cart: [],
      tmp: '',
      name: '',
      sex: '',
      age: '',
      weight: '',
      height: '',
      activity: ''
    }
  },
  mounted () {
    this.getAllMembers()
  },
  methods: {
    ...mapActions([
      'storeCart',
      'saveprofile'
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
    },
    showAddProfile () {
      this.isModalActive = true
    },
    addProfile (name, sex, age, weight, height, activity) {
      this.saveprofile({name, sex, age, weight, height, activity})
      this.isModalActive = false
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

.logo {
  height: 80px;
}
.hero.head {

  background-image: url('../assets/24840.jpg');
  background-size: cover;

}
</style>
