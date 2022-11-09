import * as echarts from "echarts";
export default {
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
}