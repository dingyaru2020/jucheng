import {GET_CATEGORY_LIST} from "../../mutationTypes"
import * as axios from "@/axios"
// console.log("-----",axios)
const state={
    categoryList:[]
}
const mutations={
    [GET_CATEGORY_LIST](state,data){
        state.categoryList = data
    }
}
const actions={
    async getCategoryList({commit}){
        const {data} = await axios.show.reqCategoryList()
        // console.log(data)
    }
}
const getters={}
export default {
    state,
    mutations,
    actions,
    getters
}