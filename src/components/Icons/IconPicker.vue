<template>
  <el-input
    v-model="selectedIcon"
    :disabled="true"
    placeholder="请选择图标"
  >
    <template
      v-if="selectedIcon"
      #prepend
    >
      <auto-icon
        class="text-2xl"
        :name="selectedIcon"
      />
    </template>
    <template #append>
      <el-popover
        placement="right"
        :width="400"
        trigger="click"
      >
        <template #reference>
          <div class="w-full h-full cursor-pointer flex justify-center items-center">
            <iconify name="ep:grid" />
          </div>
        </template>
        <el-tabs
          v-model="activeName"
          type="card"
        >
          <el-tab-pane
            label="Svg Icons"
            name="Svg Icons"
          >
            <el-scrollbar
              max-height="400px"
            >
              <div class="w-full flex flex-wrap ">
                <div
                  v-for="icon in svgIconsList"
                  :key="icon"
                  class="w-[30px] h-[30px] flex items-center justify-center border border-slate-900 border-solid dark:border-white cursor-pointer mr-2 mb-2"
                  @click="select(icon)"
                >
                  <svg-icon
                    class="text-xl"
                    :name="icon"
                  />
                </div>
              </div>
            </el-scrollbar>
          </el-tab-pane>
          <el-tab-pane
            v-for="collection in collections"
            :key="collection.prefix"
            :label="collection.info.name"
            :name="collection.info.name"
          >
            <el-scrollbar
              max-height="400px"
            >
              <div class="w-full flex flex-wrap ">
                <div
                  v-for="(icon, key) in collection.icons"
                  :key="key"
                  class="w-[30px] h-[30px] flex items-center justify-center border border-slate-900 border-solid dark:border-white cursor-pointer mb-2 mr-2"
                  @click="select(`${collection.prefix}:${key}`)"
                >
                  <iconify
                    class="text-xl"
                    :name="`${collection.prefix}:${key}`"
                  />
                </div>
              </div>
            </el-scrollbar>
          </el-tab-pane>
        </el-tabs>
      </el-popover>
    </template>
  </el-input>
</template>

<script setup>
import { collections } from '@/utils'

const svgIconsList = SVG_ICONS_LIST

const selectedIcon = ref('')

const activeName = ref('Svg Icons')

const emit = defineEmits(['select'])

const select = (icon) => {
  selectedIcon.value = icon
  emit('select', icon)
}

</script>

<style scoped lang="scss">
:deep(.el-input-group__append) {
  padding: 0;
  min-width: 50px;
}
</style>
