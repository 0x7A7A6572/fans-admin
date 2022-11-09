<template>
  <div class="popular-lite">
    <div class="popular-lite-title">
      热门作品
      <el-button-group class="ml-4 switch-list">
        <el-button class="active">本品</el-button>
        <el-button>竞品</el-button>
      </el-button-group>
    </div>
    <!-- 作品排行榜 start-->
    <div class="popular-lite-list">
      <div class="popular-lite-list_item">
        <img
          class="_item-img"
          src="/public/fakerImages/img1.png"
          alt=""
        />
        <div>
          <span class="_item-title">喜欢这个派对中的粉色啊</span>
          <div class="_item-userinfo">
            <img
              class="_item-avatar"
              src="/public/fakerAvatar/avatar1.png"
              alt="avatar"
            />
            <span class="_item-author">吃货的世界</span>
          </div>
        </div>
        <div class="_item-praise">
          获赞
          <h4>23.2w</h4>
        </div>
      </div>
      <!-- item - end -->
      <div class="popular-lite-list_item">
        <img
          class="_item-img"
         src="/public/fakerImages/img2.png"
          alt=""
        />
        <div>
          <span class="_item-title">喜欢这个派对中的粉色啊</span>
          <div class="_item-userinfo">
            <img
              class="_item-avatar"
              src="/public/fakerAvatar/avatar2.png"
              alt="avatar"
            />
            <span class="_item-author">吃货的世界</span>
          </div>
        </div>
        <div class="_item-praise">
          获赞
          <h4>1.7.2w</h4>
        </div>
      </div>
      <div class="popular-lite-list_item">
        <img
          class="_item-img"
          src="/public/fakerImages/img3.png"
          alt=""
        />
        <div>
          <span class="_item-title">喜欢这个派对中的粉色啊</span>
          <div class="_item-userinfo">
            <img
              class="_item-avatar"
              src="/public/fakerAvatar/avatar3.png"
              alt="avatar"
            />
            <span class="_item-author">吃货的世界</span>
          </div>
        </div>
        <div class="_item-praise">
          获赞
          <h4>7,842</h4>
        </div>
      </div>
    </div>

    <!-- 作品排行榜 end -->
  </div>
</template>

<script setup>

</script>

<style scoped>
/* .popular-lite {
  padding: 15px;
} */
.popular-lite-title {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--notImportantText);
  padding-bottom: 10px;
}
.switch-list .el-button {
  background-color: var(--cardBg);
  border: 1px solid var(--strongText);
  color: var(--strongText);
  /* font-weight: bold; */
  height: 1.5rem;
}
.switch-list .el-button.active {
  background-color: var(--strongText);
  color: var(--cardBg);
}

/* 排行榜item */
.popular-lite-list_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* min-height: 200px; */
  padding: 10px;
}
.popular-lite-list_item ._item-img {
  width: 20%;
  height: 100%;
  max-width: 40px;
  max-height: 80px;
  background-color: aliceblue;
}
.popular-lite-list_item ._item-title {
  color: var(--secondText);
  padding-bottom: 24px;
  display: block;
}

.popular-lite-list_item ._item-praise {
  text-align: center;
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.popular-lite-list_item ._item-userinfo {
  color: var(--notImportantText);
  display: flex;
  align-items: center;
  justify-content: left;
}
.popular-lite-list_item ._item-avatar {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin-right: 15px;
}
</style>