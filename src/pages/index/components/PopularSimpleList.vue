<template>
  <div class="popular-lite">
    <div class="popular-lite-title">
      <span
        >进30天带货主播<el-icon><InfoFilled /></el-icon>
      </span>
      <el-button-group class="ml-4 switch-list">
        <el-button class="active">本品</el-button>
        <el-button>竞品</el-button>
      </el-button-group>
    </div>
    <!-- 作品排行榜 start-->
    <div class="popular-lite-list">
      <el-row
        class="popular-lite-list_item"
        v-for="(item, index) in rankingList"
        :key="index"
      >
        <el-col :span="2">
          {{ index + 1 }}
        </el-col>
        <el-col :span="2">
          <img class="_item-avatar" :src="item.avatar" alt="avatar" />
        </el-col>
        <el-col :span="11">
          <span class="_item-author">{{ item.name }}</span>
        </el-col>
        <el-col :span="9" class="sales-volume">
          <div class="_item-praise">
            销量
            <span>{{ formatNumber(item.salesCount) }}</span>
          </div>
          <div class="_item-praise">
            销售额
            <span>{{ formatNumber(item.salesVolume) }}</span>
          </div>
        </el-col>
      </el-row>
      <!-- item - end -->
    </div>

    <!-- 作品排行榜 end -->
  </div>
</template>

<script setup>
const props = defineProps({
  rankingList: Array,
});

// let defaultData = [
//   {
//     name: "吃货的世界",
//     salesCount: 6531,
//     salesVolume: 171000,
//   },
//   {
//     name: "地主家的傻女儿",
//     salesCount: 5133,
//     salesVolume: 159000,
//   },
//   {
//     name: "我的零食铺",
//     salesCount: 5678,
//     salesVolume: 146000,
//   },
//   {
//     name: "大胖",
//     salesCount: 1985,
//     salesVolume: 99000,
//   },
//   {
//     name: "大叔就爱吃",
//     salesCount: 2543,
//     salesVolume: 67000,
//   },
//   {
//     name: "美食家",
//     salesCount: 694,
//     salesVolume: 60000,
//   },
//   {
//     name: "姐弟一起吃",
//     salesCount: 2699,
//     salesVolume: 67000,
//   },
// ];

/** 格式化数字为简易数字 */
function formatNumber(n) {
  if (n > 1000 && n < 10000) {
    return parseInt(7438 / 1000) + "," + (7438 % 1000);
  }else if(n >= 10000){
    return (n/10000).toFixed(1) + "w";
  }
  return n;
}
</script>

<style scoped>
/* .popular-lite {
  padding: 15px;
} */
.popular-lite-title {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--notImportantText);
  padding-bottom: 10px;
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

/* 排行榜item */
.popular-lite-list_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* min-height: 200px; */
  padding: 10px;
}
.popular-lite-list_item ._item-img {
  width: 20%;
  height: 100%;
  max-width: 40px;
  max-height: 80px;
  background-color: aliceblue;
}
.popular-lite-list_item ._item-title {
  color: var(--secondText);
  padding-bottom: 24px;
  display: block;
}

.popular-lite-list_item ._item-praise {
  text-align: center;
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.popular-lite-list_item ._item-userinfo {
  color: var(--notImportantText);
  display: flex;
  align-items: center;
  justify-content: left;
}
.popular-lite-list_item ._item-avatar {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin-right: 15px;
}
.sales-volume {
  display: flex;
  white-space: nowrap;
  justify-content: space-around;
}
._item-author {
  padding-left: 15px;
}
</style>