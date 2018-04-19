/**
 * API接口
 */
import axios from 'axios';

// 默认请求路径
axios.defaults.baseURL = 'http://localhost:9000';

// 响应结果拦截器
axios.interceptors.response.use((res) => res.data);


/**
 * 获取标签列表，返回的是一个promise对象
 * @returns {AxiosPromise<any>}
 */
export const getTags = () => {
  return axios.get('/tags');
};

/**
 * 获取首页主题项列表，返回的是一个promise对象
 * @returns {AxiosPromise<any>}
 */
export const getHomeTopic = () => {
  return axios.get('/topic');
};

