<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NavAdmin from "./components/NavAdmin.vue";
// import { ElAffix, ElPageHeader, ElTag, ElAvatar, ElButton } from "element-plus";
import LeftMenu from "./components/LeftMenu.vue";
</script>

<template>
  <el-row class="main">
    <!-- 顶部导航栏nav -->
    <el-col :span="24" class="nav-admin"><NavAdmin></NavAdmin> </el-col>
    <!-- 侧边菜单栏 -->
    <el-col :span="4">
      <LeftMenu></LeftMenu>
    </el-col>
    <!-- 主面板 -->

    <el-col :span="20" class="main-contorl">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<style>
ul,li{
  list-style: none;
  margin: 0;
  padding: 0;
}
button{
  background: transparent;
  color: var(--secondText);
  border: 1px solid var(--secondText);
  border-radius: 5px;
  white-space: nowrap;
}
:root {
  --mainBg: rgb(26, 25, 30);
  --cardBg: rgb(32, 33, 42);
  --cardItem: rgb(41, 42, 51);
  --cardItemHover: rgb(62, 63, 71);
  --strongText: rgb(248, 181, 1);
  --strongTextShadow: rgba(248, 182, 1, 0.247);
  --strongText2: rgb(49, 150, 255);
  --strongText2Shadow: rgba(49, 149, 255, 0.247);
  --mainText: rgb(230, 230, 230);
  --secondText: rgb(188, 188, 188);
  --thirdText: rgb(113, 114, 123);
  --notImportantText: rgb(88, 88, 88);
  --success: rgb(0, 255, 21);
  --error: rgb(255, 33, 55);
}

.el-menu {
  --muneActivte: rgba(41, 42, 51);
}

.cardBox {
  margin: 15px;
}
.cardStyle {
  background-color: var(--cardBg);
  /* height: 320px; */
  min-height: 300px;
  border-radius: 12px;
  padding: 15px;
  /* margin设置会导致col溢出 */
  /* */
}

.is-title {
  font-weight: bold;
  padding: 5px 15px;
  display: block;
}

body {
  margin: 0px;
  min-width: 1300px;
  background-color: var(--mainBg);
}

a {
  text-decoration: none;
  color: white;
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

.el-select-v2__wrapper{
  background-color: transparent !important;
  border: 1px solid var(--secondText) !important;
}

.el-checkbox__inner,.el-input__wrapper{
  background-color: transparent !important;
}
.el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: var(--strongText2)  !important;
}

.el-table tr{
  background-color: var(--cardBg) !important;
}
.el-table th.el-table__cell{

  background-color: var(--cardItemHover) !important;
}
.el-table{
  border-radius: 12px;
}
</style>
