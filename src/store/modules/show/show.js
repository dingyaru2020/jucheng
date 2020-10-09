import {
    GET_CATEGORY_LIST,
    GET_SHOW_LIST,
    GET_CITY_LIST,
    GET_SHOW_INFO,
    GET_TICKET_LIST
} from "../../mutationTypes"
import * as axios from "@/axios"
// console.log("-----",axios)
const state={
    categoryList:[],
    showList:[],
    cityList:[],
    showInfo:{
        item_list:[],
        share_data:{share_title:""},
        static_data:{
            city:{},
            venue:{},
            tips:{},
            show_desc:{},
            show_time_data:{}
        }
    },
    ticketList:[]
}
const mutations={
    [GET_CATEGORY_LIST](state,data){
        state.categoryList = data
    },
    [GET_SHOW_LIST](state,data){
        state.showList = data
    },
    [GET_CITY_LIST](state,data){
        state.cityList = data
    },
    [GET_SHOW_INFO](state,data){
        state.showInfo = data
    },
    [GET_TICKET_LIST](state,data){
        state.ticketList = data
    },
}
const actions={
    async getCategoryList({commit}){
        const {data} = await axios.show.reqCategoryList()
        // console.log(data)
        // const categoryList = [{id:00,name:"全部"},...data]
        commit(GET_CATEGORY_LIST,data)
    },
    async getShowList({commit},categoryId){
        const {data:{list}} = await axios.show.reqShowList(categoryId)
        // console.log(res)
        commit(GET_SHOW_LIST,list)
    },
    async getCityList({commit}){
        const {data:{city_list}} = await axios.show.reqCityList()
        commit(GET_CITY_LIST,city_list)
    },
    
    async getShowInfo({commit},id){
        const {data} = await axios.show.reqShowInfo(id)
        commit(GET_SHOW_INFO,data)
    },
    async getTicketList({commit},id){
        const {data:{list}} = await axios.show.reqTicketList(id)
        commit(GET_TICKET_LIST,list)
    }
}
const getters={
    categoryList(state){
        const arr=[{id:0,name:"全部"},...state.categoryList]
        return arr
    },
    cityList(state){
        const citys = [{id:0,name:"全国"},...state.cityList]
        return citys
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}