var khData = {
  customerLevel: [
    {
      id: 0,
      text: '不限',
      isActive: true
    },
    {
      id: 1,
      text: '公司级重点客户',
      isActive: false
    },
    {
      id: 2,
      text: '区域级重点客户',
      isActive: false
    },
    {
      id: 3,
      text: '一般客户',
      isActive: false
    },
    {
      id: 4,
      text: 'SME客户',
      isActive: false
    }
  ],
  area: [
    {
      id: 0,
      text: '不限',
      isActive: true
    },
    {
      id: 1,
      text: '华北',
      isActive: false
    },
    {
      id: 2,
      text: '华中',
      isActive: false
    },
    {
      id: 3,
      text: '华东',
      isActive: false
    },
    {
      id: 4,
      text: '东北',
      isActive: false
    },
    {
      id: 5,
      text: '山东',
      isActive: false
    },
    {
      id: 6,
      text: '华南',
      isActive: false
    },
    {
      id: 7,
      text: '西北',
      isActive: false
    },
    {
      id: 8,
      text: '西南',
      isActive: false
    },
    {
      id: 9,
      text: '华东-营销',
      isActive: false
    },
    {
      id: 10,
      text: '报销',
      isActive: false
    },
    {
      id: 11,
      text: '数据部',
      isActive: false
    }
  ],
  customerCategory: [
    {
      id: 0,
      text: '不限',
      isActive: true
    },
    {
      id: 1,
      text: '传统银行',
      isActive: false
    },
    {
      id: 2,
      text: '网络零售银行',
      isActive: false
    },
    {
      id: 3,
      text: '消费金融',
      isActive: false
    },
    {
      id: 4,
      text: '小额贷款',
      isActive: false
    },
    {
      id: 5,
      text: '网络小贷',
      isActive: false
    },
    {
      id: 6,
      text: '汽车金融',
      isActive: false
    },
    {
      id: 7,
      text: '融资租赁',
      isActive: false
    },
    {
      id: 8,
      text: '保险',
      isActive: false
    },
    {
      id: 9,
      text: '信托',
      isActive: false
    },
    {
      id: 10,
      text: '其他持牌金融机构',
      isActive: false
    },
    {
      id: 11,
      text: '其他',
      isActive: false
    }
  ],
  cstFirstCate: [
    {
      id: 0,
      text: '不限',
      isActive: true
    },
    {
      id: 1,
      text: '银行',
      isActive: false
    },
    {
      id: 2,
      text: '非银',
      isActive: false
    },
    {
      id: 3,
      text: '催收客户',
      isActive: false
    },
    {
      id: 4,
      text: '内部客户',
      isActive: false
    },
    {
      id: 5,
      text: '保险用户',
      isActive: false
    },
    {
      id: 6,
      text: '其他',
      isActive: false
    }
  ]
}
var productList = [
  {
    productId: 1,
    productUrl: '规则',
    productCategory: '可疑行为',
    productName: '反欺诈规则-高风险借贷意向验证(Rule_D_ApplyLoanUsury)',
    productVersion: 'v2.0',
    productData: '高风险借贷意向验证(ApplyLoanUsury)',
    productType: '测试',
    totalNumber: 50,
    dayNumber: 50,
    other: ''
  },
  {
    productId: 2,
    productUrl: '规则',
    productCategory: '可疑行为',
    productName: '反欺诈规则-偿债压力指数(Rule_D_DebtRepayStress)',
    productVersion: 'v2.0',
    productData: '偿债压力指数(DebtRepayStress)',
    productType: '测试',
    totalNumber: 50,
    dayNumber: 50,
    other: ''
  },
  {
    productId: 3,
    productUrl: '规则',
    productCategory: '可疑行为',
    productName: '反欺诈规则-特殊名单验证(RuleSpecialList_c)',
    productVersion: 'v2.0',
    productData: '特殊名单验证(SpecialList_c)',
    productType: '测试',
    totalNumber: 50,
    dayNumber: 50,
    other: ''
  },
  {
    productId: 4,
    productUrl: '规则',
    productCategory: '可疑行为',
    productName: '反欺诈规则-法院被执行人(RuleExecution)',
    productVersion: 'v2.0',
    productData: '法院被执行人-个人版(Execution)',
    productType: '测试',
    totalNumber: 50,
    dayNumber: 50,
    other: ''
  }
]
var testData = 'testData哈哈航昂昂昂昂哈昂'
export {
  khData,
  testData,
  productList
}
