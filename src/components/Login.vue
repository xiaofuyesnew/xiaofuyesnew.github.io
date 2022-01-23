<template>
  <div class="w-full h-full flex items-center justify-center relative">
    <div class="w-80 h-96 bg-white flex flex-col">
      <div
        class="w-full h-10 border border-solid border-gray-100 flex items-center justify-between"
      >
        <div
          class="w-6/12 h-full text-gray-500 flex items-center justify-center cursor-pointer select-none"
          :class="{ 'text-indigo-500': data.current === 0 }"
          @click="switchTab(0)"
        >账号密码登录</div>
        <div
          class="w-6/12 h-full text-gray-500 flex items-center justify-center border-l border-solid border-gray-100 cursor-pointer select-none"
          :class="{ 'text-indigo-500': data.current === 1 }"
          @click="switchTab(1)"
        >扫小程序码登录</div>
      </div>
      <div class="w-full h-86 flex-1">
        <div class="w-full h-full" v-if="data.current === 0"></div>
        <div
          class="w-full h-full flex flex-col items-center justify-center"
          v-if="data.current === 1"
        >
          <div class="relative w-60 h-60">
            <img
              class="w-full h-full"
              :src="state.auth.code"
              alt="wxcode"
              @load="codeLoaded"
              v-if="state.auth.code"
            />
            <loading :loading="data.loading" />
          </div>
          <div class="text-indigo-500 text-sm mt-4">微信扫描小程序码快速登录</div>
        </div>
      </div>
    </div>
    <div
      class="w-6 h-6 absolute bg-white/50 hover:bg-white/70 top-[calc(50%+14rem)] left-[50%] translate-x-[-50%] rounded-full cursor-pointer before:w-px before:h-4 before:bg-white before:absolute before:translate-x-[-50%] before:translate-y-[-50%] before:top-[50%] before:left-[50%] before:rotate-45 after:w-px after:h-4 after:bg-white after:absolute after:translate-x-[-50%] after:translate-y-[-50%] after:top-[50%] after:left-[50%] after:-rotate-45"
      @click="commit('toggle_mask')"
    ></div>
  </div>
  <!-- <button class="h-[60px] bg-white flex items-center justify-center px-2" @click="updateCode">获取小程序码</button>
  <img :src="state.auth.code" v-if="state.auth.code" crossorigin="anonymous" />
  <button
    class="h-[60px] bg-white flex items-center justify-center px-2"
    v-if="state.auth.code"
    @click="checkKey"
  >检测Key</button>
  <loading />-->
</template>

<script setup>
import { reactive, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

import Loading from '@/components/Loading.vue'

const { state, commit } = useStore()

const data = reactive({
  current: 0,
  loading: true,
  listen: false,
  stamp: 0
})

const switchTab = (index) => {
  data.current = index

  if (index === 1) {
    data.listen = true
    updateCode()
    checkKey()
  } else {
    data.listen = false
    clearTimeout(data.stamp)
  }
}

const codeLoaded = () => {
  data.loading = false
}

const checkKey = () => {
  if (data.listen) {
    data.stamp = setTimeout(() => {
      if (data.current === 1 && !data.loading) {
        state.auth.app.callFunction({
          name: 'web_api',
          data: {
            type: 'check_key',
            key: state.auth.key
          }
        }).then(res => {
          console.log(res)
          const { key, state } = res.result
          if (state) {
            console.log('login success')
          } else {
            checkKey()
          }
        })
      } else {
        checkKey()
      }
    }, 2000)
  }
}

const updateCode = () => {
  if (!state.auth.code) {
    state.auth.app.callFunction({
      name: 'get_code'
    }).then(res => {
      // console.log(res)
      const { url: code, key, fileID: codeID } = res.result

      localStorage.setItem('code_info', JSON.stringify({
        code,
        key,
        codeID
      }))

      commit('update_code', {
        code,
        key,
        codeID
      })
    })
  }
}


</script>