<template>
  <el-row class="left-menu">
    <el-col :span="24" style="position: fixed; height: 100vh">
      <!-- <h5 class="mb-2">Custom colors</h5> -->
      <!-- active-text-color="#ffd04b"
        background-color="#545c64" 
         text-color="#fff"-->
      <el-menu
        class="el-menu-vertical"
        default-active="2"
        background-color="var(--mainBg)"
        text-color="var(--mainText)"
        active-text-color="var(--strongText)"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1">
          <template #title>
            <router-link to="/index">
              <el-icon><HomeFilled /></el-icon>
              <span>首页</span>
            </router-link>
          </template>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><PieChart /></el-icon>
            <span>品牌流量渠道</span>
          </template>
          <!-- <el-menu-item-group title="Group One"> -->
          <el-menu-item index="2-1">
            <router-link to="/channel/overview"> 渠道成长概况 </router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <router-link to="/channel/optimization"> 渠道评估优化 </router-link>
          </el-menu-item>
          <!-- </el-menu-item-group> -->
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><Wallet /></el-icon>
            <span>达人与粉丝资产</span>
          </template>
          <el-menu-item-group title="达人资产概况">
            <el-menu-item index="3-1">短视频达人</el-menu-item>
            <el-menu-item index="3-2">带货主播</el-menu-item>
            <el-menu-item index="3-3">KOC</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><Medal /></el-icon>
            <span>品牌流量洞察</span>
          </template>
          <el-menu-item index="4-1">行业竞品分析</el-menu-item>
          <el-menu-item index="4-2">品牌声量追踪</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>
            <el-icon><ShoppingBag /></el-icon>
            <span>商业流量洞察</span>
          </template>
          <el-menu-item index="5-1">行业竞品分析</el-menu-item>
          <el-menu-item index="5-2">商品带货检测</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="6">
          <el-icon><User /></el-icon>
          <span>账户中心</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script  setup>
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>
<style scoped>
.left-menu {
  background-color: var(--mainBg);
  height: 100%;
}
.el-menu-vertical {
  border-right: none;
  height: 100%;
}
.el-sub-menu__title * {
  font-weight: bold;
  font-size: 16px;
}
.el-menu-item > span {
  font-weight: bold;
  font-size: 16px;
}
/** 深层次的active应用 */
.el-menu-item a{
 color: white;
 text-decoration: none;
 width: 100%;
}
.el-menu-item.is-active a{
 color: var(--el-menu-active-color);
 text-decoration: none;
}
.el-menu-item.is-active{
 /* background-color: rgba(248, 181, 1, 0.3); */
 background-color: var(--muneActivte);
}
.el-sub-menu__title{
  justify-content: left;
}
</style>
