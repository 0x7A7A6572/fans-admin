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
  toolbox: {
    show: true,
    feature: {
      saveAsImage: {
        title: "导出图片"
      }
    }
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
      showSymbol: false,
      data: [
        {
          value: [78.4, 54.2, 21.8, 44.3, 53.6],
          lineStyle: {
            type: "solid",
            color: "rgba(49, 149, 255, 0)",
            // normal: {
            //   type: "solid",
            //   color: "rgba(49, 149, 255, 0)",
            // },
          },
        
          itemStyle: {
            color: "rgba(49, 149, 255, 0.447)",
          },
          name: "Allocated Budget",
        },
        {
          lineStyle: {
            color: "white",
            type: "dashed",
            // normal: {
            //   color: "white",
            //   type: "dashed",
            // },
          },
          itemStyle: {
            color: "rgba(248, 182, 1, 0.647)",
          },
          value: [68.4, 44.2, 5.8, 34.3, 43.6],
          name: "渠道上周各指数得分情况",
        },
      ],
    },
  ],
}