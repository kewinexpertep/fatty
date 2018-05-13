# fatty
## Api

**see all**

>fatty-db.herokuapp.com/



>fatty-db.herokuapp.com?crud=search&key=ข้าวสวย

**search**

>fatty-db.herokuapp.com?crud=searches&key[]=ขนมจีน&key[]=สด

**search multi key**
 
## how to use

>    getAllMembers: function () { *same paragraph*
      let self = this *same paragraph*
      axios.get('//fatty-db.herokuapp.com/index.php').then(function (response) { *same paragraph*
        console.log(response.data.foods) *same paragraph*
        self.foods = response.data.foods *same paragraph*
      }) *same paragraph*
    } *same paragraph*



For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
