<template>
  <main class="f-full h-full overflow-hidden relative">
    <layout-header />
    <layout-content>
      <slot></slot>
    </layout-content>
    <layout-footer />
  </main>
</template>

<script setup>
import LayoutHeader from './Layout/Header.vue'
import LayoutContent from './Layout/Content.vue'
import LayoutFooter from './Layout/Footer.vue'
</script>