<template>
  <div class="databf-con">
    <p class="distribution-title">{{ title }} </p>
    <div class="dbf-content">
      <div class="dbf-content-item" v-for="(item, index) in conData" :key="index">
        {{ item.name }} {{ item.perc }}
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
});
</script>

<style scoped>
.dbf-content {
  display: flex;
  justify-content: space-around;
  width: 100%;
  /* padding: 10px; */
  align-items: center;
  /* flex-wrap: wrap; */
  color: var(--thirdText);
}
.dbf-content .dbf-content-item{
  background-color: var(--strongText);
  color: var(--cardItem);
  font-size: small;
  padding: 5px;
  margin: 5px;
  white-space: nowrap;
  font-weight: bold;
}
</style>