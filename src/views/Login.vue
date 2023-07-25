<template>
  <div class="w-screen h-screen overflow-hidden flex items-center justify-center">
    <el-button
      size="large"
      @click="openWindow"
    >
      <auto-icon
        class="text-2xl mr-4"
        name="github"
      />
      <span>Sign in with Github</span>
    </el-button>
  </div>
</template>

<script setup>
import axios from 'axios'
import { useRoute } from 'vue-router'

const route = useRoute()

// console.log(route.query.code)

if (route.query.code) {
  window.opener.postMessage()
}

const openWindow = () => {
  const win = window.open('https://github.com/login/oauth/authorize?client_id=0df34860cea544c0259a&redirect_uri=https://localhost:5173/#/login', 'Sign in with Github', 'height=600,width=800,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no')

  win.addEventListener('message', (e) => {
    const code = e.target.location.href.split('?')[1].split('=')[1].split('#')[0]
    win.close()
    axios({
      method: 'post',
      url: '/api/user/info',
      data: {
        code
      }
    }).then(res => {
      console.log(res)
    })
  })
}
</script>
