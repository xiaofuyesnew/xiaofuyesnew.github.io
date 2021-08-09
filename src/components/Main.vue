<template>
  <el-container>
    <el-header class="header" v-if="header">
      <Head />
    </el-header>
    <el-container>
      <el-aside v-if="aside">
        <slot name="side"></slot>
      </el-aside>
      <el-container>
        <el-main class="main">
          <slot></slot>
        </el-main>
        <el-footer v-if="footer">
          <Foot />
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #dcdfe6;
}

.main {
  padding-bottom: 20px;
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