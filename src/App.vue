  
<template>
  <router-view />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
}

.el-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.el-aside {
  padding: 20px 0;
}

.markdown-body {
  p {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

<script setup>
import { useStore } from "vuex";
import axios from 'axios'
const { state, commit } = useStore()

axios({
  url: '/md/tree.json'
}).then(res => {
  const { data } = res
  console.log(data)
  commit('setMd', { md: data })
})
</script>