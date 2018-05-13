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
            <input type="text" class="input" placeholder="อาหารที่ต้องการค้นหา">
          </div>
        </div>
      </div>
    </section>
    <div class="column" v-for="food in foods" :key="food.memid">
      <div class="card">
        <header class="card-header">
          <div class="column is-3">
            <figure class="media-left">
              <p class="image">
                <img src="https://bulma.io/images/placeholders/128x128.png">
              </p>
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
              <button class="button is-danger ">See more</button>
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
        <footer class="card-footer">
          <div class="card-footer-item">
            <div class="card-footer-item">
              <div class="media-content">
                <div class="field">
                  <span class="control">
                    <p class="bd-notification is-primary">น้ำ1</p>
                    <p class="bd-notification is-primary">น้ำ1</p>
                    <p class="bd-notification is-primary">น้ำ1</p>
                    <p class="bd-notification is-primary">น้ำ1</p>
                    <p class="bd-notification is-primary">น้ำ1</p>
                  </span>
                </div>
              </div>
            </div>
            <div class="card-footer-item">
              <div class="media-content">
                <div class="field">
                  <span class="control">
                    <p class="bd-notification is-primary">น้ำ1</p>
                    <p class="bd-notification is-primary">น้ำ1</p>
                    <p class="bd-notification is-primary">น้ำ1</p>
                  </span>
                </div>
              </div>
            </div>
            <div class="card-footer-item">
              <div class="media-content">
                <div class="field">
                  <span class="control">
                    <p class="bd-notification is-primary">น้ำ1</p>
                    <p class="bd-notification is-primary">น้ำ1</p>
                    <p class="bd-notification is-primary">น้ำ1</p>
                    <p class="bd-notification is-primary">น้ำ1</p>
                    <p class="bd-notification is-primary">น้ำ1</p>
                  </span>
                </div>
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
      foods: []
    }
  },
  mounted () {
    this.getAllMembers()
  },
  methods: {
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
</style>
