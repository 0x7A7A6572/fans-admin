<template>
  <div class="assets-view">
    <h2 class="big-title">短视频达人搜索</h2>
    <div class="title dashed">
      <span class="type-heard">达人类目:</span>
      <ul class="asc-type">
        <li>全部</li>
        <li
          v-for="(item, index) in type"
          :class="item == '颜值达人' ? 'active' : ''"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="title dashed">
      <span class="type-heard">达人属性:</span>
      <ul class="asc-type">
        <li>
          <span>地域</span>
          <el-select-v2 model-value="不限" :options="initials" />
        </li>
        <li>
          <span>性别分布</span>
          <el-select-v2 model-value="不限" :options="initials" />
        </li>
      </ul>
    </div>
    <div class="title dashed">
      <span class="type-heard">粉丝资产:</span>
      <div class="asc-type-3">
        <div>
          <span>粉丝量</span>
          <el-checkbox checked>全部</el-checkbox>
          <el-checkbox>头部：粉丝量1000w以上</el-checkbox>
          <el-checkbox>肩部：粉丝量500w~1000w</el-checkbox>
          <el-checkbox>腰部：粉丝量100w~500w</el-checkbox>
          <el-checkbox>尾部：粉丝量100w以下</el-checkbox>
        </div>
        <div>
          <span>性别分布</span>
          <el-select-v2 model-value="女粉较多（70%~85%）" :options="initials" />
          <span>主要年龄</span>
          <el-select-v2 model-value="请选择" :options="initials" />
        </div>
      </div>
    </div>
    <div class="title dashed">
      <span class="type-heard">品牌流量:</span>
      <div class="asc-type-3">
        <div>
          <el-checkbox checked>喜小茶</el-checkbox>
          <el-select-v2 model-value="全部竞品" :options="initials" />
        </div>
      </div>
    </div>
    <div class="data-res">
      <div>
        <el-input
          v-model="input2"
          class="w-50 m-2"
          placeholder="请输入抖音昵称丶 ID"
          :suffix-icon="Search"
        />
        <button>清除筛选条件</button>
      </div>
      <div>
        <span>共计：<span>432</span>条数据</span>
        <span>数据统计周期：08.01~08.07</span>
      </div>
      <table class="data-table cardStyle">
        <thead>
          <tr>
            <th class="data-table-user">短视频达人</th>
            <th>达人级别</th>
            <th>粉丝总数</th>
            <th>周涨分数</th>
            <th>周作品量</th>
            <th>周平均播放</th>
            <th>周平均获赞</th>
            <th>周CPP千次播放</th>
            <th>品牌提及</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableData" :key="index">
            <td>
              <img class="_avatar" :src="item.user.avatar" alt="" />
              <div>
                <div class="_name">
                  {{ item.user.name }}
                  <el-icon
                    :color="
                      item.user.sex == 0 ? '#ff5454' : 'var(--strongText2)'
                    "
                    ><Avatar
                  /></el-icon>
                </div>
                <div>
                  <span
                    class="_type"
                    v-for="(uitem, uindex) in item.user.type"
                    :key="uindex"
                    >{{ uitem }}</span
                  >
                  <el-icon class="_addr-icon"><Location /></el-icon>
                  <span>{{ item.user.addr }}</span>
                </div>
              </div>
            </td>
            <td>
              {{ item.leve }}
            </td>
            <td>
              {{ Tools.convertNum(item.fans)  }}
            </td>
            <td>
              {{ Tools.convertNum(item.fansup) }}
            </td>
            <td>
              {{ item.weekzp }}
            </td>
            <td>
              {{ Tools.convertNum(item.weekview) }}
            </td>
            <td>
              {{ Tools.convertNum(item.weekget) }}
            </td>
            <td>
              {{ item.weekccp }}
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 先不用你先 -->
      <!-- <el-table class="data-table cardStyle" :data="tableData">
        <el-table-column label="短视频达人" width="300">
          <template #default="user">
            {{user.$name}} {{user.$sex}}
          </template>
        </el-table-column>
        <el-table-column prop="leve" label="达人级别" />
        <el-table-column prop="fans" label="粉丝总数" />
        <el-table-column prop="fansup" label="周涨分数" />
        <el-table-column prop="weekzp" label="周作品量" />
        <el-table-column prop="weekview" label="周平均播放" />
        <el-table-column prop="weekget" label="周平均获赞" />
        <el-table-column prop="weekccp" label="周CPP千次播放" />
        <el-table-column prop="mention" label="品牌提及" />
      </el-table> -->
    </div>
  </div>
</template>

<script setup>
import ascMockDate from "./mock.asc.json";
import { Search } from "@element-plus/icons-vue";
import TableDropDown from "./TableDropDown.vue";
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
const Tools = proxy.$tools;
let { type, data } = ascMockDate;
const initials = [
  {
    value: `Option `,
    label: `不限`,
  },
];

let tableData = data.yzdr;
</script>

<style scoped>
.assets-view {
  color: var(--thirdText);
}
.type-heard {
  font-weight: bolder;
}
.asc-type {
  display: inline-flex;
}
.asc-type > li {
  padding: 2px 4px;
  margin: 2px 8px;
}
.asc-type > li.active {
  background-color: var(--strongText2);
  border-radius: 5px;
  color: var(--mainText);
}
.asc-type > li > span {
  margin-right: 10px;
}

.asc-type-3 {
  display: inline-flex;
  flex-direction: column;
  padding: 2px 4px;
  margin: 2px 8px;
}
.asc-type-3 > div {
  margin-bottom: 10px;
}
.asc-type-3 > div > span {
  margin-left: 20px;
  margin-right: 10px;
}

.asc-type-3 .el-checkbox {
  margin-left: 20px;
  margin-right: 10px;
}
.title {
  padding: 15px 10px;
  border-bottom: 1px dashed var(--cardItemHover);
}
.big-title {
  color: var(--mainText);
}
.data-res {
  padding: 15px;
}
.data-res > div:first-child {
  display: flex;
  padding: 15px;
  /* width: 100%; */
  justify-content: right;
}
.data-res > div > .el-input {
  width: 200px;
  margin-right: 20px;
}
.data-res > div:nth-child(2) {
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
}
.data-res > div:nth-child(2) > span > span {
  color: var(--strongText2);
  font-weight: bold;
  margin: 0px 10px;
}

/** el-table 有点难用 */
.data-table {
  width: 100%;
  font-size: small;
  justify-content: unset !important;
  padding: 0;
}
.data-table > thead {
  color: var(--secondText);
  display: flex;
  background-color: var(--cardItemHover);
  padding: 20px 10px;
  border-radius: 8px;
  justify-content: space-around;
}
.data-table > thead > tr > th {
  padding: 0px 20px;
}
.data-table-user {
  width: 280px;
  text-align: left;
}
.data-table > tbody > tr {
  display: flex;
  width: 100%;
  justify-content: space-around;
}
.data-table > tbody > tr > td {
  display: flex;
  padding: 5px;
  align-items: center;
}
.data-table > tbody > tr > td > img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 10px;
}
.data-table > tbody > tr > td ._name {
  padding: 5px;
  font-weight: bold;
  font-size: 16px;
  line-height: 30px;
}
.data-table > tbody > tr > td ._type {
  color: var(--strongText);
  background-color: var(--strongTextShadow);
  border: 1px solid var(--strongText);
  padding: 2px 5px;
  border-radius: 5px;
  margin-right: 10px;
}
.data-table > tbody ._addr-icon {
  color: var(--strongText2);
  font-size: large;
  margin: 0px 5px;
}
</style>