import {GET_CATEGORY_LIST,GET_SHOW_LIST,GET_CITY_LIST} from "../../mutationTypes"
import * as axios from "@/axios"
// console.log("-----",axios)
const state={
    categoryList:[],
    showList:[],
    cityList:[]
    // categoryId:0
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
    }
}
const actions={
    async getCategoryList({commit}){
        const {data} = await axios.show.reqCategoryList()
        console.log(data)
        commit(GET_CATEGORY_LIST,data)
    },
    async getShowList({commit},categoryId){
        const res = await axios.show.reqShowList(categoryId)
        console.log(res)
        // commit(GET_SHOW_LIST,data)
    },
    async getCityList({commit}){
        const res = await axios.show.reqCityList()
        console.log(res)
        // commit(GET_CITY_LIST,data)
    },
}
const getters={}
export default {
    state,
    mutations,
    actions,
    getters
}