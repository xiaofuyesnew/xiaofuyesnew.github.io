<template>
  <div class="w-full h-full flex items-center justify-center absolute top-0 left-0 bg-white dark:bg-black">
    <auto-icon
      class="logo"
      name="logo"
    />
  </div>
</template>

<style lang="scss" scoped>
.logo {
  animation: logo 3s alternate-reverse infinite;
}

@keyframes logo {
  to {
    transform: rotate(360deg) scale(10);
  }
}
</style>
