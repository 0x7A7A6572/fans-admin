<template>
  <!-- <div> -->
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
  </el-row>
  <!-- 流量类型分布-环形数据可视化 -->
  <FlowChannel></FlowChannel>
  <!-- 品牌流量洞察 -->
  <el-row>
    <el-col :span="24" class="main-contorl-title">
      <div>
        <span class="main-contorl-title__mian">品牌流量洞察</span>
        <span class="main-contorl-title__info"></span>
      </div>
      <span class="main-contorl-title__more fast-flex"
        >查看更多流量洞察数据<el-icon><ArrowRightBold /></el-icon
      ></span>
    </el-col>
  </el-row>
  <!-- 品牌流量洞察左右卡片 -->
  <!-- <el-row class="" :gutter="20"> -->
  <TrafficInsight></TrafficInsight>
  <!-- </el-row> -->

  <!-- 曝光数据 -->
  <ExposureData></ExposureData>
  <!-- 商业流量洞察 -->
  <BusinessFlowInsight></BusinessFlowInsight>
  <!-- </div> -->
</template>

<script setup>
import FlowChannel from "./flowChannel/FlowChannel.vue";
import TrafficInsight from "./trafficInsight/TrafficInsight.vue";
import ExposureData from "./exposureData/ExposureData.vue";
import BusinessFlowInsight from "./businessFlowInsight/BusinessFlowInsight.vue";
</script>

<style >
</style>