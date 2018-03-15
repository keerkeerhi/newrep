import {baseURL} from '../components/common/globaldata'
import {getParams} from '../components/common/Util'
import vue from 'vue'
import axios from 'axios'

// 创建用户
const create_user = baseURL + 'create_user/'
// 查询用户基本信息
const user_info = baseURL + 'user_info/'
export default {
  create_user (params) {
    return new Promise((resolve,reject)=>{
      axios.post(create_user, params).then(res => {
        resolve(res.data)
      })
    })
  },
  user_info (params) {
    return  new Promise((resolve,reject)=>{
      axios.get(user_info + getParams(params)).then(res => {
        resolve(res.data)
      })
    })
  }
}
