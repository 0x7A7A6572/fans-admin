<template>
  <div class="distribution-card">
    <span class="distribution-title"
      >{{ title }}<el-icon><InfoFilled /></el-icon
    ></span>
    <div v-if="theme === 'bar'" style="position: relative;">
      <div
        class="distribution-card__item"
        v-for="(item, index) in disData"
        :key="index"
      >
        <span class="distribution-card__name">{{ item.name }}</span>
        <div class="distribution-card__bar">
          <div
            class="distribution-card__use"
            :style="{
              width: item.level + '%',
            }"
          ></div>
        </div>
      </div>
    </div>
    <!-- tag 主题 -->
    <div v-else class="item-theme-tag">
        <div
        class="distribution-card__item item-tag"
        v-for="(item, index) in disData"
        :key="index"
      >
        <span class="distribution-card__name">{{ item.name }}</span>
        <span>{{item.level + '%'}}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  theme: {
    type: String,
    defult: "bar",
  },
  title: String,
  disData: {
    type: Array,
    /*
    [
      {
        name: String,
        level: Number [1-100]
      }
    ]
     */
  },
});
</script>

<style scpoed>
.distribution-card {
  background-color: rgb(41, 42, 51);
  /* display: flex; */
  border-radius: 12px;
  padding: 10px;
  font-size: smaller;
}
.distribution-title{
  padding: 5px;
  display: block;
  font-weight: bold;
}
.distribution-card__item {
  display: flex;
  flex-direction: row;
  margin: 10px;
  position: relative;

}
.distribution-card__name {
  margin-right: 10px;
}
.distribution-card__bar {
  height: 20px;
  /* width: 100%; */
  flex: auto;
  background-color: rgb(58, 58, 69);
  border-radius: 10rem;
  position: relative;
}
.distribution-card__use {
  height: 100%;
  position: absolute;
  background-color: var(--strongText);
  border-radius: 10rem;
}

/* tag 主题 */
.item-theme-tag{
  display: flex;
  flex-wrap: wrap;
}
.item-tag{
  flex: 1;
  border: 1px solid var(--secondText);
  width: fit-content;
  border-radius: 5px;
  padding: 2px;
  color: var(--secondText);
  white-space: nowrap;
}
</style>