<template>
  <router-view></router-view>
  <my-mask v-if="auth.loginState">
    <login />
  </my-mask>
</template>

<script setup>
import { onBeforeMount, computed } from 'vue'
import { useStore } from 'vuex'
import { login } from './utils/auth'

import MyMask from '@/components/Mask.vue'
import Login from '@/components/Login.vue'

const store = useStore()

const auth = computed(() => store.state.auth)

onBeforeMount(async () => {
  await login()
  // getCode()
})

</script>