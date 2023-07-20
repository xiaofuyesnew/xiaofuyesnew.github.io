<template>
  <article-block />
</template>

<script setup>
import ArticleBlock from '@/components/Article/Block.vue'
import axios from 'axios'

axios.get('/api').then(res => {
  console.log(res)
})
</script>
