<script setup>
import { useDark, useToggle } from '@vueuse/core'
import Profile from '@/components/Profile.vue'

const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
})
const toggleDark = useToggle(isDark)
</script>

<template>
  <div>home</div>
  <button class="w-[100px] h-[40px] bg-sky-500 rounded-md" @click="toggleDark()">
    {{ isDark ? 'dark' : 'light' }}
  </button>
  <Profile />
</template>
