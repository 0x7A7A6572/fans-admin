<template>
  <div class="data-contrast">
    <span class="distribution-title"
      >{{ title }}
      <!-- <el-icon><InfoFilled /></el-icon> -->
    </span>
    <div class="d-content">
      <div>
        <span>{{ conData[0].title }}</span
        ><span class="d-num detalis__strong">{{
          Tools.convertNum(conData[0].value)
        }}</span
        ><br />
        <span>{{ conData[1].title }}</span
        ><span class="d-num detalis__strong">{{
          Tools.convertNum(conData[1].value)
        }}</span
        ><br />
      </div>
      <div>
        <span v-if="percentage && percentage > 0">
          <el-icon color="var(--error)"><CaretTop /></el-icon>
          <span>{{ percentage }}%</span>
        </span>
        <span v-else-if="percentage && percentage <= 0">
          <el-icon color="var(--success)"><CaretBottom /></el-icon>
          <span>{{ percentage }}%</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
const Tools = proxy.$tools;
// console.log("tools",Tools,proxy)
const props = defineProps({
  title: String,
  conData: Array,
  percentage: Number,
});
</script>

<style scoped>
.d-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
  align-items: center;
  color: var(--thirdText);
}
.d-num {
  padding-left: 10px;
}

.d-num:nth-child(2) {
  font-size: 25px;
  color: var(--strongText);
  margin-bottom: 15px;
  display: inline-block;
}
.d-num:nth-child(5) {
  font-size: 20px;
  color: var(--strongText2);
}
</style>