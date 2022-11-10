const Tools = {
  convertNum: function (num, fixed = 1) {
    if (num >= 100000000) {
      return (num / 100000000).toFixed(fixed) + "亿";
    } else if (num >= 10000) {
      return (num / 10000).toFixed(fixed)  + "w";
    } else if (num >= 1000) {
      return (num/1000).toString().replace(".",",");
    } else {
      return num.toString();
    }
  }
}

// console.log(Tools.convertNum(235))
// console.log(Tools.convertNum(2835))
// console.log(Tools.convertNum(966635))
// console.log(Tools.convertNum(124564635))
export default Tools;