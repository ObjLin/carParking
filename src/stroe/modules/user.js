import Api from '../../commons/api/api'
const state = {
  user: {
    //是否登录
    isLogin: false,
    id: 1,
    //手机号
    phone: '13668042551',
    openid: '',
    //车辆
    carNumbers: ['川ZZZZZZ', '京LR8251', '川A12356'],
    //机构ID
    agencyId: '',
    //账户余额
    balance: 0
  }
}

const getters = {
  user: state => {
    if (state.user.id) return state.user
    else {
      //let jsonString = sessionStorage.getItem('sys_user')
      //state.user = JSON.parse(jsonString == null ? {} : jsonString)
      return state.user
    }
  }
}

const mutations = {
  setUserInfo(state, user) {
    state.user = user
    sessionStorage.setItem('sys_user', JSON.stringify(user))
  }
}
const actions = {
  getUserInfo({ commit }) {
    return new Promise((reslove, reject) => {
      Api.CallService('User', 'GetUserInfoByToken', {}, u => {
        if (u.code === 0 && u.status === 200) {
          commit('setUserInfo', {
            id: u.content.UserInfo.Id,
            clientId: u.content.UserInfo.ClientId,
            realName: u.content.UserInfo.RealName,
            avatar: u.content.UserInfo.Avatar,
            department: {
              id:
                u.content.UserInfo.Department &&
                u.content.UserInfo.Department.Id,
              name:
                u.content.UserInfo.Department &&
                u.content.UserInfo.Department.Name
            }
          })
          reslove(true)
        } else {
          reject(u.message)
        }
      })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
