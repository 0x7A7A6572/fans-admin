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
import DataContrast from "./DataContrast.vue";
import PopularSimpleList from "./PopularSimpleList.vue";
import { onMounted, ref } from "vue";
import * as echarts from "echarts";

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
          name: "本品",
          icon: "circle",
        },
        {
          name: "竞品",
          icon: "circle",
        },
      ],
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
          // normal: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            { offset: 0, color: "rgb(248, 141, 1)" },
            { offset: 1, color: "rgb(255, 241, 15)" },
          ]),
          // },
        },
        tooltip: {
          valueFormatter: function (value) {
            return value + " ml";
          },
        },
        data: [112.0, 44.9, 67.0, 123.2, 25.6, 76.7, 135.6],
      },
      {
        name: "竞品",
        type: "bar",
        color: "rgb(49, 150, 255)",
        itemStyle: {
          //颜色渐变代码
          // normal: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            { offset: 0, color: "rgb(99, 100, 255)" },
            { offset: 1, color: "rgb(49, 180, 255)" },
          ]),
          // },
        },
        tooltip: {
          valueFormatter: function (value) {
            return value + " ml";
          },
        },
        data: [99.6, 65.9, 49.0, 26.4, 68.7, 70.7, 175.6],
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

/** 数据 */
let rankingList = [
  {
    name: "吃货的世界",
    avatar: "https://zzerx.cn/Artwork/art/illustration/illustration11.png",
    salesCount: 6531,
    salesVolume: 171000,
  },
  {
    name: "地主家的傻女儿",
    avatar: "https://zzerx.cn/Artwork/art/illustration/illustration1.png",
    salesCount: 5133,
    salesVolume: 159000,
  },
  {
    name: "我的零食铺",
    avatar: "https://zzerx.cn/Artwork/art/illustration/illustration2.png",
    salesCount: 5678,
    salesVolume: 146000,
  },
  {
    name: "大胖",
    avatar: "https://zzerx.cn/Artwork/art/illustration/illustration4.png",
    salesCount: 1985,
    salesVolume: 99000,
  },
  {
    name: "大叔就爱吃",
    avatar: "https://zzerx.cn/Artwork/art/illustration/illustration5.png",
    salesCount: 2543,
    salesVolume: 67000,
  },
  {
    name: "美食家",
    avatar: "https://zzerx.cn/Artwork/art/illustration/illustration6.png",
    salesCount: 694,
    salesVolume: 60000,
  },
  {
    name: "姐弟一起吃",
    avatar: "https://zzerx.cn/Artwork/art/illustration/illustration9.png",
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