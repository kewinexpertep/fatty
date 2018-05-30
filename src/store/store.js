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
      var bmiSum = weight / ((height / 100) * (height / 100))
      var bmr
      var bmrSum
      bmiSum = parseFloat(bmiSum).toFixed(2)
      if (sex === 'female') {
        bmr = 665 + (9.6 * weight) + (1.8 * height) - (4.7 * age)
      } else {
        bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age)
      }
      bmrSum = parseFloat(bmr).toFixed(2)
      var tdee
      var tdeeSum
      if (activity === '1') {
        tdee = (1.2 * bmr)
        tdeeSum = parseFloat(tdee).toFixed(2)
      } else if (activity === '2') {
        tdee = (1.375 * bmr)
        tdeeSum = parseFloat(tdee).toFixed(2)
      } else if (activity === '3') {
        tdee = (1.55 * bmr)
        tdeeSum = parseFloat(tdee).toFixed(2)
      } else if (activity === '4') {
        tdee = (1.7 * bmr)
        tdeeSum = parseFloat(tdee).toFixed(2)
      } else {
        tdee = (1.9 * bmr)
        tdeeSum = parseFloat(tdee).toFixed(2)
      }
      commit('setprofile', {name, sex, age, weight, height, activity})
      shipsetRef.push({name, sex, age, weight, height, activity, bmiSum, bmrSum, tdeeSum})
    }
  }
})
