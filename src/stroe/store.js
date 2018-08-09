import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    user
  }
})

store.registerModule('vux', {
  state: {
    isLoading: false,
    direction: 'forward',
    showFooter: true,
    include: [],
    currentPage: '',
    scrollTop: ''
  },
  mutations: {
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading
    },
    updateDirection(state, payload) {
      state.direction = payload.direction
    },
    updateShowFooter(state, payload) {
      state.showFooter = payload.showFooter
    },
    addInclude(state, payload) {
      if (!state.include.find(v => v == payload.name))
        state.include.push(payload.name)
    },
    removeInclude(state, payload) {
      var index = state.include.findIndex(v => v == payload.name)
      if (index) state.include.splice(index, 1)
    },
    updateCurrentPage(state, page) {
      state.currentPage = page
    },
    setScrollTop(state, scrollTop) {
      state.scrollTop = scrollTop
    }
  }
})

store.registerModule('app', {
  state: {
    loading: false,
    message: [],
    openMessage: {}
  },
  mutations: {
    updateLoading(state, loading) {
      state.loading = loading
    },
    pushMessage(state, message) {
      state.message.push(message)
    },
    removeMessage(state, message) {},
    updateOpenMessage(state, message) {
      state.openMessage = message
    }
  }
})

export default store
