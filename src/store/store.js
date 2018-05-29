import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import { firebaseMutations } from 'vuexfire'
import router from '../router/index'

let config = {
  apiKey: 'AIzaSyBc4GvjjmZMezOuv2fc8FOUiPcyttLPmuw',
  authDomain: 'battleship-d7f88.firebaseapp.com',
  databaseURL: 'https://battleship-d7f88.firebaseio.com',
  projectId: 'battleship-d7f88',
  storageBucket: '',
  messagingSenderId: '211714676183'
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
    cart: []
  },
  getters: {
    cart: state => state.cart
  },
  mutations: {
    setCart (state, obj) {
      state.cart = obj
    },
    ...firebaseMutations
  },
  actions: {
    test (context, objs) {
      shipsetRef.set(null)
      router.push('/')
    },
    storeCart (context, objs) {
      console.log(objs)
      context.commit('setCart', objs)
    }
  }
})
