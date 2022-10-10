<template>
  <el-row class="left-menu">
    <el-col :span="24" style="position: fixed;">
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
        <el-sub-menu index="1">
          <template #title>
            <el-icon><House /></el-icon>
            <span>首页</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><PieChart /></el-icon>
            <span>品牌流量渠道</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><Wallet /></el-icon>
            <span>达人与粉丝资产</span>
          </template>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><Medal /></el-icon>
            <span>品牌流量洞察</span>
          </template>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><ShoppingBag /></el-icon>
            <span>商业流量洞察</span>
          </template>
        </el-sub-menu>
        <el-menu-item index="4">
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
.left-menu{
  background-color: var(--mainBg);
  height: 100%;
}
.el-menu-vertical{
  border-right: none;
}
</style>
