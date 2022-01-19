<template>
  <div class="w-screen h-screen absolute bg-black/60 top-0 left-0 z-50" v-if="state.global.mask">
    <slot></slot>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
const { state } = useStore()
</script>