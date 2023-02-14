import LoginStore from './login.Store';
import React from 'react';
import UserStore from './user.Store';
import ChannelStore from './channel.Store';
import '@/mock/index'
class RootStore{
    constructor(){
        this.loginStore = new LoginStore()
        this.userStore = new UserStore()
        this.channelStore = new ChannelStore()
    }
}

const context = React.createContext(new RootStore())
const useStore = () => React.useContext(context)
export {useStore}

