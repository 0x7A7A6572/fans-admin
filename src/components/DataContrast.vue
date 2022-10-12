<template>
  <div class="data-contrast">
    <span class="distribution-title"
      >{{ title }}
      <!-- <el-icon><InfoFilled /></el-icon> -->
      </span>
    <p>
      <span
        class="detalis__strong"
        :style="{
          color: color,
        }"
        >{{ value }}</span
      >
      <span>较上周</span>
      <span v-if="percentage > 0">
        <el-icon color="var(--error)"><CaretTop /></el-icon>
        <span >{{ percentage }}%</span>
      </span>
      <span v-else>
        <el-icon color="var(--success)"><CaretBottom /></el-icon>
        <span >{{ percentage }}%</span>
      </span>
    </p>
  </div>
</template>

<script setup>
// import { ref } from "vue";
const props = defineProps({
  title: String,
  value: String,
  percentage: Number,
  color: String,
});

// function getPercentage(){

// }
</script>

<style scoped>
.detalis__strong{
  font-weight: bold;
  /* font-size: larger; */
}
/* .up-pertage {
  color: var(--error);
}
.down-pertage {
  color: var(--success);
} */
.data-contrast{
  padding: 5px;
}
</style>