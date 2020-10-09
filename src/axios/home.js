import axios from "axios";
import qs from "qs"; //用于登录界面传递参数formdata形式

const instance = axios.create({
  baseURL: "",
  timeout: 10000,
  //？？？？？
  transformRequest: [
    function(data) {
      return qs.stringify(data);
    }
  ]
});
instance.interceptors.request.use(config => {
  const authorization = localStorage.getItem("token");
  if (authorization) {
    config.headers["AUTHORIZATION"] = authorization;
  }
  return config;
});
instance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);
export default instance;
