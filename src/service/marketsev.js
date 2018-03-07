import {baseURL} from '../components/common/globaldata'
import vue from 'vue'

const getSignatures = baseURL + 'getSignatures'
export default {
  getList (params) {
    vue.$http.post(getSignatures, params).then(res => {})
  }
}
