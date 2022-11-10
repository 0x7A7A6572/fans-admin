<template>
  <el-row class="overview">
    <!-- 本品抖音流量渠道评估-->
    <el-col :span="24">
      <h2>本品抖音流量渠道评估</h2>
    </el-col>
    <el-col :span="24" class="cardBox">
      <el-row class="cardStyle">
        <el-col class="cardStyle-group" :span="8">
          <div class="cardStyle-item">
            <DataconTwo
              :title="optMockDate.firstModule.fvIndex.title"
              :conData="optMockDate.firstModule.fvIndex.conDate"
              :percentage="optMockDate.firstModule.fvIndex.percentage"
            ></DataconTwo>
            <!-- <div class="overview-small"> -->
            <!-- <div id="overviewSmallChart"></div> -->
            <!-- <div>
                <DataContrast
                  value="7,675.8"
                  :percentage="11.3"
                  color="var(--strongText)"
                ></DataContrast>
              </div> -->
            <!-- </div> -->
          </div>
          <div class="cardStyle-item" style="flex-direction: row">
            <span
              ><el-icon color="var(--strongText2)" :size="20"><Ship /></el-icon
              >渠道建设目标</span
            >
            <el-icon><ArrowRight /></el-icon>
          </div>
        </el-col>
        <el-col :span="16">
          <div id="overviewReder"></div>
          <a class="desc-link-right" href="#">
            <el-icon color="var(--secondText)" size="16">
              <QuestionFilled /></el-icon
            ><span>了解渠道流量价值评估模型?</span>
          </a>
        </el-col>
      </el-row>
    </el-col>
    <!-- 流量持有策略 -->
    <el-col :span="24">
      <h3>
        流量持有策略
        <a class="desc-link" href="#">
          <el-icon color="var(--secondText)" size="16">
            <QuestionFilled /></el-icon
          ><span>了解渠道流量价值评估模型?</span>
        </a>
      </h3>
    </el-col>
    <el-col :span="24" class="cardBox">
      <el-row class="cardStyle overview-card-title">
        <DataconTwo
          :title="optMockDate.secondModule.numOfRes.title"
          :conData="optMockDate.secondModule.numOfRes.conDate"
        ></DataconTwo>
        <DataconTwo
          :title="optMockDate.secondModule.fansCover.title"
          :conData="optMockDate.secondModule.fansCover.conDate"
        ></DataconTwo>
      </el-row>
      <el-row :gutter="20" class="cardBox">
        <el-col :span="8">
          <div class="cardStyle overview-card-group">
            <div class="overview-card-item">
              <DataconTwo
                :title="optMockDate.thirdModule.svNum.title"
                :conData="optMockDate.thirdModule.svNum.conDate"
              ></DataconTwo>
              <DataconTwo
                :title="optMockDate.thirdModule.fanCover.title"
                :conData="optMockDate.thirdModule.fanCover.conDate"
              ></DataconTwo>
            </div>
            <DatabfCon
              :title="optMockDate.thirdModule.dbf1.title"
              :conData="optMockDate.thirdModule.dbf1.conDate"
            ></DatabfCon>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="cardStyle overview-card-group">
            <div class="overview-card-item">
              <DataconTwo
                :title="optMockDate.thirdModule.wtsNum.title"
                :conData="optMockDate.thirdModule.wtsNum.conDate"
              ></DataconTwo>
              <DataconTwo
                :title="optMockDate.thirdModule.fansNum.title"
                :conData="optMockDate.thirdModule.fansNum.conDate"
              ></DataconTwo>
            </div>
            <DatabfCon
              :title="optMockDate.thirdModule.dbf2.title"
              :conData="optMockDate.thirdModule.dbf2.conDate"
            ></DatabfCon>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="cardStyle overview-card-group">
            <div class="overview-card-item">
              <DataconTwo
                :title="optMockDate.thirdModule.kocNum.title"
                :conData="optMockDate.thirdModule.kocNum.conDate"
              ></DataconTwo>
              <DataconTwo
                :title="optMockDate.thirdModule.fanCover2.title"
                :conData="optMockDate.thirdModule.fanCover2.conDate"
              ></DataconTwo>
            </div>
            <DatabfCon
              :title="optMockDate.thirdModule.dbf3.title"
              :conData="optMockDate.thirdModule.dbf3.conDate"
            ></DatabfCon>
          </div>
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
import DataconTwo from "./DataconTwo.vue";
import DatabfCon from "./DatabfCon.vue";
// 模拟后端返回数据
import optMockDate from "./mock.opt";
/*  雷达数据 */
let timerRadarChartDwar;
let radarChartDom;
let radarChart;

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
}
</script>

<style scoped>
@import "../channel.css";
.overview {
  color: var(--secondText);
}
</style>