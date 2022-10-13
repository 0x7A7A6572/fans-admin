<template>
  <div class="distr-dubble">
    <el-row
      v-for="(item, index) in thisProduct"
      class="distr-dubble-item"
      :key="index"
    >
      <el-col :span="2"> {{ getPercent(thisProduct[index], max) }}</el-col>
      <el-col :span="8" class="left-bar">
        <div :style="{
            width: getPercent(thisProduct[index], max),
          }">{{ thisProduct[index] }}</div>
      </el-col>
      <el-col :span="4" class="item-center">
        {{ grade[index] }}
      </el-col>
      <el-col :span="8" class="right-bar">
        <div
          :style="{
            width: getPercent(competitors[index], max),
          }"
        >
          {{ competitors[index] }}
        </div>
      </el-col>
      <el-col :span="2" class="item-percent"> {{ getPercent(competitors[index], max) }} </el-col>
      <!-- ---------------{{ index }}----------------- -->
    </el-row>
  </div>
</template>

<script setup>
const props = defineProps({
  //  listDate: Object,
  max: Number,
  min: Number,
  grade: Array,
  thisProduct: Array,
  competitors: Array,
});

// let expDate = {
//   max: 30, //数据范围
//   min: 0,
//   grade: ["<1", "1-10W", "10-100W", "100w-500w", "500-1000w", ">1000w"], //中间显示的等级文本
//   thisProduct: [0, 9, 15, 24, 4, 2], //本品的数据
//   competitors: [0, 9, 3, 10, 1, 0], //竞品的数据
// };

function getPercent(origin, max) {
  return ((origin / max) * 100).toFixed(0) + "%";
}
</script>

<style scoped>
.distr-dubble {
  padding: 10px;
  color: var(--secondText);
}
.distr-dubble-item {
  /* display: flex;
  flex-direction: row; */
  padding: 5px;
}
.right-bar,
.left-bar {
  background-color: var(--notImportantText);
  height: 1.5rem;
  width: 90%;
  border-radius: 10rem;
  margin: auto;
}
.right-bar div {
  background-color: var(--strongText2);
  height: 100%;
  border-radius: 15rem;
  color: white;
  text-align: left;
  font-size: small;
  line-height: 1.5rem;
  font-weight: bold;
  min-width: 10%;
  padding-left: 0.5rem;
}
.left-bar div {
  float: right;
  background-color: var(--strongText);
  height: 100%;
  width: 10%;
  min-width: 10%;
  border-radius: 15rem;
  color: black;
  text-align: right;
  font-size: small;
  line-height: 1.5rem;
  font-weight: bold;
  padding-right: 0.5rem;
}
.item-center {
  text-align: center;
  /* padding: 0px 5px; */
  white-space: nowrap;
}
.item-percent{
  padding-left: 15px;
}
</style>