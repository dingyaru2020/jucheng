const Home = () => import('../../../src/views/Home')
// const Theater = () => import('@/views/Theater/swiperdome.vue')
// 剧院
const Theater = () => import('@/views/Theater/index.vue')
// 剧院详情
const Detail = () => import('@/views/Detail/index.vue')
// 欢聚橙卡
const Card = () => import('@/views/Card/index.vue')
// 橙PLUS卡
const PLUS = () => import('@/views/Plus/index.vue')
// 魔女
const Witch = () => import('@/views/Witch/index.vue')
// plus+专区
const VIP = () => import('@/views/VIP/index.vue')
// 闪购
// 未做
const Ticket = () => import('@/views/Ticket/index.vue')
const Person = () => import('@/views/Person/index.vue')

const ShowList = () => import("@/views/ShowList/index.vue")

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
        component:Theater,
        children: [
            { path: 'detail', component: Detail }
        ]
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
    { path: '/detail', component: Detail }
    
]