const auth = {
  state: () => {
    return {
      app: null,
      auth: null,
      loginState: null,
      code: '',
      key: '',
      codeID: ''
    }
  },
  mutations: {
    update_cloud: (state, payload) => {
      // console.log(payload)
      const { app, auth, loginState } = payload
      state.app = app
      state.auth = auth
      state.loginState = loginState
    },
    update_code: (state, payload) => {
      const {code, key, codeID} = payload
      state.code = code
      state.key = key
      state.codeID = codeID
    }
  },
}

export default auth
