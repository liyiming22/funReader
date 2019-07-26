import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: 'true',
  state: {
    showLoading: true,

    // mock data goes here
    bookShelf: localStorage.getItem("bookShelf") ? JSON.parse(localStorage.getItem("bookShelf")) : [],

    category: [],

    cateSet: {},

    showAnimation: false,
    
    currBook: {
      _id: '',
      title: '',
      author: '',
      cover: '',
      updated: '',
      lastChapter: '',
      activeID: '56a8a76b6e079b3a7d424dba'
    },

    chapterList: [],

    currChapter: 0,

    currContent: [],

    topBooks: [],

    normalOrder: true,

    skin: 'default',

    fontSize: 14,

    isNight: false
  },
  actions,
  mutations,
  getters
})
