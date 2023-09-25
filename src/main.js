import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import './my-theme/index.scss';
import { Collapse } from 'vue-collapsed'

const app = createApp(App);

// 使用插件
app.use(store);
app.use(router);
app.use(ViewUIPlus);
app.use(ElementPlus);

// 注册全局组件
app.component('Collapse', Collapse);

// 挂载应用程序
app.mount('#app');
