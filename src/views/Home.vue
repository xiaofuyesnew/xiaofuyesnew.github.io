<template>
  <article-block />
</template>

<script setup>
import ArticleBlock from '@/components/Article/Block.vue'
import axios from 'axios'
import { useGlobal } from '@/store'

const global = useGlobal()

global.showLoading()

axios.get('/api').then(res => {
  console.log(res)
})

setTimeout(() => {
  global.hideLoading()
}, 2000)

</script>
