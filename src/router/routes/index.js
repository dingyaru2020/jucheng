const Home = () => import("../../../src/views/Home");
// const Theater = () => import('@/views/Theater/swiperdome.vue')
// 剧院
const Theater = () => import("@/views/Theater/index.vue");
// 剧院详情
const Detail = () => import("@/views/Detail/index.vue");
// 欢聚橙卡
const Card = () => import("@/views/Card/index.vue");
// 橙PLUS卡
const PLUS = () => import("@/views/Plus/index.vue");
// 魔女
const Witch = () => import("@/views/Witch/index.vue");
// plus+专区
const VIP = () => import("@/views/VIP/index.vue");
// 闪购
// 未做
const Ticket = () => import("@/views/Ticket/index.vue");
const Person = () => import("@/views/Person/index.vue");
//演出列表页
const ShowList = () => import("@/views/ShowList/index.vue");
//演出详情页
const ShowInfo = () => import("@/views/ShowInfo/index.vue")
//订单确认页
const OrderConfirm = () => import("@/views/OrderConfirm/index.vue");
const Login = () => import("../../views/Login/index.vue");
export default [
    {
        path:"/",
        component:Home,
        meta: {
          title: "Home",
          show: true,
        }
    },
    // 欢聚橙卡
    
    {
        path:"/card",
        component:Card
    },
    // 橙PLUS卡
    {
        path:"/plus",
        component:PLUS
    },
    // 魔女
    {
        path:"/witch",
        component:Witch
    },
    // plus+专区
    {
        path:"/vip",
        component:VIP
    },
    // 剧院
    {
        path:"/theater",
        component:Theater,
        meta: {
          title: "Home",
          show: true,
        }
        // children: [
        //     { path: 'detail', component: Detail }
        // ]
    },
    {
        path:"/ticket",
        component:Ticket,
        meta: {
          title: "Home",
          show: true,
        }
    },
    {
        path:"/person",
        component:Person,
        meta: {
          title: "Home",
          show: true,
        }
    },
    {
        path:"/showlist",
        component:ShowList
    },
    {
        path:"/showinfo",
        component:ShowInfo
    },
    {
        path:"/orderconfirm",
        component:OrderConfirm
    },
    { path: '/detail', component: Detail },
    { path: '/login', component: Login }
]

