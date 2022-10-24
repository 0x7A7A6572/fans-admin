<template>
  <el-row class="distr-dubble-tag">
    <el-col class="tag-left" :span="12">
      <div
        class="tag-left-item"
        v-for="(item, index) in thisProduct"
        :key="index"
      >
        {{ item.class }} {{ item.percentage }}
      </div>
    </el-col>
    <el-col class="tag-right" :span="12">
      <div
        class="tag-right-item"
        v-for="(item, index) in competitors"
        :key="index"
      >
        {{ item.class }} {{ item.percentage }}
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
const props = defineProps({
  thisProduct: Array,
  competitors: Array,
});

let expDate = {
  thisProduct: [
    {
      class: "美食",
      percentage: "29.4%",
    },
    {
      class: "剧情搞笑",
      percentage: "19.6%",
    },
    {
      class: "颜值达人",
      percentage: "19.6%",
    },
    {
      class: "运动健身",
      percentage: "9.8%%",
    },
    {
      class: "时尚",
      percentage: "3.9%",
    },
    {
      class: "二次元",
      percentage: "3.9%",
    },
  ],
  competitors: [
    {
      class: "剧情搞笑",
      percentage: "29.4%",
    },
    {
      class: "颜值达人",
      percentage: "23.5%",
    },
    {
      class: "生活",
      percentage: "23.5%",
    },
    {
      class: "美妆",
      percentage: "11.8%%",
    },
    {
      class: "测评",
      percentage: "5.9%",
    },
    {
      class: "财经投资",
      percentage: "5.9%",
    },
  ], //竞品的数据
};
</script>

<style scoped>
/* .tag-left{
} */

.distr-dubble-tag {
  padding: 10px;
}
.tag-left-item {
  font-size: small;
  background-color: var(--strongTextShadow);
  margin: 5px auto;
  padding: 2px 10px;
  width: fit-content;
  border-radius: 8px;
  min-width: 50%;
  text-align: center;
  border: 2px solid var(--strongText);
  color: var(--strongText);
}
.tag-right-item {
  font-size: small;
  background-color: var(--strongText2Shadow);
  margin: 5px auto;
  padding: 2px 10px;
  width: fit-content;
  min-width: 50%;
  text-align: center;
  border-radius: 5px;
  border: 2px solid var(--strongText2);
  color: var(--strongText2);
}
</style>