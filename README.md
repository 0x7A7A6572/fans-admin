## 说明
设计图来源：
zcool xly小懒猪
https://www.zcool.com.cn/work/ZNTg3MTg1NjQ=.htm

目的主要是练习数据可视化

### 架构
- vite3.1 
- echarts: "^5.4.0"
- element-plus : "^2.2.17"
- vue : "^3.2.37"
- vue-router : "^4.1.5"
- vuex : "^4.0.2"

## 项目结构(src)
├─assets (静态资源目录)
├─components (全局自定义组件)
│  ├─DataContrast.vue      >数据对比组件
│  ├─LeftMenu              >侧边菜单栏
│  ├─NavAdmin              >顶部导航栏
├─pages      (页面)
│  ├─assets       (达人粉丝与资产)
│  ├─channel      (品牌流量渠道)
│  │  ├─optimization   -渠道评估优化页面
│  │  └─overview       -渠道成长概览页面
│  └─index        (主页) 
│      ├─businessFlowInsight  -商业流量洞察模块
│      ├─components            -页面自定义组件
│      ├─exposureData         -曝光数据模块
│      ├─flowChannel          -品牌流量渠道模块
│      └─trafficInsight       -品牌流量洞察模块
└─router         (vue路由配置文件)
