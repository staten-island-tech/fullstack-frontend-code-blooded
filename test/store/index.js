export const state = () => ({
  chatMessages: '',
})

export const mutations = {
  setMessage(state, chatMessage) {
    state.chatMessage += chatMessage
  },
}

export const actions = {
  formatMessage({ commit }, chatMessage) {
    const chatMessageEx = `${new Date().toLocaleString()}: ${chatMessage}\r\n`
    commit('setMessage', chatMessageEx)
  },
}
