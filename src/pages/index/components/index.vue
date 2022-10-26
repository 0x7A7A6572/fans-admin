<template>
  <view>
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
      <!-- 品牌流量洞察左右卡片 -->
      <TrafficInsight></TrafficInsight>
      <!-- 曝光数据 -->
      <ExposureData></ExposureData>
    </el-row>
    <!-- 商业流量洞察 -->
    <BusinessFlowInsight></BusinessFlowInsight>
  </view>
</template>

<script setup>
import FlowChannel from "./FlowChannel.vue";
import TrafficInsight from "./TrafficInsight.vue";
import ExposureData from "./ExposureData.vue";
import BusinessFlowInsight from "./BusinessFlowInsight.vue";
</script>

<style >
</style>