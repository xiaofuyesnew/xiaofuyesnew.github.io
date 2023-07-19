<template>
  <router-view v-slot="{Component, route}">
    <transition
      name="fade"
      mode="out-in"
    >
      <el-main
        :key="route.name"
        class="w-full h-full flex-1 overflow-y-visible p-0"
      >
        <el-scrollbar
          view-style="max-width: 800px;width:100%;margin:auto;padding:0 20px"
          max-height="100%"
        >
          <component
            :is="Component"
            :key="route.fullPath"
          />
        </el-scrollbar>
      </el-main>
    </transition>
  </router-view>
</template>
