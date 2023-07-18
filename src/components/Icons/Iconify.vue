<template>
  <iconify-vue :icon="name" />
</template>

<script setup>
import { Icon as IconifyVue } from '@iconify/vue'

defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>
