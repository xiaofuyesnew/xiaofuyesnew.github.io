import Store from '@/store'
import cloud from '@cloudbase/js-sdk'

const { state, commit } = Store

export const login = () => {
  const app = cloud.init({
    env: 'openchet-6n8um',
  })

  const auth = app.auth({
    persistence: 'session',
  })

  // console.log(auth.hasLoginState())

  const loginState = auth.hasLoginState()

  if (loginState) {
    commit('update_cloud', {
      app,
      auth,
      loginState,
    })
  } else {
    auth
      .anonymousAuthProvider()
      .signIn()
      .then((loginState) => {
        commit('update_cloud', {
          app,
          auth,
          loginState,
        })
      })
  }
}

export const getCode = () => {
  const codeInfo = localStorage.getItem('code_info')
  if (codeInfo) {
    commit('update_code', JSON.parse(codeInfo))
  }
}

export default {
  login,
  getCode
}
