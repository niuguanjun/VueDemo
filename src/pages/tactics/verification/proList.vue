<template>
  <div id="pro-list">
    <div id="main-filter">
      <div id="filter-item" style="padding-top: 20px; padding-bottom: 20px; font-size: 13px">
        <span class="i-title">客户简称: </span>
        <el-input v-model="comShortName" placeholder="请输入客户简称" class="com-input" size="mini" clearable ></el-input>

        <span class="i-title" style="margin-left: 20px">APICODE: </span>
        <el-input v-model="apiCode" placeholder="请输入APICODE" class="com-input" size="mini" clearable @keyup.native.13="searchCom"></el-input>

        <span class="i-title" style="margin-left: 20px">账户状态: </span>
        <el-select v-model="accountStatus" placeholder="请选择" class="com-input" size="mini" clearable >
          <el-option value="启用"></el-option>
          <el-option value="禁用"></el-option>
        </el-select>

        <span class="i-title" style="margin-left: 20px">账号类型: </span>
        <el-select v-model="accountType" placeholder="请选择" class="com-input" size="mini" clearable >
          <el-option value="测试"></el-option>
          <el-option value="正式"></el-option>
        </el-select>

        <el-button type="primary" size="mini" @click="searchCom" style="margin-left: 20px">查询</el-button>
        <el-button size="mini" @click="reset">重置</el-button>
      </div>
    </div>
    <el-button type="primary" size="mini" @click="newPro" style="position: fixed; right: 10px; top: 70px">新增产品配置</el-button>
    <el-table 
      :data="this.verifiProList.slice((this.currentPage - 1) * this.pageSize, (this.currentPage - 1) * this.pageSize + this.pageSize)"
      border >
      <el-table-column label="编号" prop="comID" width="80px"></el-table-column>
      <el-table-column label="客户名称" prop="comName" width="250px"></el-table-column>
      <el-table-column label="客户简称" prop="comShortName"></el-table-column>
      <el-table-column label="账号类型" prop="accountType">
        <template slot-scope="scope">
          <span>{{ scope.row.accountType ? '测试' : '正式' }}</span>
        </template>
      </el-table-column>
      <el-table-column label="APICODE" prop="apiCode"></el-table-column>
      <el-table-column label="产品类别" prop="productCategory" :show-overflow-tooltip="true" ></el-table-column>
      <el-table-column label="产品代码" prop="productCode" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column label="产品名称" prop="productName" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column label="操作" width="150px">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="proDetail(scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div id="main-footer">
      <el-row>
        <el-col :span="12" style="display: flex">
          <span class="ps">每页显示: </span>
          <el-pagination 
            :page-sizes="[10, 20, 50]" 
            @size-change="sizeChange" 
            layout="sizes"
            style="margin-left: 10px"></el-pagination>
        </el-col>
        <el-col :span="12">
          <el-pagination 
            :total="proTotal" 
            :current-page="currentPage" 
            :page-size="pageSize" 
            @current-change="currentChange" 
            layout="total, prev, pager, next, jumper"
            style="text-align: right; margin-right: 20px"></el-pagination>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import api from '../../../http/api'
export default {
  data () {
    return {
      comShortName: '',
      apiCode: '',
      accountStatus: '',
      accountType: '',
      verifiProList: [],
      proTotal: 0,
      currentPage: 1,
      pageSize: 20,
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init: function () {
      this.getproData();
    },
    getproData: function () {
      api.JH_info('/user/verificationprolist', 'post')
        .then(res => {
          this.verifiProList = res.data;
          this.proTotal = res.data.length;
        })
        .catch(error => {
          console.log('verificationprolist', error);
        })
    },
    searchCom: function () {
      console.log('searchApicode', this.apiCode)
      var tmpArr = []
      if (this.apiCode) {
        this.verifiProList.forEach(item => {
          if (item.apiCode == this.apiCode) {
            tmpArr.push(item)
            this.verifiProList = tmpArr;
          }
        })
      }
    },
    reset: function () {
      this.comShortName  = '';
      this.apiCode = '';
      this.accountStatus = '';
      this.accountType  = '';
      this.getproData();
    },
    newPro: function () {
      this.$router.push('/verificationpronew')
    },
    proDetail: function (val) {

    },
    sizeChange: function (val) {
      this.pageSize = val;
      this.currentPage = 1;
    },
    currentChange: function (val) {
      this.currentPage = val;
    }
  }
}
</script>

<style scoped>
@import '../../../styles/body.css';
</style>