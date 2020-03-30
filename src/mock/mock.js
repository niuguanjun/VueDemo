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

// 贷前新增产品造假数据
var beforeproductData = {
  'data': [
    {
      name: '数据产品',
      tableData: [
        {
          'name': '基础数据产品',
          'productList|20': [
            {
              'productName|1': ['Execution', 'Rule_D_DebtRepayStress', 'scoreafrevoloan'],
              'productChineseName|1': ['法院被执行人-个人版', '反欺诈规则-偿债压力指数', '反欺诈风险识别-信用卡（类信用卡）'],
              'spreadStatus|1': [0, 1, 2, 3, 4],
              'crmStatus|1': [1, 2],
              'productTypeCode': 'B101'
            }
          ]
        },
        {
          'name': '设备反欺诈数据',
          'productList|20': [
            {
              'productName|1': ['Execution', 'Rule_D_DebtRepayStress', 'scoreafrevoloan'],
              'productChineseName|1': ['法院被执行人-个人版', '反欺诈规则-偿债压力指数', '反欺诈风险识别-信用卡（类信用卡）'],
              'spreadStatus|1': [0, 1, 2, 3, 4],
              'crmStatus|1': [1, 2],
              'productTypeCode': 'B103'
            }
          ]
        },
        {
          'name': '评分数据产品',
          'productList|10': [
            {
              'productName|1': ['Execution', 'Rule_D_DebtRepayStress', 'scoreafrevoloan'],
              'productChineseName|1': ['法院被执行人-个人版', '反欺诈规则-偿债压力指数', '反欺诈风险识别-信用卡（类信用卡）'],
              'spreadStatus|1': [0, 1, 2, 3, 4],
              'crmStatus|1': [1, 2],
              'productTypeCode': 'B102'
            }
          ]
        }
      ]
    },
    {
      name: '规则',
      tableData: [
        {
          'name': '可疑行为',
          'productList|10': [
            {
              'productName|1': ['Rule_D_DEbtRepayStress', 'Rule_D_FraudRelation', 'Rule_D_TotalLoan'],
              'version|1': ['V1.0', 'V2.0', 'V3.0'],
              'productChineseName|1': ['反欺诈规则-偿债压力指数', '反欺诈规则-团伙欺诈排查(定制版)', '反欺诈规则-借贷行为验证'],
              'spreadStatus': [0, 1, 2, 3, 4],
              'crmStatus|1': [1, 2],
              'productTypeCode': 'B202'
            }
          ]
        },
        {
          'name': '失信历史',
          'productList|2': [
            {
              'productName|1': ['RuleBankCreditAssess', 'RuleSpecialList', 'RuleExcution'],
              'version|1': ['V1.0', 'V2.0', 'V3.0'],
              'productChineseName|1': ['反欺诈规则-征信报告解析', '反欺诈规则-特殊名单', '反欺诈规则-法院被执行人'],
              'spreadStatus|1': [0, 1, 2, 3, 4],
              'crmStatus|1': [1, 2],
              'productTypeCode': 'B201'
            }
          ]
        },
        {
          'name': '设备反欺诈规则',
          'productList|10': [
            {
              'productListName|1': ['Rule_D_EquipmentENV', 'Rule_D_EquipmentBehavior', 'RuleEquipmentAppBehavior'],
              'version|1': ['V1.0', 'V2.0', 'V3.0'],
              'productChineseName|1': ['设备反欺诈规则-环境风险', '设备反欺诈规则-行为画像', '设备反欺诈规则-应用偏好'],
              'spreadStatus|1': [0, 1, 2, 3, 4],
              'crmStatus|1': [1, 2],
              'productTypeCode': 'B206'
            }
          ]
        }
      ]
    },
    {
      name: '模型',
      tableData: [
        {
          'name': '信用风险识别',
          'productList|10': [
            {
              'productName|1': ['Rule_D_DEbtRepayStress', 'Rule_D_FraudRelation', 'Rule_D_TotalLoan'],
              'version|1': ['V1.0', 'V2.0', 'V3.0'],
              'productChineseName|1': ['反欺诈规则-偿债压力指数', '反欺诈规则-团伙欺诈排查(定制版)', '反欺诈规则-借贷行为验证'],
              'spreadStatus': [0, 1, 2, 3, 4],
              'crmStatus|1': [1, 2],
              'productTypeCode': 'B301'
            }
          ]
        },
        {
          'name': '反欺诈风险识别',
          'productList|20': [
            {
              'productName|1': ['Rule_D_DEbtRepayStress', 'Rule_D_FraudRelation', 'Rule_D_TotalLoan'],
              'version|1': ['V1.0', 'V2.0', 'V3.0'],
              'productChineseName|1': ['反欺诈规则-偿债压力指数', '反欺诈规则-团伙欺诈排查(定制版)', '反欺诈规则-借贷行为验证'],
              'spreadStatus': [0, 1, 2, 3, 4],
              'crmStatus|1': [1, 2],
              'productTypeCode': 'B302'
            }
          ]
        },
        {
          'name': '其他模型',
          'productList|3': [
            {
              'productName|1': ['Rule_D_DEbtRepayStress', 'Rule_D_FraudRelation', 'Rule_D_TotalLoan'],
              'version|1': ['V1.0', 'V2.0', 'V3.0'],
              'productChineseName|1': ['反欺诈规则-偿债压力指数', '反欺诈规则-团伙欺诈排查(定制版)', '反欺诈规则-借贷行为验证'],
              'spreadStatus': [0, 1, 2, 3, 4],
              'crmStatus|1': [1, 2],
              'productTypeCode': 'B307'
            }
          ]
        }
      ]
    }
  ]
}

Mock.mock('/user/beforeproductData', 'post', beforeproductData)

// 验证客户列表造假数据
var veriCusListData = {
  'data|80': [
    {
      'comID|1-100': 1,
      'comName|1': ['豆蕊米成都农业科技集团有限公司', '中之保金融科技（成都）有限公司', '一汽汽车金融有限公司', '江西华章汉辰担保集团股份有限公司'],
      'comShortName|1': ['豆蕊米', '中之保', '一汽金融', '汉辰金融'],
      'apiCode|3004000-3004199': 1,
      'loginName|1': ['douruimiStr', 'zzbjrApiStr', 'yqtestStr', 'hcjrStr'],
      'accountType|1': [0, 1],
      'accountStatus|1': [0, 1],
      'isKey|1': [0, 1],
      'module': '',
      'createData': '2019-12-12'
    }
  ]
}
Mock.mock('/user/verifiactioncuslist', 'post', veriCusListData)

// 验证客户产品配置造假数据
var veriProListData = {
  'data|80': [
    {
      'comID|1-100': 1,
      'comName|1': ['上海泰优汇典当有限公司', '武汉九度云科技有限公司', '厦门融盛世纪科技有限公司', '武汉中利融资担保有限公司'],
      'comShortName|1': ['泰优汇', '九度云', '融盛世纪', '中利担保'],
      'accountType|1': [0, 1],
      'apiCode|3005001-3005123': 1,
      'productCategory|1': ['可疑行为,基础数据产品,失信历史', '可疑行为,失信历史', '失信历史,可疑行为'],
      'productCode|1': 'Rule_C_TelPeriod,TelCheck_s,BizCourtDetail,Rule_C_TelStatus,TelPeriodPro,TelStatus,Rule_C_CourtDetail,BizExecution,BankThree,Rule_C_TelCheck_s,Rule_C_BizCourtDetail,CourtDetail',
      'productName|1': '信息验证规则-手机在网时长,手机三要素简版—移动联通电信,法院信息详情-企业版,信息验证规则-手机在网状态,手机在网时长高级版,手机在网状态-移动联通电信,信息验证规则-法院信息详情个人版,法院被执行人-企业版,银行卡三要素验证,信息验证规则-手机三要素简版_移动联通电信,信息验证规则-法院信息详情企业版,法院信息详情-个人版',
    }
  ]
}
Mock.mock('/user/verificationprolist', 'post', veriProListData)

// 验证产品配置造假数据
var verificationProductData = {
  'data': [
    {
      'name': '数据产品',
      'productLists|30': {
        'productName': '',
        'crmStatus': '',
        'spreadStatus': ''
      } 
    }
  ]
}
Mock.mock('/user/verificationProductData', 'post', verificationProductData)