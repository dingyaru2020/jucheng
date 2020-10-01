const Home = () => import('../../../src/views/Home')
const Theater = () => import('@/views/Theater/swiperdome.vue')
// const Theater = () => import('@/views/Theater/index.vue')
const Ticket = () => import('@/views/Ticket/index.vue')
const Person = () => import('@/views/Person/index.vue')

export default [
    {
        path:"/",
        component:Home
    },
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
    }
]