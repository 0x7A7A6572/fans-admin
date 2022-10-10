<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NavAdmin from "./components/NavAdmin.vue";
// import { ElAffix, ElPageHeader, ElTag, ElAvatar, ElButton } from "element-plus";
import LeftMenu from "./components/LeftMenu.vue";
import FlowChannel from "./components/FlowChannel.vue";
import TrafficInsight from "./components/TrafficInsight.vue";
import ExposureData from "./components/ExposureData.vue";
</script>

<template>
  <el-row>
    <!-- 顶部导航栏nav -->
    <el-col :span="24" class="nav-admin"><NavAdmin></NavAdmin> </el-col>
    <!-- 侧边菜单栏 -->
    <el-col :span="4">
      <LeftMenu></LeftMenu>
    </el-col>
    <!-- 主面板 -->
    <el-col :span="20" class="main-contorl">
      <!-- 品牌流量渠道 -->
      <el-row>
        <el-col :span="24" class="main-contorl-title">
          <div>
            <span class="main-contorl-title__mian">品牌流量渠道</span>
            <span class="main-contorl-title__info">渠道已建立180天</span>
          </div>
          <span class="main-contorl-title__more fast-flex"
            >查看更多流量渠道数据<el-icon><ArrowRightBold /></el-icon
          ></span>
        </el-col>
        <!-- 流量类型分布-环形数据可视化 -->
        <FlowChannel></FlowChannel>
      </el-row>
      <!-- 品牌流量洞察 -->
      <el-low>
        <el-col :span="24" class="main-contorl-title">
          <div>
            <span class="main-contorl-title__mian">品牌流量洞察</span>
            <span class="main-contorl-title__info"></span>
          </div>
          <span class="main-contorl-title__more fast-flex"
            >查看更多流量洞察数据<el-icon><ArrowRightBold /></el-icon
          ></span>
        </el-col>
        <!-- 品牌流量洞察左右卡片 -->
        <!-- <el-low > -->
          <TrafficInsight></TrafficInsight>
        <!-- </el-low> -->
        <!-- 曝光数据 -->
        <ExposureData></ExposureData>
      </el-low>
    </el-col>
  </el-row>
</template>

<style>
:root {
  --mainBg: rgb(26, 25, 30);
  --cardBg: rgb(32, 33, 42);
  --strongText: rgb(248, 181, 1);
  --strongText2: rgb(49, 150, 255);
  --mainText: rgb(230, 230, 230);
  --secondText: rgb(188, 188, 188);
  --notImportantText: rgb(88, 88, 88);
  --success: rgb(0, 255, 21);
  --error: rgb(255,33,55);
}

.cardStyle {
  background-color: var(--cardBg);
  /* height: 320px; */
  min-height: 300px;
  border-radius: 12px;
  padding: 15px;
  margin: 15px;
}
body {
  margin: 0px;
}
.nav-admin {
  position: relative;
}
.main-contorl {
  background-color: var(--mainBg);
  color: var(--mainText);
}

.main-contorl-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
}
.main-contorl-title .main-contorl-title__mian {
  font-weight: bold;
  /* font-size: large; */
}
.main-contorl-title .main-contorl-title__info {
  color: var(--notImportantText);
  font-size: small;
  margin: 0px 5px;
}
.main-contorl-title .main-contorl-title__more {
  color: var(--secondText);
  font-size: smaller;
}

/** 覆盖 */
.el-page-header__header {
  flex: 1;
}
</style>
