<script setup>
defineProps({
  progress: {
    type: Number,
    default: 50,
  },
})
</script>

<template>
  <div w="full" h="20px" b="1px solid #333" dark:b="1px solid #ccc" flex="items-center" relative rounded="xl" overflow-hidden>
    <div :style="{ width: `${progress}%` }" h="full" bg="green-800" />
    <div w="full" flex="~ items-center justify-center" text="#000 xs" dark:text="#fff" absolute top="0" bottom="0" left="0" right="0" m="auto">
      {{ progress }}%
    </div>
  </div>
</template>
