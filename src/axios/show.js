import axios from "./axios"
export default{
    //请求分类标签
    reqCategoryList(){
        return axios.get("/api/Show/Index/getShowCategoryList")
    },
    //请求分类标签下演出列表
    reqShowList(categoryId){
        return axios.get(`/api/Show/Search/getShowList?city_id=0&category=${categoryId}`)
    },
    //请求右侧城市列表   /city/city/getCityList?version=6.1.1&referer=2
    reqCityList(){
        return axios.get('/api/city/city/getCityList')
    },
    //请求演出详情   /Schedule/Schedule/getScheduleInfo?schedular_id=111475&version=6.1.1&referer=2
    reqShowInfo(schedularId){
        return axios.get(`/api/Schedule/Schedule/getScheduleInfo?schedular_id=${schedularId}`)
    }
}