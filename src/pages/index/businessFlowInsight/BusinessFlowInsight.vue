<template>
  <el-row class="cardBox" :gutter="20">
    <el-col :span="16">
      <div class="cardStyle">
        <!-- 标题 -->
        <el-col :span="24" class="popular-lite-title">
          <span style="flex: 1">销售预览</span>
          <el-date-picker
            class="exposure-data-picker"
            type="daterange"
            start-placeholder="2022-10-09"
            end-placeholder="2022-10-30"
          />
          <el-button-group class="ml-4 switch-list">
            <el-button class="active">本品</el-button>
            <el-button>竞品</el-button>
          </el-button-group>
        </el-col>
        <!-- 数据比较 -->
        <el-row>
          <el-col :span="12" class="_date-left">
            <DataContrast
              title="本月总销量"
              value="45.7w"
              :percentage="12.2"
              color="var(--strongText)"
            ></DataContrast>
            <DataContrast
              title="本月GMV"
              value="364.8w"
              :percentage="8.2"
              color="var(--strongText)"
            ></DataContrast>
          </el-col>
          <el-col :span="12" class="_date-left">
            <DataContrast
              title="本月总销量"
              value="345.7w"
              :percentage="-2.0"
              color="var(--strongText2)"
            ></DataContrast>
            <DataContrast
              title="本月GMV"
              value="7,234.6w"
              :percentage="5.1"
              color="var(--strongText2)"
            ></DataContrast>
          </el-col>
        </el-row>
        <el-row>
          <div id="playTrendBf"></div>
        </el-row>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="cardStyle">
        <PopularSimpleList :rankingList="rankingList"></PopularSimpleList>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import DataContrast from "../components/DataContrast.vue";
import PopularSimpleList from "../components/PopularSimpleList.vue";
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
import option from "./echartOption.js";

//模拟接口返回的img

let playTrendChartDom;
let playTrendChart;
let timerChartDwar;
onMounted(() => {
  // init();
  timerChartDwar = setTimeout(init, 100);
  // 监听屏幕宽度变化：当浏览器发生resize事件的时候，触发echart的resize事件，重绘canvas
  window.addEventListener("resize", () => {
    changeWidth();
  });
});
function changeWidth() {
  playTrendChart.resize();
}
function init() {
  playTrendChartDom = document.getElementById("playTrendBf");
  playTrendChart = echarts.init(playTrendChartDom);
  option && playTrendChart.setOption(option);
  clearTimeout(timerChartDwar);
}

/** 数据 */
let rankingList = [
  {
    name: "吃货的世界",
    avatar: "/public/fakerAvatar/avatar3.png",
    salesCount: 6531,
    salesVolume: 171000,
  },
  {
    name: "地主家的傻女儿",
    avatar: "/public/fakerAvatar/avatar1.png",
    salesCount: 5133,
    salesVolume: 159000,
  },
  {
    name: "我的零食铺",
    avatar: "/public/fakerAvatar/avatar2.png",
    salesCount: 5678,
    salesVolume: 146000,
  },
  {
    name: "大胖",
    avatar: "/public/fakerAvatar/avatar4.png",
    salesCount: 1985,
    salesVolume: 99000,
  },
  {
    name: "大叔就爱吃",
    avatar: "/public/fakerAvatar/avatar5.png",
    salesCount: 2543,
    salesVolume: 67000,
  },
  {
    name: "美食家",
    avatar: "/public/fakerAvatar/avatar1.png",
    salesCount: 694,
    salesVolume: 60000,
  },
  {
    name: "姐弟一起吃",
    avatar: "/public/fakerAvatar/avatar3.png",
    salesCount: 2699,
    salesVolume: 67000,
  },
];
</script>

<style scoped>
.popular-lite-title{
  display: flex !important;
}
.cardKK {
  background-color: var(--cardBg);
  min-height: 300px;
  border-radius: 12px;
  /* padding: 15px; */
  /* margin: 15px; */
}
.exposure-data-picker {
  /* flex: 0; */
  flex-grow: 0 !important;
  width: 200px !important;
  background-color: var(--cardBg) !important;
}
.switch-list {
  display: flex;
  align-items: center;
  margin: 0px 10px;
}
.switch-list .el-button {
  background-color: var(--cardBg);
  border: 1px solid var(--strongText);
  color: var(--strongText);
  /* font-weight: bold; */
  height: 1.5rem;
}
.switch-list .el-button.active {
  background-color: var(--strongText);
  color: var(--cardBg);
}
._date-left {
  /* min-height: 200px; */
}
#playTrendBf {
  height: 350px;
  width: 100%;
}

</style>