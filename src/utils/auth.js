import Store from '@/store'
import cloud from '@cloudbase/js-sdk'

const {
  commit
} = Store

const app = cloud.init({
  env: 'openchet-6n8um',
})

const auth = app.auth({
  persistence: 'session',
})

const loginState = auth.hasLoginState()

export const login = () => {
  // console.log(loginState)
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

const generateCode = () => {
  return app.callFunction({
    name: 'get_code',
  })
}

export const getCode = () => {
  const codeInfo = localStorage.getItem('code_info')
  if (codeInfo) {
    const codeData = JSON.parse(codeInfo)
    console.log(codeData)
    app.getTempFileURL({
      fileList: [codeData.fileID]
    }).then(res => {
      console.log(res)
      if (res.fileList[0].code === 'SUCCESS') {
        commit('update_code', JSON.parse(codeInfo))
      } else {
        localStorage.removeItem('code_info')
        generateCode().then(res => {
          localStorage.setItem('code_info', JSON.stringify(res.result))
          commit('update_code', res.result)
        })
      }
    })
  } else {
    generateCode().then(res => {
      localStorage.setItem('code_info', JSON.stringify(res.result))
      commit('update_code', res.result)
    })
  }
}

export default {
  login,
  getCode
}