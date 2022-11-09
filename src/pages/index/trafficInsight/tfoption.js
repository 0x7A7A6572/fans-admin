import * as echarts from "echarts";
export default {
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
    top: 250,
    textStyle: {
      //图例文字的样式
      // color: "white",
      fontSize: 16,
    },
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
    top: 50,
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
}



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
      fitEchartFormat(time, "yyyy-MM-dd"),
      // echarts.time.format(new Date(time), "yyyy-MM-dd"),
      Math.floor(Math.random() * 10),
    ]);
    if (count > 180) {
      break;
    }
  }
  //  console.log(data);
  return data;
}

/* 临时格式化时间（echart.time.format方法有误） */
function fitEchartFormat(time, templet) {
  let date = new Date(time);
  return `${date.getFullYear()}-${numAdd0(date.getMonth() + 1)}-${numAdd0(date.getDate())}`;
}
/* <10加0 */
function numAdd0(num) {
  return num < 10 ? "0" + num : num;
}