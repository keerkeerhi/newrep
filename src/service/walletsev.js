import {baseURL} from '../components/common/globaldata'
import vue from 'vue'
import axios from 'axios'

// 记录购买事件 当用户触发购买事件，并且成功以后，请回调此接口，记录购买事件。
const sale_record = baseURL + 'sale_record/'
export default {
  sale_record (params) {
    return  new Promise((resolve,reject)=>{
      axios.post(sale_record, params).then(res => {
        resolve(res.data)
      })
    })
  }
}
