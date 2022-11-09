<template>
  <el-row class="cardBox" :gutter="20">
    <el-col :span="16" >
      <div class="cardStyle ti-cardHeight">
        <div class="hotmap-title">
          <span>营销动态</span>
          <div>
            <el-checkbox checked>本品</el-checkbox>
            <el-checkbox checked>竞品</el-checkbox>
            <select placeholder="获赞" class="hotmap-select">
              <option value="huozhan">获赞</option>
            </select>
          </div>
        </div>
        <div id="hotmap"></div>
      </div>
    </el-col>
    <el-col :span="8" >
      <div class="cardStyle ti-cardHeight">
        <PopularList></PopularList>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
import PopularList from "../components/PopularList.vue";
import option from "./tfoption.js";

let myChart;
function init() {
  var chartDom = document.getElementById("hotmap");
  myChart = echarts.init(chartDom);

  option && myChart.setOption(option);
  if (timmerEchar) {
    clearTimeout(timmerEchar);
  }
   console.log("loadend",option);
}

let timmerEchar = null;
onMounted(() => {
  timmerEchar = setTimeout(init, 100);
  // 监听屏幕宽度变化：当浏览器发生resize事件的时候，触发echart的resize事件，重绘canvas
  window.addEventListener("resize", () => {
    changeWidth();
 
  });
});
function changeWidth() {
  myChart.resize();
}
</script>

<style scoped>
/* .trafficInsight {
  width: 100%;
} */
.hotmap-view {
  padding: 15px;
  height: fit-content;
  width: fit-content;

  /* display: flex; */
  /* flex-direction: column; */
}
#hotmap {
  height: 80%;
  /* min-height: 230px; */
  /* min-width: 300px; */
  /* height: 180px; */
  /* width: 200px; */
  /* display: flex; */
  /* justify-content: space-between; */
  /* white-space: normal; */
  /* align-items: center; */
  /* margin: auto; */
}

.hotmap-select {
  color: var(--mainColor);
  width: fit-content;
  background-color: var(--cardBg);
  padding: 1px 5px;
  border-radius: 5px;
  border-width: 2px;
  margin-left: 15px;
}
.hotmap-title {
  display: flex;
  padding-bottom: 5px;
  justify-content: space-between;
  border-bottom: 1px solid var(--notImportantText);
}

/* //修改选择框的颜色 */
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  border-color: rgb(248, 181, 1) !important;
  background-color: rgb(248, 181, 1) !important;
}
.el-checkbox__input.is-focus .el-checkbox__inner {
  border-color: rgb(248, 181, 1) !important;
}
/* //修改选中后文本的颜色 */
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: rgb(248, 181, 1) !important;
}

/** 同类卡片高度 */
.ti-cardHeight{
  height: 360px;
}
</style>