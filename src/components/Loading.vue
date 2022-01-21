<template>
  <div
    class="w-full h-full absolute top-0 left-0 z-10 bg-black/80 flex items-center justify-center"
    v-if="loading"
  >
    <div class="w-10 h-10 relative">
      <div
        class="animate-loading w-full h-full rounded-full border-2 border-solid border-indigo-500 absolute top-0 left-0 right-0 bottom-0 m-auto scale-0 opacity-0"
      ></div>
      <div
        class="animate-loading-gap w-full h-full rounded-full border-2 border-solid border-fuchsia-500 absolute top-0 left-0 right-0 bottom-0 m-auto scale-0 opacity-0"
      ></div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  loading: {
    type: Boolean,
    default: false
  }
})

</script>