import { StrictMode } from 'react'
import { render } from 'react-dom'
import cloudbase from '@cloudbase/js-sdk'
import '@/tailwind.css'

import App from '@/App'

const tcb = cloudbase.init({
  env: 'openchet-6n8um',
})

const auth = tcb.auth({ persistence: 'session' })

const login = async () => {
  await auth.anonymousAuthProvider().signIn()
  const loginState = await auth.hasLoginState()
  // console.log(loginState)
}

login()

// setTimeout(() => {
//   tcb
//     .callFunction({
//       name: 'get_code',
//       data: {
//         key: `${new Date().getTime()}${Math.random().toFixed(4).split('.')[1]}`,
//       },
//     })
//     .then((res) => {
//       console.log(res)
//     })
// }, 1500)

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('app')
)
