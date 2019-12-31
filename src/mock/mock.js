import Mock from 'mockjs'

// mock模拟数据
const random = Mock.Random

// mock一组数据
const userInfoData = function () {
  let person = [
    {
      name: random.cname(),
      id: random.id(),
      email: random.email()
    }
  ]
  return {
    person: person
  }
}
var person = {
  'name': 'abc'
}

Mock.mock('/user/person', 'post', person)
Mock.mock('/user/index', 'post', userInfoData)

// tps假数据
var tpsData = {
  'data|100': [
    {
      'apicode|3002000-3002999': 1,
      'tps|1': [200, 250],
      'name': 'abc',
      'id|101-199': 1
    }
  ]
}
Mock.mock('/user/tps', 'post', tpsData)

// 自定义报告假数据
var zdyData = {
  'data|100': [
    {
      'apicode|3004000-3004999': 1,
      'productid|1': ['ScoreCust', 'ScoreCust1', 'ScoreCust2'],
      'code|1': ['scoregraylist', 'scorecashonpptopup', 'scorecashonppreloan'],
      'createDate': '2019-01-02 13:10'
    }
  ]
}
Mock.mock('/user/zdy', 'post', zdyData)

// 工单信息假数据
var orderData = {
  'data|100': [
    {
      'comId|1-100': 1,
      'customerName': '安徽省花生金融信息服务有限公司',
      'comShortName': '花生金融',
      'apiCode|3002000-3002999': 1,
      'crmNumber|302-399': 1,
      'createTime': '2019-01-01 15:10:22',
      'modifyTime': '2019-10-11 09:22:34',
      'accountType|1': [0, 1],
      'productType|1': ['画像', '企业征信', '策略引擎', '保险'],
      'deliveryStatus|1': [0, 1, 2, 3, 4, 5],
      'applicationName': '交付人员'
    }
  ]
}
Mock.mock('/user/orderlist', 'post', orderData)

// 新增自定义报告假数据
var newZdyData = {
  'data|40': [
    {
      'index|1-40': 1,
      'productName': '反欺诈风险识别-汽车金融',
      'productCode': 'scoreafautofin',
      'version': 'S5.0',
      'serverName': 'SCORE_SERVICE'
    }
  ]
}
Mock.mock('/user/newzdysc', 'post', newZdyData)

var newZdyDataaf = {
  'data|38': [
    {
      'index|1-40': 1,
      'productName': '反欺诈风险识别-ScoreAfCust',
      'productCode': 'scoreAfCust',
      'version': 'S2.1',
      'serverName': 'SCORE_SERVICE'
    }
  ]
}
Mock.mock('/user/newzdysafc', 'post', newZdyDataaf)

// 客户管理假数据
var customerData = {
  'data|100': [
    {
      'comId|1-100': 1,
      'comName|1': ['南京领行科技股份有限公司', '湖北盘荣恒益商务咨询有限公司', '深圳市小葱资本管理有限公司'],
      'comShortName|1': ['汇成汇通', 'T3出行', '盘荣恒益'],
      'comLevel|1': [1, 2, 3, 4],
      'comFirstCategory|1': [1, 2, 3, 4, 5, 6],
      'comType|1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      'mainBusinessType|1': ['线下消费分期', '其他', '信用卡(类信用卡)'],
      'area|1': ['华北', '华南', '华中', '西北', '西南', '保险']
    }
  ]
}
Mock.mock('/user/customer', 'post', customerData);

// 贷前造假数据
var beforecomData = {
  'data|100': [
    {
      'comID|1-100': 1,
      'comName|1': ['南京领行科技股份有限公司', '湖北盘荣恒益商务咨询有限公司', '深圳市小葱资本管理有限公司'],
      'comShortName|1': ['汇成汇通', 'T3出行', '盘荣恒益'],
      'apiCode|3004000-3004999': 1,
      'loginName': 'abcStr',
      'accountType|1': [0, 1],
      'accountStatus|1': [0, 1],
      'isMultipleApply|1': [true, false],
      'isKey|1': [true, false],
      'createTime': '2019-10-21'
    }
  ]
}
Mock.mock('/user/beforecomData', 'post', beforecomData);

// 贷前产品配置造假数据
var beforePData = {
  'data|100': [
    {
      'comID|1-100': 1,
      'comName|1': ['南京领行科技股份有限公司', '湖北盘荣恒益商务咨询有限公司', '深圳市小葱资本管理有限公司'],
      'comShortName|1': ['汇成汇通', 'T3出行', '盘荣恒益'],
      'accountType|1': [0, 1],
      'apiCode|3005000-3005999': 1,
      'productType|1': ['失信历史,可疑行为', '失信历史', '可疑行为,失信历史,反欺诈风险识别,信用风险识别'],
      'productCode|1': ['Rule_D_DebtRepayStress', 'RuleSpecialList_c,RuleApplyLoan', 'RuleSpecialList_c'],
      'productName|1': ['反欺诈规则-特殊名单验证']
    }
  ]
}
Mock.mock('/user/beforeproduct', 'post', beforePData)