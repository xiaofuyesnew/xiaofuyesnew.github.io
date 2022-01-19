<template>
  <router-view></router-view>
  <my-mask>
    <login />
  </my-mask>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { login, getCode } from './utils/auth'

import MyMask from '@/components/Mask.vue'
import Login from '@/components/Login.vue'

onBeforeMount(() => {
  login()
  getCode()
})

</script>