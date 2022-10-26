<template>
<!-- el-row 位置超出屏幕外 14+10 产生了换行 -->
 <el-row :span="24" style="justify-content: space-around;">
    <el-col :span="14" class="hotmap-view cardStyle">
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
    </el-col>
    <el-col :span="8" class="cardStyle">
      <PopularList></PopularList>
    </el-col>
  </el-row>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
import PopularList from "./PopularList.vue";
let myChart;
function init() {
  var chartDom = document.getElementById("hotmap");
  myChart = echarts.init(chartDom);
  var option;

  function getVirtulData(year) {
    year = year || "2017";
    var date = +echarts.number.parseDate(year + "-01-01");
    var end = +echarts.number.parseDate(year + "-12-31");
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    let count = 0;
    for (var time = date; time < end; time += dayTime) {
      count++;
      data.push([
        echarts.time.format(time, "yyyy-MM-dd"),
        Math.floor(Math.random() * 10),
      ]);
      if (count > 180) {
        break;
      }
    }
    // console.log(data);
    return data;
  }
  option = {
    itemStyle: {
      borderRadius: 3,
    },
    title: {
      top: 0,
      left: "center",
      text: "营销动态热力图",
      show: false,
    },
    tooltip: {
      show: true,
    },
    visualMap: {
      min: 0,
      max: 10,
      type: "piecewise",
      orient: "horizontal",
      left: 80,
      top: 190,
      inRange: {
        color: [
          "rgb(88, 88, 88)",
          "rgb(88, 88, 88)",
          "rgb(248, 181, 1)",
          "rgb(248, 181, 1)",
          "rgb(49, 150, 255)",
        ],
      },
    },
    calendar: {
      top: 10,
      left: 40,
      right: 30,
      cellSize: [25, 25],
      range: ["2016-1", "2016-06"], //显示数据的范围（半年）
      itemStyle: {
        color: "rgba(88, 88, 88, 0.5)",
        borderWidth: 8,
        borderRadius: 3,
        // barBorderRadius: 8,
        borderColor: "rgb(32, 33, 42)",
      },
      dayLabel: {
        show: true,
        color: "white",
        nameMap: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      },
      monthLabel: { show: false },
      yearLabel: { show: false },
      splitLine: {
        show: false,
      },
    },
    series: {
      type: "heatmap",
      coordinateSystem: "calendar",
      data: getVirtulData("2016"),
    },
  };

  option && myChart.setOption(option);
  if (timmerEchar) {
    clearTimeout(timmerEchar);
  }
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
.hotmap-view {
  padding: 15px;
  height: fit-content;
  width: fit-content;

  /* display: flex; */
  /* flex-direction: column; */
}
#hotmap {
  min-height: 230px;
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
</style>