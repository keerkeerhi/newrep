import {baseURL} from '../components/common/globaldata'
import vue from 'vue'
import axios from 'axios'
import {getParams} from '../components/common/Util'

// 查询市场列表 用来查询市场中的菠萝列表，包括类型、筛选、排序、分页等，目前仅支持类型中的所有，其余暂不支持。
const query_market = baseURL + 'query_market/'
// 查询菠萝 用来查询用户名下或者用户认证的菠萝列表，包括分页。
const query_pine_apple = baseURL + 'query_pine_apple/'
//查询菠萝详情
const pine_apple_detail = baseURL + 'pine_apple_detail/'

export default {
  query_market(params) {
    return new Promise((resolve, reject) => {
      axios.get(query_market + getParams(params)).then(res => {
        resolve(res.data)
      })
    })
  },
  query_pine_apple(params) {
    return new Promise((resolve, reject) => {
      axios.get(query_pine_apple + getParams(params)).then(res => {
        resolve(res.data)
      })
    })
  },
  pine_apple_detail(params) {
    return new Promise((resolve, reject) => {
      axios.get(pine_apple_detail + getParams(params)).then(res => {
        resolve(res.data)
      })
    })
  }
}
