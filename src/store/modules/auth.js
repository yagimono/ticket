const state = {
  auth: {
    token: null, // `token`はnullで初期化
    userId: null // `userId`はnullで初期化
  }
}

// mutation types
const AUTH_LOGIN = 'AUTH_LOGIN'
const AUTH_LOGOUT = 'AUTH_LOGOUT'

const mutations = {
  [AUTH_LOGIN] (state, payload) {
    throw new Error('AUTH_LOGIN mutation should be implemented')
  },
  [AUTH_LOGOUT] (state, payload) {
    throw new Error('AUTH_LOGOUT mutation should be implemented')
  }  
}

const actions = {
  login: ({ commit }) => {
    throw new Error('login action should be implemented')
  },
  logout: ({ commit }) => {
    throw new Error('logout action should be implemented')
  }
}

const getters = {
  currentCount: state => {
    return state.count
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
}
