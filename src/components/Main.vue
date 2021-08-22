<template>
  <el-container class="main">
    <el-header class="header" v-if="header">
      <Head />
    </el-header>
    <el-container class="wrap">
      <el-aside v-if="aside">
        <slot name="side"></slot>
      </el-aside>
      <el-container class="body">
        <el-main>
          <slot></slot>
        </el-main>
        <el-footer class="footer" v-if="footer">
          <Foot />
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .header {
    border-bottom: 1px solid #dcdfe6;
    height: 40px;
  }

  .wrap {
    height: calc(100vh - 40px);
    overflow: hidden;
    .body {
      .footer {
        display: flex;
        align-items: center;
        height: 40px;
      }
    }
  }
}
</style>

<script setup>
import Head from './Head.vue'
import Foot from './Foot.vue'

defineProps({
  header: {
    type: Boolean,
    default: true
  },
  footer: {
    type: Boolean,
    default: true
  },
  aside: {
    type: Boolean,
    default: true
  }
})
</script>