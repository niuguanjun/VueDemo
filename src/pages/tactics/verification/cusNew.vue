<template>
  <div id="verification-cusnew">
    <div id="main-title">
      <el-row>
        <el-col :span="12">
          <span class="title">验证管理--新增产品配置</span>
        </el-col>
        <el-col :span="12" style="text-align: right">
          <el-button type="primary" size="mini" @click="submit">确认</el-button>
          <el-button size="mini" @click="backTo">取消</el-button>
        </el-col>
      </el-row>
    </div>
    <div id="main-content">
      <div id="detail-edit">
        <h5 style="margin-left: 10px; margin-top: 20px; margin-bottom: 20px">账号信息</h5>
        <el-form :model="post" :inline="true" label-width="140px">
          <el-form-item label="APICODE: " prop="apiCode">
            <el-input v-model="post.apiCode" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="Api登录名: " prop="apiLoginName">
            <el-input v-model="post.apiLoginName" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="Api登录密码: " prop="apiLoginPass">
            <el-input v-model="post.apiLoginPass"></el-input>
          </el-form-item>
          <el-form-item label="Api确认密码: " prop="apiAgainPass">
            <el-input v-model="post.apiAgainPass" ></el-input>
          </el-form-item>
          <el-form-item label="WEB登录名: " prop="webLoginName">
            <el-input v-model="post.webLoginName"></el-input>
          </el-form-item>
          <el-form-item label="WEB登录密码: " prop="webLoginPass">
            <el-input v-model="post.webLoginPass" ></el-input>
          </el-form-item>
          <el-form-item label="WEB确认密码: " prop="webAgainPass">
            <el-input v-model="post.webAgainPass" ></el-input>
          </el-form-item>
          <el-form-item label="账号类型: " prop="accountType">
            <el-select v-model="post.accountType" placeholder="请选择">
              <el-option value="测试"></el-option>
              <el-option value="正式"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否计入多次申请: " prop="isMultiApply">
            <el-select v-model="post.isMultiApply" placeholder="不计入">
              <el-option value="不计入"></el-option>
              <el-option value="计入"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="账号使用时长: " prop="useTime">
            <el-date-picker v-model="post.startTime" placeholder=""></el-date-picker>
            <span>--</span>
            <el-date-picker v-model="post.endTime" placeholder=""></el-date-picker>
          </el-form-item>

          <h5 style="margin-left: 10px; margin-top: 20px; margin-bottom: 20px">其他配置</h5>
          <el-form-item label="客户查询方式: " prop="searchType">
            <el-checkbox-group v-model="post.searchType">
              <el-checkbox label="api"></el-checkbox>
              <el-checkbox label="web"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="是否部码: " prop="isSDK">
            <el-radio-group v-model="post.isSDK">
              <el-radio label="其他"></el-radio>
              <el-radio label="部码"></el-radio>
              <el-radio label="不部码"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="是否输出数据产品: " prop="isOutDataPro">
            <el-radio-group v-model="post.isOutDataPro">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="审批报告是否脱敏:" prop="isDesensitization">
            <el-radio-group v-model="post.isDesensitization">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="是否开审批历史: " prop="isHistory">
            <el-radio-group v-model="post.isHistory">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
            </el-radio-group>
          </el-form-item>

          <h5 style="margin-left: 10px; margin-top: 20px; margin-bottom: 20px">其他配置</h5>
          <el-form-item label="是否校验key值: " prop="isKey">
            <el-select v-model="post.isKey" >
              <el-option value="需要"></el-option>
              <el-option value="不需要"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="请求处理编码: " prop="requestCode">
            <el-select v-model="post.requestCode" placeholder="请选择">
              <el-option value=""></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="响应请求编码: " prop="responseCode">
            <el-select v-model="post.responseCode" placeholder="请选择">
              <el-option value=""></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="加密key: " prop="encryptKey">
            <el-input v-model="post.encryptKey" ></el-input>
          </el-form-item>
          <el-form-item label="解密key: " prop="decryptKey">
            <el-input v-model="post.decrypt"></el-input>
          </el-form-item>
          <el-form-item label="模块: " prop="module">
            <el-input v-model="post.module" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="客户端版本号: " prop="clientVersion">
            <el-input v-model="post.clientVersion" ></el-input>
          </el-form-item>
          <el-form-item label="流水号版本号: " prop="swiftNVersion">
            <el-select v-model="post.swiftNVersion">
              <el-option value="v2"></el-option>
              <el-option value="v1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="备注: " prop="other">
            <el-input v-model="post.other"></el-input>
          </el-form-item>
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
        apiCode: '',
        apiLoginName: '',
        apiLoginPass: '',
        apiAgainPass: '',
        webLoginName: '',
        webLoginPass: '',
        webAgainPass: '',
        accountType: '',
        isMUltiApply: '',
        startTime: '',
        endTime: '',
        searchType: [],
        isSDK: '',
        isOutDataPro: '',
        isDesensitization: '',
        isHistory: '',
        isKey: '需要',
        requestCode: '',
        responseCode: '',
        encryptKey: '',
        decryptKey: '',
        module: '',
        clientVersion: '',
        swiftNVersion: 'v1',
        other: ''
      }
    }
  },
  methods: {
    backTo: function () {
      this.$router.go(-1)
    },
    submit: function () {
      console.log('保存')
      this.$router.go(-1)
    }
  }
}
</script>

<style>
@import '../../../styles/body.css';
</style>
