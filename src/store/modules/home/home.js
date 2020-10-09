import axios from "../../../axios/axios1";
import {
  GET_LIST,
  GET_DISCOUNT_LIST,
  GET_SHOW_SWIPER_LIST,
  GET_HOT_SHOW_LIST
} from "../../mutationTypes";

const state = {
  list: {
    bottom_list: [],
    classify_list: [],
    slide_list: []
  },
  discountList: [],
  showSwiperList: [],
  hotShowList: []
};

const mutations = {
  [GET_LIST](state, data) {
    state.list.bottom_list = data.bottom_list;
    state.list.classify_list = data.classify_list;
    state.list.slide_list = data.slide_list;
  },
  [GET_DISCOUNT_LIST](state, data) {
    state.discountList = data;
  },
  [GET_SHOW_SWIPER_LIST](state, data) {
    state.showSwiperList = data;
  },
  [GET_HOT_SHOW_LIST](state, data) {
    state.hotShowList = data;
  }
};

const actions = {
  async getList({ commit }) {
    const result = await axios.get(
      "https://api.juooo.com/home/index/getClassifyHome"
    );
    commit(GET_LIST, result.data);
  },
  async getDiscountList({ commit }) {
    const result = await axios.get(
      "https://api.juooo.com/vip/index/getVipHomeSchedular?city_id=0&version=6.1.1&referer=2"
    );
    commit(GET_DISCOUNT_LIST, result.data.discountList);
  },
  async getShowSwiperList({ commit }) {
    const result = await axios.get(
      "https://api.juooo.com/show/tour/getList?version=6.1.1&referer=2"
    );
    commit(GET_SHOW_SWIPER_LIST, result.data.list);
  },
  async getHotShowList({ commit }) {
    const result = await axios.get(
      "https://api.juooo.com/home/index/getHotsRecommendList?city_id=0&version=6.1.1&referer=2"
    );
    commit(GET_HOT_SHOW_LIST,result.data.hots_show_list)
  }
};

const getters = {};
export default {
  state,
  mutations,
  actions,
  getters
};
