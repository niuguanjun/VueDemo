<template>
  <div id="beforepaypronew">
    <div id="main-title">
      <el-row>
        <el-col :span="12">
          <span class="title">新增产品配置</span>
        </el-col>
        <el-col :span="12" style="text-align: right">
          <el-button type="primary" @click="submit" size="mini">保存</el-button>
          <el-button @click="cancel" size="mini">取消</el-button>
        </el-col>
      </el-row>
    </div>
    <div id="main-content">
      <div id="tactics-filter">
        <span class="title">Apicode: </span>
        <el-select v-model="apicode" placeholder="请选择" style="margin-left: 10px">
          <el-option v-for="item of apicodes" :key="item.id" :value="item">{{item}}</el-option>
        </el-select>
      </div>
      <div id="tactics-main">
        <el-tabs type="card" class="product-list" v-model="acitveName">
          <el-tab-pane v-for="item of beforeproductDate" :key="item.id" :label="item.name">
            <el-table :data="item.tableData"
              border 
              style="">
              <el-table-column label="产品类别" prop="name" width="180px"></el-table-column>
              <el-table-column label="产品名称">
                <template slot-scope="scope">
                  <div class="product-item" v-for="sitem of scope.row.productList" :key="sitem.id">
                    <el-checkbox v-model="sitem.isChecked" @change="getSelectList(sitem)">
                      <span>{{ `${sitem.productChineseName}(${sitem.productName})` }}</span>
                      <span style="margin-left: 6px; color: red">{{ sitem.version }}</span>
                      <span style="margin-left: 6px; color: red">{{ config[sitem.spreadStatus] }}</span>
                      <span style="margin-left: 6px; color: red">{{ config1[sitem.crmStatus] }}</span>
                    </el-checkbox>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="产品预览">
            <div class="test-content">
              <span>测试条数(总计): </span>
              <el-input v-model="productNumber" size="mini" style="width: 150px; margin-left: 10px"></el-input>
              <span style="margin-left: 100px">测试条数(天): </span>
              <el-input v-model="productDayNum" size="mini" style="width: 150px; margin-left: 10px"></el-input>
            </div>
            <el-table :data="allCheckedPro"
              border 
              style="margin-top: 30px; font-size: 13px">
              <el-table-column label="序号" width="50px" type="index"></el-table-column>
              <el-table-column label="接口名">
                <template slot-scope="scope">
                  <span>{{ scope.row.productTypeCode.includes('B10') ? '数据产品' : '' }}</span>
                  <span>{{ scope.row.productTypeCode.includes('B20') ? '规则' : '' }}</span>
                  <span>{{ scope.row.productTypeCode.includes('B30') ? '模型' : '' }}</span>
                </template>
              </el-table-column>
              <el-table-column label="产品类别">
                <template slot-scope="scope">
                  <span>{{ productConfig[scope.row.productTypeCode] }}</span>
                </template>
              </el-table-column>
              <el-table-column label="产品名称" width="300px">
                <template slot-scope="scope">
                  <span>{{ scope.row.productChineseName }}</span>
                  <br>
                  <span>{{ scope.row.productName }}</span>
                </template>
              </el-table-column>
              <el-table-column label="版本" prop="version"></el-table-column>
              <el-table-column label="产品使用类型">
                <template slot-scope="scope">
                  <el-select v-model="scope.row.productType" size="mini" placeholder="">
                    <el-option label="测试" value="测试"></el-option>
                    <el-option label="正式" value="正式"></el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column label="总访问量/总计">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.productNumber" placeholder="必填" size="mini"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="限制条数/每天">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.productDayNum" placeholder="必填" size="mini"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="其他说明">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.other" placeholder="" size="mini"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button type="text" size="mini" @click="deleteProduct(scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../../http/api'
export default {
  data () {
    return {
      apicode: '',
      apicodes: ['3003001', '3003002', '3002345'],
      beforeproductDate: [],
      acitveName: '',
      config: {
        '0': '已下线',
        '1': '待上线',
        '2': '推广',
        '3': '不推广',
        '4': '有条件推广'
      },
      config1: {
        '1': 'crm支持',
        '2': 'crm不支持'
      },
      productConfig: {
        'B101': '基础数据产品',
        'B103': '设备反欺诈_数据',
        'B102': '评分映射产品',
        'B201': '失信历史',
        'B202': '可疑行为',
        'B206': '设备反欺诈规则',
        'B301': '信用风险识别',
        'B302': '反欺诈风险识别',
        'B307': '其他模型'
      },
      allCheckedPro: [],
      productNumber: '',
      productDayNum: ''
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init: function () {
      this.getData()
    },
    async getData() {
      api.JH_info('/user/beforeproductData', 'post')
        .then(res => {
          this.beforeproductDate = res.data
        })
        .catch(error => {
          console.log('beforepaypronew', error)  
        })
    },
    submit: function () {

    },
    cancel: function () {
      this.$router.go(-1);
    },
    // 获取选择产品的列表
    getSelectList: function (val) {
      if (val.isChecked) {
        this.allCheckedPro.push(val)
      }
      if (!val.isChecked) {
        this.allCheckedPro.forEach(item => {
          if (val.productName == item.productName) {
            var index = this.allCheckedPro.indexOf(item);
            this.allCheckedPro.splice(index, 1);
          }
        })
      }
    },
    // 删除产品
    deleteProduct: function (val) {
      this.$confirm('确认删除么', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        var index = this.allCheckedPro.indexOf(val);
        this.allCheckedPro.splice(index, 1);
        this.$message({
          type: 'success',
          message: '删除成功'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style>
@import '../../../styles/body.css';
.product-list .el-tabs__header {
  padding-left: 20px;
}
.product-item {
  display: inline-block;
  width: 48%;
  min-width: 32%;
  line-height: 12px;
  padding: 0px 6px;
  margin-right: 1%;
}
.test-content {
  margin: 10px 40px;
  font-size: 13px;
}
</style>