<template>
  <header class="w-full px-10 py-2 flex items-center justify-between relative z-10">
    <img class="h-8" src="/images/logo.svg" alt="logo" />
    <div class="flex items-center flex-row-reverse">
      <a class="w-5 h-5 hover:underline ml-5" href="https://github.com/xiaofuyesnew/xiaofuyesnew.github.io">
        <github class="w-full fill-slate-500 hover:fill-slate-700 dark:hover:fill-slate-300" />
      </a>
      <a class="w-5 h-5 hover:underline ml-5" href="https://twitter.com/xiaofuyesnew">
        <twitter class="w-full fill-slate-500 hover:fill-slate-700 dark:hover:fill-slate-300" />
      </a>
      <button
        @click="commit('toggle_mode')"
        :title="global.mode === 'dark'
        ? '上帝说要有光'
        : '黑夜给了我黑色的眼睛'"
      >
        <MoonIcon
          class="w-5 h-5 stroke-sky-500 fill-sky-500/20 hover:stroke-sky-300"
          v-if="global.mode === 'dark'"
        />
        <SunIcon
          class="w-5 h-5 stroke-orange-500 fill-orange-500/20 hover:stroke-orange-700"
          v-if="global.mode === 'light'"
        />
      </button>
    </div>
  </header>
</template>

<script setup>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { MoonIcon, SunIcon } from '@heroicons/vue/outline'
import Github from '@/components/Icons/Github.vue'
import Twitter from '@/components/Icons/Twitter.vue'
import Avatar from '@/components/Icons/Avatar.vue'

const { state, commit } = useStore()

const { global } = state

const data = reactive({

})



</script>