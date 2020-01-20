<template>
  <div id="cus-list">
    <div id="main-filter">
      <div id="filter-item" style="padding-top: 20px; padding-bottom:20px; font-size: 13px">
        <span class="i-title">客户简称: </span>
        <el-input v-model="cusShortName" placeholder="请输入客户简称" size="mini" class="com-input"></el-input>

        <span class="i-title" style="margin-left: 30px">APICODE: </span>
        <el-input v-model="apiCode" placeholder="请输入APICODE" size="mini" class="com-input"></el-input>

        <span class="i-title" style="margin-left: 30px">账户状态: </span>
        <el-select v-model="accountStatus" placeholder="请选择" size="mini" class="com-input">
          <el-option value="启用"></el-option>
          <el-option value="禁用"></el-option>
        </el-select>

        <span class="i-title" style="margin-left: 30px">账号类型: </span>
        <el-select v-model="accountType" placeholder="请选择" size="mini" class="com-input">
          <el-option value="测试"></el-option>
          <el-option value="正式"></el-option>
        </el-select>

        <el-button type="primary" size="mini" @click="searchBtn" style="margin-left: 30px">查询</el-button>
        <el-button size="mini" @click="reset">重置</el-button>
      </div>
    </div>
    <el-button type="primary" size="mini" @click="newVeriCom" style="position: fixed; right: 10px; top: 70px">新增商户配置</el-button>
    <el-table 
      :data="this.vericusListData.slice((this.comCurrent - 1) * this.pageSize, (this.comCurrent - 1) * this.pageSize + this.pageSize)"
      border 
      style="font-size: 13px">
      <el-table-column label="客户编号" prop="comID" width="80px"></el-table-column>
      <el-table-column label="客户名称" prop="comName" width="250px"></el-table-column>
      <el-table-column label="客户简称" prop="comShortName"></el-table-column>
      <el-table-column label="APICODE" prop="apiCode"></el-table-column>
      <el-table-column label="登录名" prop="loginName" width="100px"></el-table-column>
      <el-table-column label="账号类型" prop="accountType" width="80px">
        <template slot-scope="scope">
          <span>{{ scope.row.accountType ? '测试' : '测试' }}</span>
        </template>
      </el-table-column>
      <el-table-column label="账户状态" prop="accountStatus" width="80px">
        <template slot-scope="scope">
          <span>{{ scope.row.accountStatus ? '启用' : '禁用' }}</span>
        </template>
      </el-table-column>
      <el-table-column label="是否校验KEY" prop="isKey" width="80px">
        <template slot-scope="scope">
          <span>{{ scope.row.isKey ? '校验' : '不校验' }}</span>
        </template>
      </el-table-column>
      <el-table-column label="模块" prop="module"></el-table-column>
      <el-table-column label="创建时间" prop="createData"></el-table-column>
      <el-table-column label="操作" width="250px">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="comDetail(scope.row)">查看</el-button>
          <el-button type="text" size="mini" @click="comEdit(scope.row)">修改</el-button>
          <el-button type="text" size="mini" @click="changeStatus(scope.row)">
            <span>{{ scope.row.accountStatus ? '禁用' : '启用' }}</span>
          </el-button>
          <el-button type="text" size="mini" @click="reset(scope.row)">重置密码</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div id="main-footer">
      <el-row justify="space-between">
        <el-col :span="12" style="display: flex">
          <span class="ps">每页显示: </span>
          <el-pagination 
            :page-sizes="[10, 20, 50]" 
            @size-change="sizeChange" 
            style="margin-left: 10px"
            layout="sizes"></el-pagination>
        </el-col>
        <el-col :span="12">
          <el-pagination 
            :total="comTotal" 
            :current-page="comCurrent" 
            :page-size="pageSize" 
            @current-change="currentChange" 
            layout="total, prev, pager, next, jumper"
            style="text-align: right; margin-right: 10px"></el-pagination>
        </el-col>
      </el-row>
    </div>
  </div>  
</template>

<script>
import api from '../../../http/api'
export default {
  data() {
    return {
      cusShortName: '',
      apiCode: '',
      accountStatus: '',
      accountType: '',
      vericusListData: [],
      comTotal: 0,
      comCurrent: 1,
      pageSize: 10
    }
  },
  mounted () {
    this.init();
  },
  methods: {
    init: function () {
      this.getVeriData();
    },
    async getVeriData () {
      api.JH_info('/user/verifiactioncuslist', 'post')
        .then(res => {
          this.vericusListData = res.data;
          this.comTotal = res.data.length;
        })
        .catch(error => {
          console.log('verificationcusList', error)
        }) 
    },
    searchBtn: function () {

    },
    reset: function () {
      this.cusShortName = '';
      this.apiCode = '';
      this.accountStatus = '';
      this.accountType = '';
    },
    comDetail: function (val) {

    },
    comEdit: function (val) {

    },
    changeStatus: function (val) {

    },
    reset: function (val) {

    },
    newVeriCom: function () {
      this.$router.push('/verificationcusnew')
    },
    sizeChange: function (val) {
      this.pageSize = val;
      this.comCurrent = 1;
    },
    currentChange: function (val) {
      this.comCurrent = val;
    }
  }
}
</script>

<style>
@import '../../../styles/body.css';
</style>