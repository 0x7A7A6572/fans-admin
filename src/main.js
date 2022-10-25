import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router';

import DataContrast from "./components/DataContrast.vue";

import {
  ElAffix,
  ElPageHeader,
  ElTag,
  ElAvatar,
  ElButton,
  ElCol,
  ElRow
} from "element-plus";

const app = createApp(App);
/* 全局组件 */
app.component("elAffix", ElAffix)
  .component("elPageHeader", ElPageHeader)
  .component("ElTag", ElTag)
  .component("ElAvatar", ElAvatar)
  .component("ElButton", ElButton)
  .component("ElCol", ElCol)
  .component("ElRow", ElRow)

  .component("DataContrast",DataContrast);
app.use(ElementPlus);
/* 导入图标 */
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}


/* 导入路由 */
app.use(router);
app.mount('#app');
