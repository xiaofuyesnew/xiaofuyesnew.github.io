<template>
  <div class="w-full h-full flex flex-col justify-center items-center pt-24">
    <img
      class="w-3/4"
      :src="codes[route.params.code].img"
      alt="404"
    >
    <router-link
      class="mt-24"
      to="/"
    >
      返回首页
    </router-link>
  </div>
</template>

<script setup>
import notAuth from '@/assets/images/401.svg'
import notFound from '@/assets/images/404.svg'
import InternalError from '@/assets/images/500.svg'

import { useRoute } from 'vue-router'

const route = useRoute()

const codes = {
  '401': {
    title: '未授权',
    img: notAuth
  },
  '404': {
    title: '未找到',
    img: notFound
  },
  '500': {
    title: '内部错误',
    img: InternalError
  }
}

document.title = codes[route.params.code].title

</script>
