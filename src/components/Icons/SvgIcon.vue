<template>
  <svg class="svg">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="scss">
.svg {
  width: 1em;
  height: 1em;
  fill: currentColor;
}
</style>
