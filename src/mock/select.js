const Select = {
  // 对接方式
  searchType: [
    {id: '0', message: 'api'},
    {id: '1', message: 'web'}
  ],
  // 平台
  plats: [
    {id: '0', message: 'IOS'},
    {id: '1', message: 'Android'},
    {id: '2', message: 'Web'},
    {id: '3', message: '线下'}
  ],
  // 场景
  scenes: [
    {id: '0', message: '借款'},
    {id: '1', message: '注册'},
    {id: '2', message: '登录'},
    {id: '3', message: '提现'}
  ],
  // 业务类型
  businessType: [
    {id: '0', message: '线上现金分期'},
    {id: '1', message: '线下现金分期'},
    {id: '2', message: '线下消费分期'},
    {id: '3', message: '信用卡(类信用卡)'},
    {id: '4', message: '线上小额现金贷'},
    {id: '5', message: '汽车金融'},
    {id: '6', message: '线上消费分期'}
  ],
  // 是否部码
  isPlatCodes: [
    {id: '0', message: '其他'},
    {id: '1', message: '部码'},
    {id: '2', message: '不部码'}
  ],
  // 客户信息
  cusInfo: {
    apiCode: '3004111',
    apiLogin: 'syxfStr',
    webLogin: 'syxfStr',
    webStatus: '开通成功',
    accountType: '测试',
    isMultiApply: '不计入',
    useTime: '2020-01-10--2020-04-09',
    searchType: 'api',
    plat: 'Web',
    scenes: '借款, 登录',
    isPlatCode: '不部码',
    isOutDataProduct: '是',
    isDesecnsitization: '是',
    businessType: '线上现金分期, 线下现金分期',
    isPermission: '是',
    isKey: '是',
    requestCode: '不处理',
    responseCode: '不处理',
    encryptKey: '',
    decryptKey: '',
    clientVersion: 'v3.6.1',
    sdkVersion: 'v4.0.1',
    swiftNVersion: 'v2.0',
    other: '没有其他'
  }
}

export default Select
