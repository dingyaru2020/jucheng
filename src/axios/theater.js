import axios from "./axios"
export default{
    //获取办理新卡中新卡列表
    getCardGroupList(version,referer) {
        return axios.get(`/api/Card/index/getCardGroupList?version=${version}&referer=${referer}`)
    },
    // 获取轮播图片
    // https://api.juooo.com/Card/index/hotBanner?version=6.1.1&referer=2
    getHotBanner(version,referer){
        return axios.get(`/api/Card/index/hotBanner?version=${version}&referer=${referer}`)
    },
    // 获取vip+
    // https://api.juooo.com/vip/index/getVipRule?version=6.1.1&referer=2
    getVipRule(version,referer){
        return axios.get(`/api/vip/index/getVipRule?version=${version}&referer=${referer}`)
    },
    // 魔女
    // https://api.juooo.com/show/tour/getInfo?id=3&version=6.1.1&referer=2
    getInfo(id,version,referer){
        return axios.get(`/api/show/tour/getInfo?id=${id}&${version}&referer=${referer}`)
    },
    // vip+会员
// 获取vip会员中折扣信息
    // https://api.juooo.com/vip/index/getDiscountList?page=1&limit=10&version=6.1.1&referer=2
    getDiscountList(page,limit,version,referer){
        return axios.get(`/api/vip/index/getDiscountList?page=${page}&limit=${limit}&${version}&referer=${referer}`)
    },
    // 获取会员十大权益
    // https://api.juooo.com/vip/index/getVipRule?vip_rule_id=1&type=0&version=6.1.1&referer=2
    getVipRuleID(vip_rule_id,type,version,referer){
        return axios.get(`/api/vip/index/getVipRule?vip_rule_id=${vip_rule_id}&type=${type}&${version}&referer=${referer}`)
    },
    // 剧院详情
    // 剧院地址信息
    // https://api.juooo.com/theatre/index/getTheatreInfo?theatre_id=2&longitude=&latitude=&version=6.1.1&referer=2
    // getTheatreInfo(theatre_id,version,referer){
    getTheatreInfo(theatre_id,version,referer){
        return axios.get(`/api/theatre/index/getTheatreInfo?theatre_id=${theatre_id}&longitude=&latitude=&version=${version}&referer=${referer}`)
    },
    // 剧院列表信息
    // https://api.juooo.com/Show/Search/getShowList?page=1&venue_id=1078,1079,1795&time=1602038108501&version=6.1.1&referer=2&sign=eea8d1c956abcf5a517ed73f47c0984f
    // getShowList(page,venue_id,time,version,referer,sign){
    getShowList(){
        return axios.get(`/api/Show/Search/getShowList?page=1&venue_id=1078,1079,1795&time=1602038108501&version=6.1.1&referer=2&sign=eea8d1c956abcf5a517ed73f47c0984f`)
    }
}