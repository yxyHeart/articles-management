import { makeAutoObservable } from "mobx"
import {http,setToken,getToken,removeToken} from '@/utils/index'

class LoginStore {
    token = getToken() || ''
    constructor(){
        makeAutoObservable(this)
    }
    getToken = async({mobile,code})=>{
        const res = await http.post('/token',{
            mobile,
            code
        })
        this.token = res.data.token
        // console.log(this.token)
        setToken(this.token)
    }
    
    loginOut = ()=>{
        this.token = ''
        removeToken()
    }
}
export default LoginStore