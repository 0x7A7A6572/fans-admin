<template>
  <el-row :gutter="20" class="cardBox ">
    <el-col :span="10" class="flow-data">
      <div class="cardStyle fc-cardHeight">
        <span class="fast-flex"
          >流量类型分布<el-icon><InfoFilled /></el-icon
        ></span>
        <div id="FlowChannelChartDom"></div>
      </div>
      <!-- 流量类型分布 短视频达人 带货主播 KOC -->
    </el-col>
    <el-col :span="14" >
      <!-- 达人短视频数据(open) / 直播带货数据 / KOC种草数据 -->
      <el-tabs
        v-model="activeName"
        class="cardStyle distribution fc-cardHeight"
      >
        <el-tab-pane label="达人短视频数据" name="first">
          <!-- 达人短视频数据 -->
          <el-row :span="24" class="distribution-detalis">
            <div>
              <span class="detalis__title"
                >CPE千次播放<el-icon><InfoFilled /></el-icon
              ></span>
              <p>
                <span class="detalis__strong">246</span>
                <span>较上周</span
                ><el-icon color="var(--success)"><CaretBottom /></el-icon>
                <span>10.7%</span>
              </p>
            </div>
            <div class="fast-flex">
              <div class="details__right-item">
                <span class="detalis__title"
                  >粉丝覆盖<el-icon><InfoFilled /></el-icon
                ></span>
                <span class="detalis__number">5,812.2w</span>
              </div>
              <div class="details__right-item">
                <span class="detalis__title"
                  >平均播放<el-icon><InfoFilled /></el-icon
                ></span>
                <span class="detalis__number">63.3w</span>
              </div>
              <div class="details__right-item">
                <span class="detalis__title"
                  >平均获赞<el-icon><InfoFilled /></el-icon
                ></span>
                <span class="detalis__number">27.6w</span>
              </div>
            </div>
          </el-row>
          <el-row>
            <el-col :span="11">
              <DistributionCard
                theme="bar"
                title="达人粉丝量级分布"
                :disData="[
                  { name: '头部', level: 10 },
                  { name: '肩部', level: 30 },
                  { name: '腰部', level: 50 },
                  { name: '尾部', level: 20 },
                ]"
              ></DistributionCard>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="12">
              <DistributionCard
                theme="tag"
                title="达人类别分布"
                :disData="[
                  { name: '美食', level: 29.4 },
                  { name: '剧情搞笑', level: 19.6 },
                  { name: '颜值达人', level: 17.6 },
                  { name: '运动健身', level: 9.8 },
                  { name: '时尚', level: 3.9 },
                  { name: '二次元', level: 3.9 },
                ]"
              ></DistributionCard>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="直播带货数据" name="second"
          >直播带货数据</el-tab-pane
        >
        <el-tab-pane label="KOC种草数据" name="third">KOC种草数据</el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>

<script setup>
import DistributionCard from "./DistributionCard.vue";
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
const activeName = ref("first");
let flowChannelChart;
function init() {
  var chartDom = document.getElementById("FlowChannelChartDom");
  flowChannelChart = echarts.init(chartDom);
  var option;
  option = {
    darkMode: false,
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "0%",
      left: "center",
      color: "#FFF",
    },
    series: [
      {
        name: "流量类型分布",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: false,
            fontSize: "40",
            fontWeight: "bold",
            color: "white",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "短视频达人", color: "#fff" },
          { value: 735, name: "带货主播" },
          { value: 580, name: "KOC" },
        ],
      },
    ],
  };

  option && flowChannelChart.setOption(option);
  clearTimeout(timmerEchar);
  // console.log("SSSSS")
}

let timmerEchar = null;
onMounted(() => {
  timmerEchar = setTimeout(init, 100);
  // 监听屏幕宽度变化：当浏览器发生resize事件的时候，触发echart的resize事件，重绘canvas
  window.addEventListener("resize", () => {
    changeWidthFC();
  });
});
function changeWidthFC() {
  flowChannelChart.resize();
}
</script>

<style >
.flow-data {
  --el-color-primary: var(--strongText);
  width: fit-content;
}

#FlowChannelChartDom {
  height: 100%;
  min-height: 300px;
  /* height: 90%;
  width: 100%; */
  margin-bottom: 15px;
}

.fast-flex {
  display: flex;
  align-items: center;
}
/* .distribution{
  height: 100%;
} */

.distribution-detalis {
  display: flex;
  justify-content: space-between;
  font-size: smaller;
}
.detalis__title {
  color: var(--secondText);
  display: block;
  padding-bottom: 5px;
  /* border-bottom: 1px solid gray; */
}
.detalis__strong {
  color: var(--strongText);
  font-size: large;
  font-weight: bold;
  /* display: block; */
  margin: 0px 10px;
}
.detalis__number {
  font-size: large;
  font-weight: bold;
}

.details__right-item {
  padding: 10px;
}
/* .detalis__up-sign{
  color: var(--sucess);
} */

/** 覆盖 */
.el-tabs__item.is-active {
  font-weight: bold;
  color: var(--strongText) !important;
}
.el-tabs__item {
  color: var(--mainText) !important;
}
.el-tabs__item:hover {
  color: var(--strongText) !important;
}
.el-tabs__active-bar {
  background-color: var(--strongText) !important;
}
.el-tabs__nav-wrap::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px !important;
  background-color: var(--notImportantText) !important;
  z-index: var(--el-index-normal);
}
/** 同类卡片高度 */
.fc-cardHeight{
  height: 320px;
}
</style>