import cloudbase from "@cloudbase/js-sdk"

const miniApp = cloudbase.init({
  env: "openchat-test-nn1v9",
})

// const app = cloudbase.init({
//   env: 'dev-zj-5f8f5',
// })

const miniAuth = miniApp.auth()

export default {
  miniApp,
  app
}