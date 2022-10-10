<template>
  <el-row class="exposure-data cardStyle">
    <!-- 标题 -->
    <el-col :span="24" class="popular-lite-title">
      <span style="flex: 1">曝光数据</span>
      <el-date-picker
        class="exposure-data-picker"
        type="daterange"
        start-placeholder="2022-10-09"
        end-placeholder="2022-10-30"
        :default-time="defaultTime"
      />
    </el-col>
    <!-- 数据比较 -->
    <el-col :span="12" class="_date-left">
      <DataContrast
        title="周作品"
        value="2,324"
        :percentage="12.5"
        color="var(--strongText)"
      ></DataContrast>
      <DataContrast
        title="周总获取数"
        value="125.3w"
        :percentage="11.3"
        color="var(--strongText)"
      ></DataContrast>
    </el-col>
    <el-col :span="12" class="_date-left">
      <DataContrast
        title="周总获取数"
        value="125.3w"
        :percentage="11.3"
        color="var(--strongText2)"
      ></DataContrast>
      <DataContrast
        title="周总获取数"
        value="125.3w"
        :percentage="11.3"
        color="var(--strongText2)"
      ></DataContrast>
    </el-col>
    <!-- 折线图 -->
    <el-col :span="24">
      <div id="playTrend"></div>
    </el-col>
  </el-row>
</template>

<script setup>
import { onMounted } from "vue";
import DataContrast from "./DataContrast.vue";
import * as echarts from "echarts";

let playTrendChartDom;
let timerChartDwar;
onMounted(() => {
  // init();
  timerChartDwar = setTimeout(init, 100);
});

function init() {
  playTrendChartDom = document.getElementById("playTrend");
  let playTrendChart = echarts.init(playTrendChartDom);
  var option;

  option = {
    top: 20,
    left: 10,
    right: 10,
    barWidth: "25%",
    title: {
      top: 0,
      left: "0",
      // left: "right",
      text: "近一周作品播放趋势",
      textStyle: {
        fontSize: 15,
      },
      show: true,
    },
    //柱状图上左右圆角
    itemStyle: {
      borderRadius: [50, 50, 0, 0],
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    toolbox: {
      // shwo: false,
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar"] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    legend: {
      left: "80%",
      orient: "horizontal",
      //  color: "#fff",
      data: [
    {
      name: '本品',
      icon: 'circle',
    },
    {
      name: '竞品',
      icon: 'circle',
     
    }
  ]
    },
    xAxis: [
      {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisPointer: {
          type: "shadow",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "获赞量(线)",
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          formatter: "{value} ml",
        },
      },
      {
        type: "value",
        name: "作品数(线)",
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
          formatter: "{value} °C",
        },
      },
    ],
    series: [
      {
        name: "本品",
        type: "bar",
        color: "rgb(248, 181, 1)",
        itemStyle: {
          //颜色渐变代码
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              { offset: 0, color: "rgb(248, 141, 1)" },
              { offset: 1, color: "rgb(255, 241, 15)" },
            ]),
          },
        },
        tooltip: {
          valueFormatter: function (value) {
            return value + " ml";
          },
        },
        data: [112.0, 44.9, 7.0, 23.2, 25.6, 76.7, 135.6],
      },
      {
        name: "竞品",
        type: "bar",
        color: "rgb(49, 150, 255)",
        itemStyle: {
          //颜色渐变代码
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              { offset: 0, color: "rgb(99, 100, 255)" },
              { offset: 1, color: "rgb(49, 180, 255)" },
            ]),
          },
        },
        tooltip: {
          valueFormatter: function (value) {
            return value + " ml";
          },
        },
        data: [99.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6],
      },
      {
        name: "获赞量(线)",
        type: "line",
        yAxisIndex: 1,
        smooth: true,
        color: "rgb(248, 181, 1)",
        tooltip: {
          valueFormatter: function (value) {
            return value + " °C";
          },
        },
        data: [10.0, 8.2, 3.3, 4.5, 6.3, 10.2, 20.3],
      },
      {
        name: "作品数(线)",
        type: "line",
        yAxisIndex: 1,
        smooth: true,
        color: "rgb(49, 150, 255)",
        tooltip: {
          valueFormatter: function (value) {
            return value + " °C";
          },
        },
        data: [8.0, 2.2, 0.3, 2.5, 3.3, 7.2, 13.3],
      },
    ],
  };

  option && playTrendChart.setOption(option);
  clearTimeout(timerChartDwar);
}
</script>

<style>
.popular-lite-title {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--notImportantText);
  padding-bottom: 10px;
  height: fit-content;
}
.exposure-data-picker {
  /* flex: 0; */
  flex-grow: 0 !important;
  width: 200px !important;
  background-color: var(--cardBg) !important;
}

._date-left {
  display: flex;
}

#playTrend {
  /* padding: 15px; */
  /* min-height: 300px;
  max-height: 400px; */
  height: 350px;
}
</style>