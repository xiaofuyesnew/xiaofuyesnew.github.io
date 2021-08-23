<template>
  <el-row class="header" justify="space-between">
    <el-col :span="6" class="logo">开源说</el-col>
    <el-col :span="6"></el-col>
    <el-col class="links" :span="6">
      <el-link class="link" type="primary" href="/#/blog">博客</el-link>
      <el-link class="link" type="primary" href="/#/docs">文档</el-link>
    </el-col>
  </el-row>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {
  height: 100%;
  .logo {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
  }

  .links {
    display: flex;
    align-items: center;
    .link {
      margin-right: 20px;
    }
  }
}
</style>