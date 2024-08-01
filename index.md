---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Allen's Code Corner"
  text: "Coding the Magic\nSharing the Fun"
  # tagline: My great project tagline
  actions:
    - theme: brand
      text: 教程
      link: /tutorial
    - theme: alt
      text: 博客
      link: /blog
  image:
    src: /images/avatar.png
    alt: avatar

features:
  - icon: 💻
    title: Frontend
    details: Better Vue than React, bundler with vite.
  - icon: 🧑‍💻
    title: Backend
    details: Koa MVC, Prisma ORM, MySQL & MongoDB.
  - icon: 🎮
    title: Game Dev
    details: Phaser.js of course, but also Cocos Creator.
---
<!--
<script setup>
  import Home from './components/Home.vue'
</script>

<Home /> -->
<style lang="scss" scope>
  .VPImage {
    border-radius: 50%;
  }
</style>
