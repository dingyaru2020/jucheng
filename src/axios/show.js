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
    },
    //立即购买弹出框/Schedule/Schedule/getScheduleTicket?schedular_id=116291
    reqTicketList(schedularId){
        return axios.get(`/api/Schedule/Schedule/getScheduleTicket?schedular_id=${schedularId}`)
    },
    //获取订单确认页信息  /shop/Checkout/checkoutOrder?timestamp=1602247528&version=6.1.1&referer=2
    reqConfirmInfo(data){
        return axios({
            url:'/api/shop/Checkout/checkoutOrder',
            method:'POST',
            data,
            transformRequest: [function (data) {
                let ret = ''
                for (let it in data) {
                 ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                return ret
                }],
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
                }
        })
    }
}