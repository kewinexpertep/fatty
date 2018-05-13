<template>
  <div class="hello">
    <div v-for="food in foods" :key="food.memid">
      {{food.foodname}}
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
      tmp: 7
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
