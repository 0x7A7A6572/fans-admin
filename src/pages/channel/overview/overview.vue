<template>
  <el-row class="overview">
    <el-col :span="24">
      <h2>本品抖音流量渠道概览</h2>
    </el-col>
    <el-col :span="24">
      <el-row class="cardStyle">
        <el-col class="cardStyle-group" :span="8">
          <div class="cardStyle-item date-select">
            <span>2020-08-24 - 2020-08-30</span>
            <el-icon><ArrowRight /></el-icon>
          </div>
          <div class="cardStyle-item">
            <span
              >渠道价值指数<el-icon color="var(--strongText2)" :size="16"
                ><DataAnalysis /></el-icon
            ></span>
            <div class="overview-small">
              <div id="overviewSmallChart"></div>
              <div>
                <DataContrast
                  value="7,675.8"
                  :percentage="11.3"
                  color="var(--strongText)"
                ></DataContrast>
              </div>
            </div>
          </div>
          <div class="cardStyle-item">
            <span
              ><el-icon color="var(--strongText2)" :size="20"><Ship /></el-icon
              >渠道建设目标</span
            >
            <el-icon><ArrowRight /></el-icon>
          </div>
        </el-col>
        <el-col :span="16">
          <div id="overviewReder"></div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, ref } from "vue";
import randarOption from "./option.js";
import linearOption from "./optionLinear.js";

/*  雷达数据 */
let timerRadarChartDwar;
let radarChartDom;
let radarChart;

/*  线性表数据 */
let timerLinearChartDwar;
let linearChartDom;
let linearChart;

onMounted(() => {
  // init();
  timerRadarChartDwar = setTimeout(init, 100);
  // 监听屏幕宽度变化：当浏览器发生resize事件的时候，触发echart的resize事件，重绘canvas
  window.addEventListener("resize", () => {
    changeWidth();
  });
});

function changeWidth() {
  playTrendChart.resize();
}

function init() {
  /* 雷达数据 */
  radarChartDom = document.getElementById("overviewReder");
  radarChart = echarts.init(radarChartDom);
  randarOption && radarChart.setOption(randarOption);

  /* 图表数据 */
  var timerLinearChartDwar = document.getElementById("overviewSmallChart");
  var linearChart = echarts.init(timerLinearChartDwar);
  linearOption && linearChart.setOption(linearOption);
}
</script>

<style scoped>
.cardStyle-group {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.cardStyle-item {
  display: flex;
  align-items: center;
  color: var(--secondText);
  font-size: smaller;
  font-weight: bold;
  padding: 20px;
  background-color: var(--cardItem);
  margin: 10px 0px;
}
.cardStyle-item.date-select {
  display: flex;
  justify-content: space-between;
}
.cardStyle-item:hover {
  background-color: var(--cardItemHover);
}
.overview-small {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.overview .cardStyle-item:nth-child(2) {
  text-align: left;
  flex-direction: column;
}
.overview .cardStyle-item:nth-child(2) > span {
  width: 100%;
  padding-bottom: 8px;
}
.overview .cardStyle-item:nth-child(3) {
  justify-content: space-between;
}
.overview .cardStyle-item:nth-child(3) span {
  display: flex;
  align-items: center;
}
.overview .cardStyle-item:nth-child(3) span .el-icon {
  margin-right: 10px;
  border-radius: 50%;
  padding: 5px;
  background-color: var(--strongText2Shadow);
}

#overviewReder {
  width: 100%;
  min-width: 200px;
  height: 100%;
}
#overviewSmallChart {
  width: 200px;
  height: 100px;
}
</style>