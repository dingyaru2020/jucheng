import axios from "./axios"
export default{
    //获取办理新卡中新卡列表
    getCardGroupList(version,referer) {
        return axios.get(`/api/Card/index/getCardGroupList?version=${version}&referer=${referer}`)
    },
    // 获取轮播图片
    // https://api.juooo.com/Card/index/hotBanner?version=6.1.1&referer=2
    getHotBanner(version,referer){
        return axios.get(`/Card/index/hotBanner?version=${version}&referer=${referer}`)
    },
    // 获取vip+
    getVipRule(version,referer){
        return axios.get(`/Card/index/hotBanner?version=${version}&referer=${referer}`)
    },
    // https://api.juooo.com/vip/index/getVipRule?version=6.1.1&referer=2
    // 魔女
    // https://api.juooo.com/show/tour/getInfo?id=3&version=6.1.1&referer=2
    getInfo(id,version,referer){
        return axios.get(`/show/tour/getInfo?id=${id}&${version}&referer=${referer}`)
    },
    // vip+会员

    // https://api.juooo.com/vip/index/getDiscountList?page=1&limit=10&version=6.1.1&referer=2
    getDiscountList(page,limit,version,referer){
        return axios.get(`/vip/index/getDiscountList?page=${page}&limit=${limit}&${version}&referer=${referer}`)
    },
    // https://api.juooo.com/vip/index/getVipRule?vip_rule_id=1&type=0&version=6.1.1&referer=2
    getVipRule(vip_rule_id,type,version,referer){
        return axios.get(`vip/index/getVipRule?vip_rule_id=${vip_rule_id}&type=${type}&${version}&referer=${referer}`)
    }
}