<template>
  <el-row class="overview">
    <!-- 本品抖音流量渠道概览 -->
    <el-col :span="24">
      <h2>本品抖音流量渠道概览</h2>
    </el-col>
    <el-col :span="24" class="cardBox">
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
        <DataContrast
          title="渠道资源数"
          value="478"
          :percentage="103"
          color="var(--strongText)"
        ></DataContrast>
        <DataContrast
          title="渠道粉丝覆盖"
          value="5,6786.2w"
          :percentage="11.3"
          color="var(--strongText)"
        ></DataContrast>
      </el-row>
      <el-row :gutter="20" class="cardBox">
        <el-col :span="8">
          <div class="cardStyle overview-card-group">
            <p>短视频达人</p>
            <div class="overview-card-item">
              <DataContrast
                title="数量"
                value="142"
                :percentage="1"
                color="var(--strongText)"
              ></DataContrast>
              <DataContrast
                title="粉丝覆盖量"
                value="5,812.2w"
                :percentage="1"
                color="var(--strongText)"
              ></DataContrast>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="cardStyle overview-card-group">
            <p>带货主播</p>
            <div class="overview-card-item">
              <DataContrast
                title="数量"
                value="36"
                :percentage="7"
                color="var(--strongText)"
              ></DataContrast>
              <DataContrast
                title="粉丝覆盖量"
                value="2,286.2w"
                :percentage="10"
                color="var(--strongText)"
              ></DataContrast>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="cardStyle overview-card-group">
            <div class="overview-card-item">
              <DataContrast
                title="数量"
                value="336"
                :percentage="65"
                color="var(--strongText)"
              ></DataContrast>
              <DataContrast
                title="粉丝覆盖量"
                value="1,411.3w"
                :percentage="36"
                color="var(--strongText)"
              ></DataContrast>
            </div>
             <p>KOC类别分布对比</p>
             
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
@import "../channel.css";
</style>