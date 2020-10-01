import axios from "./axios"
export default{
    reqCategoryList(){
        return axios.get("/api/Show/Index/getShowCategoryList")
    }
}