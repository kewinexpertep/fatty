<template>
  <div class="foodspanal">
    <div class="column" v-for="food in foods" :key="food.Food_ID">
      <div class="card">
        <header class="card-header">
          <div class="column is-3">
            <figure class="media-left">
                <figure class="image is-64x64">
                  <img v-if="food.foodtype=='Main dish'" src="../assets/foods/f4.png">
                  <img v-else-if="food.foodtype=='Fruit'" src="../assets/foods/f6.png">
                  <img v-else-if="food.foodtype=='Fast food'" src="../assets/foods/f13.png">
                  <img v-else-if="food.foodtype=='Sweetmeat'" src="../assets/foods/f11.png">
                  <img v-else-if="food.foodtype=='Bakery'" src="../assets/foods/f16.png">
                  <img v-else-if="food.foodtype=='Protien'" src="../assets/foods/f14.png">
                  <img v-else-if="food.foodtype=='Sweeetmeat'" src="../assets/foods/f11.png">
                  <img v-else-if="food.foodtype=='Fat'" src="../assets/foods/f2.png">
                  <img v-else-if="food.foodtype=='Other'" src="../assets/foods/f15.png">
                  <img v-else-if="food.foodtype=='Spices and condiments'" src="../assets/foods/f3.png">
                  <img v-else-if="food.foodtype=='Milk'" src="../assets/foods/f7.png">
                  <img v-else-if="food.foodtype=='Egg'" src="../assets/foods/f10.png">
                  <img v-else-if="food.foodtype=='Fish sea food'" src="../assets/foods/f20.png">
                  <img v-else-if="food.foodtype=='Meat'" src="../assets/foods/f14.png">
                  <img v-else-if="food.foodtype=='Vegetables'" src="../assets/foods/f12.png">
                  <img v-else-if="food.foodtype=='Starchy roots tubes'" src="../assets/foods/f17.png">
                  <img v-else-if="food.foodtype=='Cereals'" src="../assets/foods/f12.png">
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
                <a class="is-info" @click="showSeemore(food)">See more</a>
              </div>
              <button class="button is-danger" @click="AddCart(food)">Eat</button>
              <button class="button is-danger" @click="ClearFood(food)">Clear</button>
            </div>
          </div>
          <div class="column is-3 is-offset-1">
            <div class="media-content">
              <div class="field">
                <span class="control">
                   <p class="title is-3">{{food.Energy}}</p>
                   <p class="title is-5">Kcal</p>
                   <p class="title is-6">{{showQty(food)}}</p>
                </span>
              </div>
            </div>
          </div>
        </header>
        <footer class="card-footer" v-if="food.Food_ID === tmp">
          <div class="card-footer-item">
            <div class="card-footer-item" v-if="food.Fat !== ''">
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
            <div class="card-footer-item" v-if="food.Iron !== ''">
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
            <div class="card-footer-item" v-if="food.Total_Vit_A !== ''">
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
            <div class="card-footer-item">
              <div class="media-content">
                <p class="bd-notification is-primary has-text-left detail"><strong class="name">เดินอย่างน้อย : {{Math.floor(food.Energy/2.78)}} นาที</strong></p>
                <p class="bd-notification is-primary has-text-left detail"><strong class="name">วิ่งอย่างน้อย : {{Math.floor(food.Energy/6.29)}} นาที</strong></p>
                <p class="bd-notification is-primary has-text-left detail"><strong class="name">ว่ายน้ำอย่างน้อย : {{Math.floor(food.Energy/8.94)}} นาที</strong></p>
                <p class="bd-notification is-primary has-text-left detail"><strong class="name">ปั่นจักรยานอย่างน้อย : {{Math.floor(food.Energy/4.72)}} นาที</strong></p>
              </div>
              <div class="media-content">
                <progress class="progress is-success" :value="Math.floor(food.Energy/2.78)" max="100"></progress>
                <progress class="progress is-warning" :value="Math.floor(food.Energy/6.29)" max="100"></progress>
                <progress class="progress is-info" :value="Math.floor(food.Energy/8.94)" max="100"></progress>
                <progress class="progress is-danger" :value="Math.floor(food.Energy/4.72)" max="100"></progress>

              </div>
              <div class="media-content">
                <p class="bd-notification is-primary has-text-right">นาที</p>
                <p class="bd-notification is-primary has-text-right">นาที</p>
                <p class="bd-notification is-primary has-text-right">นาที</p>
                <p class="bd-notification is-primary has-text-right">นาที</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'foodspanal',
  props: ['foods'],
  data () {
    return {
      Cart: [],
      tmp: ''
    }
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
    find (obj, arr) {
      var index = -1
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].Food_ID === obj.Food_ID) {
          index = i
          break
        }
      }
      return index
    },
    AddCart (food) {
      var index = this.find(food, this.Cart)
      if (index > -1) {
        ++this.amount[index].qty
      } else {
        this.Cart.push(food)
        var tmp = {
          Food_ID: food.Food_ID,
          qty: 1
        }
        this.amount.push(tmp)
      }
      var tmp1 = {
        cart: this.Cart,
        amount: this.amount
      }
      this.storeCart(tmp1)
    },
    ClearFood (food) {
      console.log(food.Food_ID)
      console.log(this.Cart)
      var index = this.find(food, this.Cart)
      if (index > -1) {
        this.Cart.splice(index, 1)
        this.amount.splice(index, 1)
      }
      var tmp1 = {
        cart: this.Cart,
        amount: this.amount
      }
      this.storeCart(tmp1)
    },
    showQty (food) {
      var index = this.find(food, this.amount)
      if (index > -1) {
        return 'X' + this.amount[index].qty
      }
      return 'X0'
    }
  },
  computed: {
    ...mapGetters([
      'amount'
    ])
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
.image {
  margin: 20px;
}
.detail {margin-bottom: 10px}
</style>
