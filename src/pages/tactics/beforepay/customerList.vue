<template>
  <section>
    <div id="main-filter">
      <div id="filter-item" style="padding-top: 20px; padding-bottom: 20px; font-size: 13px">

        <span class="title">客户简称: </span>
        <el-input v-model="comShortName" placeholder="请输入客户简称" size="mini" class="com-input" clearable ></el-input>

        <span class="title" style="margin-left: 30px">登录名: </span>
        <el-input v-model="loginName" placeholder="请输入登录名" size="mini" class="com-input" clearable ></el-input>

        <span class="title" style="margin-left: 30px">APICODE: </span>
        <el-input v-model="apiCode" placeholder="请输入APICODE" size="mini" class="com-input" clearable ></el-input>

        <span class="title" style="margin-left: 30px">账户状态: </span>
        <el-select v-model="countStatus" placeholder="请选择" size="mini" class="com-input" clearable >
          <el-option value="启用"></el-option>
          <el-option value="禁用"></el-option>
        </el-select>

        <span class="title" style="margin-left: 30px">账号类型: </span>
        <el-select v-model="countType" placeholder="请选择" size="mini" class="com-input" clearable >
          <el-option value="测试"></el-option>
          <el-option value="正式"></el-option>
        </el-select>

        <el-button type="primary" size="mini" style="margin-left: 10px" @click="search">确定</el-button>
        <el-button size="mini" style="margin-left: 5px" @click="cancel">取消</el-button>
      </div>
      <el-button type="primary" style="position: fixed; right: 10px; top: 70px" size="mini" @click="newcurstomer">新增商户配置</el-button>
    </div>
    <el-table 
        :data="beforeData"
        border 
        style="font-size: 12px; color: black; margin-bottom: 80px">
        <el-table-column label="客户编号" prop="comID" width="80px"></el-table-column>
        <el-table-column label="客户名称" prop="comName" width="200px"></el-table-column>
        <el-table-column label="客户简称" prop="comShortName"></el-table-column>
        <el-table-column label="APICODE" prop="apiCode" width="120px"></el-table-column>
        <el-table-column label="登录名" prop="loginName" width="100px"></el-table-column>
        <el-table-column label="账号类型" prop="accountType" width="100px">
          <template slot-scope="scope">
            <p>{{scope.row.accountType === 0 ? '正式' : ''}}</p>
            <p>{{scope.row.accountType === 1 ? '测试' : ''}}</p>
          </template>
        </el-table-column>
        <el-table-column label="账号状态" prop="accountStatus" width="100px">
          <template slot-scope="scope">
            <p>{{scope.row.accountStatus === 0 ? '启用' : ''}}</p>
            <p>{{scope.row.accountStatus === 1 ? '禁用' : ''}}</p>
          </template>
        </el-table-column>
        <el-table-column label="是否计入多次申请" prop="isMultipleApply" width="100px">
          <template slot-scope="scope">
            <p>{{scope.row.isMultipleApply ? '计入' : '不计入'}}</p>
          </template>
        </el-table-column>
        <el-table-column label="是否校验KEY" prop="isKey" width="100px">
          <template slot-scope="scope">
            <p>{{scope.row.isKey ? '是' : '否'}}</p>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" prop="createTime" width="100px"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="comDetail(scope.row)">查看</el-button>
            <el-button type="text" size="mini" @click="comEdit(scope.row)">修改</el-button>
            <el-button type="text" size="mini" @click="noUse(scope.row)">
              <p>{{scope.row.accountStatus == 0 ? '禁用' : '启用'}}</p>
            </el-button>
            <el-button type="text" size="mini" @click="resetPs(scope.row)">重置密码</el-button>
          </template>
        </el-table-column>
      </el-table>
  </section>  
</template>

<script>
export default {
  data () {
    return {
      comShortName: '',
      loginName: '',
      apiCode: '',
      countStatus: '',
      countType: '',
    }
  },
  mounted () {
    
  },
  props: ['beforeData'],
  methods: {
    search: function () {

    },
    cancel: function () {

    },
    newcurstomer: function () {

    },
    comDetail: function () {

    },
    comEdit: function () {

    },
    noUse: function () {

    },
    resetPs: function () {

    }
  }
}
</script>

<style scoped>
  @import '../../../styles/body.css';
  .com-input {
    width: 120px;
    margin-left: 10px;
  }
</style>