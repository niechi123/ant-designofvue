import Vue from 'vue';
import {Button, Col, Row} from 'ant-design-vue/lib';
import 'ant-design-vue/dist/antd.css';

import '@/assets/css/main.css';
import App from './App';

Vue.component(Button.name, Button);
Vue.component(Col.name, Col);
Vue.component(Row.name, Row);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');