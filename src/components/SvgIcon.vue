<template>
  <svg aria-hidden="true">
    <use
      :href="symbolId"
      :fill="color"
    />
  </svg>
</template>

<script setup>
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    required: true
  }
})

const symbolId = `#${props.prefix}-${props.name}`
</script>
