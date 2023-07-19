<template>
  <el-container class="w-full h-full flex flex-col items-center">
    <app-header />
    <app-main />
    <el-footer
      class="flex items-center"
      height="40px"
    >
      <div class="text-sm mr-2">
        copyright © {{ dayjs().format('YYYY') === '2023' ? '2023' : `2023-${dayjs().format('YYYY')}` }}
      </div>
      <el-link
        :underline="false"
        href="https://github.com/xiaofuyesnew"
        target="_blank"
      >
        🧙‍ Allen Wong
      </el-link>&lt;<el-link href="mailto:xiaofuyesnew@gmail.com">
        xiaofuyesnew@gmail.com
      </el-link>&gt;
    </el-footer>
  </el-container>
</template>

<script setup>
import AppMain from './AppMain.vue'
import AppHeader from './AppHeader.vue'
import dayjs from 'dayjs'
</script>
