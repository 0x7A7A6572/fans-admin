<template>
  <el-affix class="header" :offset="0">
    <el-page-header class="header-nav" :icon="null" :breadcrum="null">
      <!-- <template #breadcrumb /> -->
      <template #title>
        <el-button type="warning">企业LOGO</el-button>
      </template>
      <template #content>
        <div class="flex header-nav-title">
          <!-- <el-avatar
              :size="22"
              class="mr-3"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            /> -->
          <span class="text-large"> 企业流量中台 </span>
          <el-icon class="menu-contorl"><Expand /></el-icon>
          <!-- <el-tag>Default</el-tag> -->
        </div>
      </template>
      <template #extra>
        <div class="flex header-bav-func items-center">
          <el-icon><Search /></el-icon>
          <el-icon><Bell /></el-icon>
          <el-avatar
            :size="22"
            class="mr-3"
            src="https://zzerx.cn/Artwork/art/illustration/illustration2.png"
          />
          <span class="username">NAME</span>
        </div>
      </template>
    </el-page-header>
  </el-affix>
</template>

<script setup>
</script>

<style scoped>
.header-nav {
  background-color: var(--mainBg);
  padding: 10px;
  align-items: center;
  display: flex;
  justify-content: baseline;
}
.header-nav-title {
  color: var(--mainText);
  display: flex;
  align-items: center;
}
.menu-contorl{
  margin: 0px 10px;
}
.header-bav-func {
  display: flex;
  align-items: center;
  color: var(--mainText);
}
.header-bav-func .el-icon {
  padding: 5px;
}
.header-bav-func .username {
  margin: 0px 10px;
}
/* .el-page-header__header {
  width: 100% !important;
  padding: 10px;
} */
</style>