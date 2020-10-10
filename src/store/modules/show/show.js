import {
    GET_CATEGORY_LIST,
    GET_SHOW_LIST,
    GET_CITY_LIST,
    GET_SHOW_INFO,
    GET_TICKET_LIST,
    CHANGE_ACTIVE_DATE_INDEX,
    CHANGE_CONFIRM_INFO
} from "../../mutationTypes"
import * as axios from "@/axios"
// console.log("-----",axios)
const state={
    categoryList:[],
    showList:[],
    cityList:[],
    showInfo:{
        item_list:[{}],
        share_data:{share_title:""},
        static_data:{
            city:{},
            venue:{},
            tips:{},
            show_desc:{},
            show_time_data:{},
            support:{list:[]}
        }
    },
    ticketList:[],
    activeDateIndex:0,
    confirmInfo:{}
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
    [CHANGE_ACTIVE_DATE_INDEX](state,data){
        state.activeDateIndex = data
    },
    [CHANGE_CONFIRM_INFO](state,data){
        state.confirmInfo = data
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
    },
    async getConfirmInfo({commit},postData){
        const {data}= await axios.show.reqConfirmInfo(postData)
        commit(CHANGE_CONFIRM_INFO,data)
    },
}
const getters={
    categoryList(state){
        const arr=[{id:0,name:"全部"},...state.categoryList]
        return arr
    },
    cityList(state){
        const citys = [{id:0,name:"全国"},...state.cityList]
        return citys
    },
    dateList(state){
        const list = state.showInfo.item_list
        const list2 = []
        list.forEach((item)=>{
            if(!list2.includes(item.project_time)){
                list2.push(item.project_time)
            }
        })
        return list2
    },
    timeList(state,getters){
        const {activeDateIndex,showInfo:{item_list}}=state
        const {dateList} = getters
        let activeProjectTime = dateList[activeDateIndex]
        const arr=item_list.filter(item=>item.project_time===activeProjectTime&&(item.session_time!==''))
        // console.log(arr)
        return arr===undefined?[]:arr
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}





