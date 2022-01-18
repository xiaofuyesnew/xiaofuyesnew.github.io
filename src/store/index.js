import { createStore } from "vuex"
import global from "./modules/global"
import admin from './modules/admin'

export default createStore({
  modules: {
    global,
    admin
  }
})