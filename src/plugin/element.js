// 安装完elemen-ui 要在这里导入要使用的组件，然后还要带main.js中去该文件
import Vue from 'vue'
// import {Button} from 'element-ui'
// import {Form,FormItem} from 'element-ui'
// import {Input} from 'element-ui'
//优化
//Message没有使用
import { Button,Form,FormItem,Input,Container,Header,Main,Aside,Menu,Submenu,MenuItemGroup,MenuItem} from 'element-ui'

Vue.use(Form)
Vue.use(Button)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Submenu)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
// Vue.setprototype.$Message=Message
