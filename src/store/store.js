import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import { firebaseMutations } from 'vuexfire'
import router from '../router/index'

let config = {
  apiKey: 'AIzaSyAX4sgFCzQIYLomdE2nsY4XcKpnPOrNIOU',
  authDomain: 'fatty-eec26.firebaseapp.com',
  databaseURL: 'https://fatty-eec26.firebaseio.com',
  projectId: 'fatty-eec26',
  storageBucket: 'fatty-eec26.appspot.com',
  messagingSenderId: '1032630764234'
}
var firebaseApp = firebase.initializeApp(config)
let provider = new firebase.auth.FacebookAuthProvider()
provider.addScope('public_profile')
provider.setCustomParameters({
  'display': 'popup'
})
var db = firebaseApp.database()
var shipsetRef = db.ref('boards')

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    cart: [],
    amount: [],
    profile: {
      name: '',
      sex: '',
      age: '',
      weight: '',
      height: '',
      activity: ''
    }
  },
  getters: {
    cart: state => state.cart,
    amount: state => state.amount,
    profile: state => state.profile
  },
  mutations: {
    setCart (state, obj) {
      state.cart = obj.cart
      state.amount = obj.amount
    },
    setprofile (state, {name, sex, age, weight, height, activity}) {
      state.profile = {name, sex, age, weight, height, activity}
    },
    ...firebaseMutations
  },
  actions: {
    test (context, objs) {
      shipsetRef.set(null)
      router.push('/')
    },
    storeCart (context, objs) {
      context.commit('setCart', objs)
    },
    saveprofile ({commit}, {name, sex, age, weight, height, activity}) {
      commit('setprofile', {name, sex, age, weight, height, activity})
      shipsetRef.push({name, sex, age, weight, height, activity})
    }
  }
})
