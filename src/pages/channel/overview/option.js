//雷达数据
export default {
  title: {
    show: false,
    text: "Basic Radar Chart",
  },
  legend: {
    show: false,
    data: ["Allocated Budget", "渠道上周各指数得分情况"],
  },

  radar: {
    splitArea: {
      show: false,
      areaStyle: {
        color: "rgba(255,0,0,0)", // 图表背景的颜色
      },
    },
    // shape: 'circle',
    indicator: [
      { name: "内容指数", max: 100 },
      { name: "曝光指数", max: 100 },
      { name: "涨粉指数", max: 100 },
      { name: "带货指数", max: 100 },
      { name: "引流指数", max: 100 },
    ],
  },
  series: [
    {
      name: "Budget vs spending",
      type: "radar",
      areaStyle: {},
      data: [
        {
          value: [98.2, 69.6, 66.5, 95.6, 80.3],
          lineStyle: {
            normal: {
              type: "solid",
              color: "rgba(49, 149, 255, 0)",
            },
          },
          itemStyle: {
            color: "rgba(49, 149, 255, 0.247)",
          },
          name: "Allocated Budget",
        },
        {
          lineStyle: {
            normal: {
              color: "white",
              type: "dashed",
            },
          },
          itemStyle: {
            color: "rgba(49, 149, 255, 0.247)",
          },
          value: [76.3, 55.6, 55.8, 68.3, 54.8],
          name: "渠道上周各指数得分情况",
        },
      ],
    },
  ],
}