# fatty
##Api

>fatty-db.herokuapp.com/

see all

>fatty-db.herokuapp.com?crud=search&key=ข้าวสวย

search

>fatty-db.herokuapp.com?crud=searches&key[]=ขนมจีน&key[]=สด

search multi key
 
##how to use
>    getAllMembers: function () {
>      let self = this
>      axios.get('//fatty-db.herokuapp.com/index.php').then(function (response) {
>        console.log(response.data.foods)
>        self.foods = response.data.foods
>      })
>    }



For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
