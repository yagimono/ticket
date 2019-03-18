const state = {
  count: 0
}

// mutation types
const CHANGE_COUNT = 'change_count'

const mutations = {
  [CHANGE_COUNT] (state) {
    state.count = state.count + 1
  }
}

const actions = {
  plusCount: ({ commit }) => {
    commit(CHANGE_COUNT)
  }
}

const getters = {
  currentCount: state => {
    return state.count
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
