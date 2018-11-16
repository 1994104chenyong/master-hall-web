import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Dictionaries from './views/Dictionaries/dictionaries.vue'
import User from './views/User/user.vue'
import CommodityType from './views/CommodityType/CommodityType.vue'
import Commodity from './views/Commodity/commodity.vue'
import Ordermastertable from './views/Ordermastertable/ordermastertable.vue'
import Ordergoods from './views/Ordergoods/ordergoods.vue'
import ShoppingCart from './views/ShoppingCart/shoppingcart.vue'
import Pictureuploading from './views/Pictureuploading/pictureuploading.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
//  //{ path: '/main', component: Main },
    {
        path: '/',
	    redirect: '/Dictionaries',
        component: Home,
        name: '',
        iconCls: 'el-icon-message',//图标样式class
        leaf: true,
        children: [
            { path: '/Dictionaries', component: Dictionaries, name: '字典管理', hidden: true },
//          { path: '/table', component: Table, name: 'Table' },
//          { path: '/form', component: Form, name: 'Form' },
//          { path: '/user', component: user, name: '列表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-id-card-o',
        leaf: true,
        children: [
            { path: '/User', component: User, name: '用户管理' },
//          { path: '/page5', component: Page5, name: '页面5' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/CommodityType', component: CommodityType, name: '商品类型管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/Commodity', component: Commodity, name: '商品管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/Ordermastertable', component: Ordermastertable, name: '订单主表管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/Ordergoods', component: Ordergoods, name: '订单商品表管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/ShoppingCart', component: ShoppingCart, name: '购物车管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '图片上传',
        iconCls: 'fa fa-bar-chart',
        leaf: true,
        children: [
            { path: '/Pictureuploading', component: Pictureuploading, name: '图片上传' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;