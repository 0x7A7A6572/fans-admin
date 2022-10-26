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
    left: '-20%',
    right: '10%',
    bottom: '10%',
    top: '20%',
    containLabel: false
  },
  xAxis: [
    {
      show: false,
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon2', 'Tue2', 'Wed2', 'Thu2', 'Fri2', 'Sat2', 'Sun2' ]
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
        width: 2,
        color: 'rgb(49, 150, 255)'
      },
      showSymbol: false, //不显示所有数据点
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
      data: [320, 132, 401, 334, 520, 330, 220,320, 132, 201, 334, 190, 130, 220]
    }
  ]
}