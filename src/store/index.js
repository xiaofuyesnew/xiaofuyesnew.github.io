import { createStore } from "vuex"
import global from "./modules/global"
import admin from './modules/admin'
import auth from './modules/auth'

export default createStore({
  modules: {
    auth,
    global,
    admin
  }
})