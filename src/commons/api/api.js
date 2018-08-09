import HttpClient from '../http/http'
import Config from '../config/config'
export default class Api {
  /**
   * 发起服务请求
   *
   * @static
   * @param {*} serviceType 服务类型 parking-停车场 basic-基础组
   * @param {*} service 服务名称
   * @param {*} action 方法名称
   * @param {*} params 参数
   * @param {*} callback 回调
   * @param {*} loading
   * @param {*} progress
   * @memberof Api
   */
  static CallService(
    serviceType,
    service,
    action,
    params,
    callback,
    loading,
    progress
  ) {
    // if (v.$store.getters.user.isLogin) {
    //   params['phone'] = v.$store.getters.user.phone
    // }
    var url = Config.createApiPostUrl(serviceType, service, action)
    HttpClient.Post(url, params, callback, loading, progress)
  }
}
