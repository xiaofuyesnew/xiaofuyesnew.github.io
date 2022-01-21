import Store from '@/store'
import cloud from '@cloudbase/js-sdk'

const { commit } = Store

const app = cloud.init({
  env: 'openchet-6n8um',
})

const auth = app.auth({
  persistence: 'session',
})

const loginState = auth.hasLoginState()

export const login = () => {
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
    const codeData = JSON.parse(codeInfo)
    app.getTempFileURL({ fileList: [codeData.codeID] }).then(res => {
      // console.log(res)
      if (res.fileList[0].code === 'SUCCESS') {
        commit('update_code', JSON.parse(codeInfo))
      } else {
        localStorage.removeItem('code_info')
      }
    })
  }
}

export default {
  login,
  getCode
}
