<template>
  <div id="newzdy">
    <div class="main-title">
      <el-row>
        <el-col :span="12">
          <p>自定义报告映射</p>
        </el-col>
        <el-col :span="12" style="text-align: right">
          <el-button type="primary" size="mini" @click="setzdy">保存</el-button>
          <el-button size="mini" @click="cancel">取消</el-button>
        </el-col>
      </el-row>
    </div>

    <div class="main-content">
      <div class="detail-edit">
        <el-form :model="newZdyData" label-width="140px" inline>
          
          <el-form-item label="APICODE: " required prop="apicode" v-if="isNew">
            <el-input v-model="newZdyData.apicode" placeholder="apiCode" style="width: 240px;"></el-input>
          </el-form-item>
          
          <el-form-item label="APICODE: " prop="apicode" v-if="isEdit">
            <el-input v-model="newZdyData.apicode" placeholder="apicode" style="width: 240px" disabled></el-input>
          </el-form-item>

          <el-form-item label="订购产品编码: " prop="orderProduct" v-if="isEdit">
            <el-input v-model="newZdyData.orderProduct" style="width: 240px" disabled=""></el-input>
          </el-form-item>

          <el-form-item label="订购产品编码: "  prop="orderProduct" v-if="isNew">
            <el-select v-model="newZdyData.prod" placeholder="请选择" style="width: 300px" @change="codeChang">
              <el-option v-for="index of orderProducts" :key="index.key" :value="index"></el-option>
            </el-select>
          </el-form-item>
        </el-form>

        <el-table :data="newzdyTable" border width="100%" height="500px">
          <el-table-column label="" width="60px" align="center">
            <template slot-scope="scope">
              <!-- <el-radio ></el-radio> -->
              <el-radio :label="scope.row.index" v-model="codeMapping" @change.native="getTemplateRow(scope.$index,scope.row)">&nbsp</el-radio>
              
            </template>
          </el-table-column>
          <el-table-column type="index" label="序号" width="50px" align="center"></el-table-column>
          <el-table-column prop="productName" label="产品名称" align="center"></el-table-column>
          <el-table-column prop="productCode" label="产品代码" align="center"></el-table-column>
          <el-table-column prop="version" label="API版本" align="center"></el-table-column>
          <el-table-column prop="serverName" label="服务名称" align="center"></el-table-column>
        </el-table>

      </div>
    </div>

  </div>
</template>

<script>
import api from '../../http/api'
export default {
  data() {
    return { 
      newZdyData: {
        apicode: '',
        orderProduct: '',
        prod: ''
      },
      newzdyTable: [],
      orderProducts: ['ScoreCust', 'ScoreCust2', 'ScoreCust3', 'ScoreCust4', 'ScoreCust5', 
                        'ScoreAfCust', 'ScoreAfCust1', 'ScoreAfCust2', 'ScoreAfCust3', 'ScoreAfCust4', 'ScoreAfCust5'],
      orderCode: '',
      codeMapping: '2',
      isNew: false,
      isEdit: true
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init: function () {
      this.getData();
      this.newZdyData.apicode = this.$route.query.apicode;
      this.newZdyData.orderProduct = this.$route.query.productid;
      this.isEdit = this.$route.query.apicode ? true : false;
      this.isNew = this.$route.query.apicode ? false : true;

    },
    async getData() {
      if (this.orderCode.indexOf('Af') < 0) {
        api.JH_info('/user/newzdysc', 'post')
          .then(res => {
            this.newzdyTable = res.data
          })
          .catch(error => {
            console.log(error)
          })
      }
      if (this.orderCode.indexOf('Af') > 0) {
        api.JH_info('/user/newzdysafc', 'post')
          .then(res => {
            this.newzdyTable = res.data
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    setzdy: function () {
    },
    cancel: function () {
      this.$router.go(-1)
    },
    selectComp: function () {

    },
    codeChang: function (val) {
      this.orderCode = val;
      this.init()
    },
    getTemplateRow: function (index, row) {
      this.codeMapping = row.index;
    }
  }
}
</script>

<style scoped>
.main-title {
  padding-left: 16px;
  padding-right: 16px;
  position: fixed;
  left: 187px;
  right: 0px;
  height: 50px;
  line-height: 48px;
  z-index: 500;
  background-color: #f5f7fa;
  border-bottom: 1px solid black;
}
.main-content {
  padding-top: 50px;
}
.detail-edit {
  padding: 10px 32px;
  position: relative;
}
.filter-item {

}
</style>