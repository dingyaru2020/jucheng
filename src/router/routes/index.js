
const Home = () => import('../../../src/views/Home')
// const Theater = () => import('@/views/Theater/swiperdome.vue')
// 剧院
const Theater = () => import('@/views/Theater/index.vue')
// 欢聚橙卡
const Card = () => import('@/views/Card/index.vue')
// 橙PLUS卡
const PLUS = () => import('@/views/Card/index.vue')
// 魔女
const Witch = () => import('@/views/Card/index.vue')
// plus+专区
const VIP = () => import('@/views/Card/index.vue')
// 闪购
// 未做
const Ticket = () => import('@/views/Ticket/index.vue')
const Person = () => import('@/views/Person/index.vue')
//演出列表页
const ShowList = () => import("@/views/ShowList/index.vue")
//演出详情页
const ShowInfo = () => import("@/views/ShowInfo/index.vue")
const test = () => import("@/views/test/index.vue")
//订单确认页
const OrderConfirm = () => import("@/views/OrderConfirm/index.vue")
export default [
    {
        path:"/",
        component:Home
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
        component:Theater
    },
    {
        path:"/ticket",
        component:Ticket
    },
    {
        path:"/person",
        component:Person
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
    {
        path:"/test",
        component:test
    }
]