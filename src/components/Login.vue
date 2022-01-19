<template>
  <button class="h-[60px] bg-white flex items-center justify-center px-2" @click="updateCode">获取小程序码</button>
  <img :src="state.auth.code" v-if="state.auth.code" crossorigin="anonymous" />
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
const { state, commit } = useStore()

const updateCode = () => {
  if (!state.auth.code) {
    const key = `${new Date().getTime()}${Math.random().toFixed(4).split('.')[1]}`
    state.auth.app.callFunction({
      name: 'get_code',
      data: {
        key
      }
    }).then(res => {
      // console.log(res)

      localStorage.setItem('code_info', JSON.stringify({
        code: res.result.url,
        key,
        codeID: res.result.fileID
      }))

      commit('update_code', {
        code: res.result.url,
        key,
        codeID: res.result.fileID
      })
    })
  }
}
</script>