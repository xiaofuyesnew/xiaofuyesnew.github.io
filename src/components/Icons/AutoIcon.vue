<template>
  <svg-icon
    v-if="isSvgIcon"
    :name="name"
  />
  <iconify
    v-else
    :name="name"
  />
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  }
})
const isSvgIcon = computed(() => !props.name.includes(':'))
</script>
