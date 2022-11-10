<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ title }}
      <el-icon class="el-icon--right">
        <el-icon><CaretBottom /></el-icon>
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="(item, index) in opstion" :key="index">
          {{ item }}</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
const props = defineProps({
  title: String,
  opstion: {
    type: Array,
    default: [],
  },
});
</script>

<style>
</style>