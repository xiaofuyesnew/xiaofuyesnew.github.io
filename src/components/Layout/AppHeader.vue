<template>
  <el-header
    height="40px"
    class="header bg-[rgba(255,255,255,.5)] dark:bg-[rgba(0,0,0,.5)] w-full flex items-center justify-between"
  >
    <el-link
      :underline="false"
      href="/"
    >
      <div class="logo-box flex justify-center items-center">
        <auto-icon
          class="logo text-[24px]"
          name="logo"
        />
      </div>
    </el-link>
    <div class="flex">
      <el-link
        class="ml-4"
        :underline="false"
        title="切换暗黑/明亮模式"
        @click="global.toggleTheme()"
      >
        <auto-icon
          class="text-xl"
          :style="{ color: global.theme === 'dark' ? '#3af' : '#f83' }"
          :name="global.theme === 'dark' ? 'ep:moon' : 'ep:sunny'"
        />
      </el-link>
    </div>
  </el-header>
</template>

<script setup>
import { useGlobal } from '@/store'

const global = useGlobal()
</script>

<style lang="scss" scoped>
// .color {
//   color: #37afff;
// }

.header {
  backdrop-filter: blur(5px);
}

.logo-box {
  animation: rotate 5s linear infinite;

  .logo {
    animation: rotate-logo 5s linear infinite;
  }

}

@keyframes rotate {
  to {
    transform: rotateX(360deg);
  }
}

@keyframes rotate-logo {
  to {
    transform: rotate(360deg);
  }
}
</style>
