import * as echarts from "echarts";
//雷达数据
export default {
  option: {},
  title: {
    show: false,
    text: 'Gradient Stacked Area Chart'
  },
  tooltip: {
    show: false,
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['']
  },
  toolbox: {
    show: false,
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '0%',
    // right: '0%',
    bottom: '0%',
    containLabel: true
  },
  xAxis: [
    {
      show: false,
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      show: false,
      type: 'value'
    }
  ],
  series: [
    {
      name: 'line',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(49, 150, 255)'
          },
          {
            offset: 1,
            color: 'rgba(49, 149, 255, 0.247)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [320, 132, 201, 334, 190, 130, 220]
    }
  ]
}