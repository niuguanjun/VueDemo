<template>
  <div id="beforepaycusnew">
    <div id="main-title">
      <el-row>
        <el-col :span="12">
          <span class="title">贷前-新增商户配置</span>
        </el-col>
        <el-col :span="12" style="text-align: right">
          <el-button type="primary" size="mini" @click="savecus">保存</el-button>
          <el-button size="mini" @click="cancel">取消</el-button>
        </el-col>
      </el-row>
    </div>
    <div id="main-content">
      <div id="detail-edit">
        <h5 style="margin-left: 10px; font-weight: 600; margin-top: 20px; margin-bottom: 20px">账号信息</h5>
        <el-form :model="post" label-width="140px" inline="true">
          <el-form-item label="APICODE: " prop="APICODE" >
            <el-input v-model="post.apicode" placeholder=""  size="small" style="wdith: 200px"></el-input>
          </el-form-item>
          <el-form-item label="Api登录名: " prop="apiUsername" >
            <el-input v-model="post.apiUsername" placeholder=""  size="small"></el-input>
          </el-form-item>
          <el-form-item label="Api登录密码: " prop="apiPassword">
            <el-input v-model="post.apiPassword" autocomplete="off" size="small" type="password"></el-input>
          </el-form-item>
          <el-form-item label="Api确认密码: " prop="apiAgainPassword">
            <el-input v-model="post.apiAgainPassword" autocomplete="off" size="small" type="password"></el-input>
          </el-form-item>
          <el-form-item label="web登录名: " prop="webUsername">
            <el-input v-model="post.webUsername" autocomplete="off" size="small"></el-input>
          </el-form-item>
          <el-form-item label="web登录密码: " prop="webPassword">
            <el-input v-model="post.webPassword" autocomplete="off" size="small" type="password"></el-input>
          </el-form-item>
          <el-form-item label="web确认密码: " prop="webAgainPassword">
            <el-input v-model="post.webAgainPassword" autocomplete="off" size="small" type="password"></el-input>
          </el-form-item>
          <el-form-item label="账号类型: " prop="accountType">
            <el-select v-model="post.accountType" size="small">
              <el-option label="测试"></el-option>
              <el-option label="正式"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否计入多头: " prop="isMultiApply">
            <el-select v-model="post.isMultiApply" placeholder="不计入" size="small">
              <el-option label="计入"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="账号使用时长" prop="accountUseTime">
            <el-date-picker v-model="poststartTime" placeholder="请选择开始时间" type="date" value-format="yyyy-MM-dd" size="small"></el-date-picker>
            <span>-</span>
            <el-date-picker v-model="post.endTime" placeholder="请选择结束时间" type="date" value-format="yyyy-MM-dd" size="small"></el-date-picker>
          </el-form-item>

          <!-- 客户配置 -->
          <h5 style="margin-left: 10px; margin-top: 10px; margin-bottom: 10px; font-weight: 600">客户配置</h5>


        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      post: {
        apicode: '',
        apiUsername: '',
        apiPassword: '',
        apiAgainPassword: '',
        webUsername: 'qqqqq',
        webPassword: '',
        webAgainPassword: '',
        accountType: '',
        isMultiApply: '',
        startTime: '',
        endTime: ''
      }
    }
  },
  methods: {
    savecus: function () {

    },
    cancel: function () {

    }
  }
}
</script>

<style>
@import '../../../styles/body.css';
#detail-edit {
  padding: 10px 32px;
}
#detail-edit h5 {
  font-size: 16px;
  padding-left: 4px;
  border-left: 3px solid #12d4d7;
}
#detail-edit .el-form-item {
  width: 46%;
  padding-left: 1%;
}
/* .test .el-form-item {
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
} */
</style>