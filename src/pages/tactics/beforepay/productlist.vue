<template>
  <section>
    <div id="main-filter">
      <div id="filter-item" style="margin-top: 20px; margin-bottom: 20px">
        <span class="i-title">客户简称: </span>
        <el-input v-model="comshortName" placeholder="请输入客户简称" size="mini" class="com-input"></el-input>
        <span class="i-title" style="margin-left: 20px">APICODE: </span>
        <el-input v-model="apiCode" placeholder="请输入apicode" size="mini" class="com-input"></el-input>
        <span class="i-title" style="margin-left: 20px">账户状态: </span>
        <el-select v-model="accountStatus" placeholder="请选择" size="mini" class="com-input">
          <el-option value="启用"></el-option>
          <el-option value="禁用"></el-option>
        </el-select>
        <span class="i-title" style="margin-left: 20px">账号类型</span>
        <el-select v-model="accountType" placeholder="请选择" size="mini" class="com-input">
          <el-option value="测试"></el-option>
          <el-option value="正式"></el-option>
        </el-select>

        <el-button type="primary" size="mini" @click="searchCom" style="margin-left: 20px">查询</el-button>
        <el-button size="mini" @click="resetCom">重置</el-button>
        <el-button type="primary" @click="newProduct" style="position: fixed; top: 70px; right: 20px" size="small">新增产品配置</el-button>
      </div>
    </div>

    <!-- 产品配置列表数据 -->
      <el-table 
        :data="beforePData.slice((this.beforeCurrent - 1) * this.beforeSize, (this.beforeCurrent - 1) * this.beforeSize + this.beforeSize)" 
        border 
        style="font-size: 12px; margin-bottom: 80px; overflow: hidden">
        <el-table-column label="客户编号" prop="comID" width="80px"></el-table-column>
        <el-table-column label="客户名称" prop="comName"></el-table-column>
        <el-table-column label="客户简称" prop="comShortName"></el-table-column>
        <el-table-column label="账号类型" prop="accountType" width="80px">
          <template slot-scope="scope">
            <p>{{scope.row.accountType ? '正式' : '测试'}}</p>
          </template>
        </el-table-column>
        <el-table-column label="APICODE" prop="apiCode"></el-table-column>
        <el-table-column label="产品类型" prop="productType" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column label="产品代码" prop="productCode" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column label="产品名称" prop="productName"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="productDetail(scope.row)" size="mini">查看</el-button>
            <el-button type="text" @click="editProduct(scope.row)" v-show="scope.row.comID > 50" size="mini">编辑</el-button>
            <el-button type="text" @click="chnageNumber(scope.row)" v-show="!scope.row.accountType" size="mini">修改条数</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div id="main-footer">
        <el-row type="flex" justify="space-between">
          <el-col :span="8" style="display: flex;">
            <span class="ps">每页显示</span>
            <el-pagination 
              :page-sizes="[10, 20, 50]" 
              @size-change="sizeChange" 
              layout="sizes"
              style="margin-left: 9px"></el-pagination>
          </el-col>
          <el-col :span="8">
            <el-pagination 
              :total="beforeTotal" 
              :current-page="beforeCurrent" 
              :page-size="beforeSize" 
              @current-change="currentChange" 
              layout="total, prev, pager, jumper"
              style="float: right; margin-right: 10px"></el-pagination>
          </el-col>
        </el-row>
      </div>
  </section>  
</template>

<script>
import api from '../../../http/api'
export default {
  data () {
    return {
      comshortName: '',
      apiCode: '',
      accountStatus: '',
      accountType: '',
      beforePData: [],
      beforeTotal: 0,
      beforeCurrent: 1,
      beforeSize: 10,
    }
  },
  mounted () {
    this.init();
  },
  methods: {
    init: function () {
      this.getData();
    },
    async getData () {
      console.log('获取数据')
      api.JH_info('/user/beforeproduct', 'post')
        .then(res => {
          this.beforePData = res.data;
          this.beforeTotal = res.data.length;
        })
        .catch(error => {
          console.log('productlist', error)
        })
    },
    searchCom: function () {

    },
    resetCom: function () {
      this.comshortName = '';
      this.apiCode  = '';
      this.accountStatus = '';
      this.accountType = ''
    },
    newProduct: function () {
      this.$router.push({path: '/beforepaypronew'})
    },
    // 每个客户的操作
    productDetail: function (val) {
      this.$router.push({path: '/beforeperpreview', query: {id: val.apiCode}})
    },
    editProduct: function () {

    },
    changeNumber: function () {

    },
    // 页数操作
    sizeChange: function (val) {
      console.log(val)
      this.beforeSize = val;
      this.beforeCurrent = 1;
    },
    currentChange: function (val) {
      this.beforeCurrent = val;
    }
  }
}
</script>

<style scoped>
  @import '../../../styles/body.css';
  
</style>