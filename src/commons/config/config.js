const config = {
  parkingService: 'https://parkingtest2.yun-kai.com/api', //服务地址
  basicService: ''
}
export default {
  getService() {
    return config.service
  },
  createApiPostUrl(serviceType, serviceName, apiName) {
    return (
      (serviceType === 'parking'
        ? config.parkingService
        : config.basicService) +
      '/' +
      serviceName +
      '/' +
      apiName
    )
  },
  config
}
