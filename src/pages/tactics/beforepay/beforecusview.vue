<template>
  <div id="beforecusview">
    <div id="main-title">
      <el-row>
        <el-col :span="12">
          <span class="title">贷前--查看商户配置</span>
        </el-col>
        <el-col :span="12" style="text-align: right">
          <el-button size="mini" @click="backBtn"><i class="el-icon-arrow-left"></i>返回</el-button>
        </el-col>
      </el-row>
    </div>
    <div id="main-content">
      <div id="detail-info">
        <h5 style="margin-left: 10px; margin-top: 20px; margin-bottom: 20px">账户信息</h5>
        <el-form :model="form" label-width="140px" :inline="true">
          <el-form-item label="APICODE: ">{{ form.apiCode }}</el-form-item>
          <el-form-item label="Api登录名: ">{{ form.apiLogin }}</el-form-item>
          <el-form-item label="Web登录名: ">{{ form.webLogin }}</el-form-item>
          <el-form-item label="web账号状态: ">{{ form.webStatus }}</el-form-item>
          <el-form-item label="账号类型: ">{{ form.accountType }}</el-form-item>
          <el-form-item label="是否计入多次申请: ">{{ form.isMultiApply }}</el-form-item>
          <el-form-item label="账号使用时长: ">{{ form.useTime }}</el-form-item>
          <h5 style="margin-left: 10px; margin-top: 20px; margin-bottom: 20px">客户配置</h5>
          <el-form-item label="客户查询方式: ">{{ form.searchType }}</el-form-item>
          <el-form-item label="平台: ">{{ form.plat  }}</el-form-item>
          <el-form-item label="场景: ">{{ form.scenes }}</el-form-item>
          <el-form-item label="是否部码: ">{{ form.isPlatCode }}</el-form-item>
          <el-form-item label="是否输出数据产品: ">{{ form.isOutDataProduct }}</el-form-item>
          <el-form-item label="审批报告出否脱敏: ">{{ form.isDesecnsitization }}</el-form-item>
          <el-form-item label="业务类型: ">{{ form.businessType }}</el-form-item>
          <el-form-item label="是否开审批历史: ">{{ form.isPermission }}</el-form-item>
          <h5 style="margin-left: 10px; margin-top: 20px; margin-bottom: 20px">其他配置</h5>
          <el-form-item label="是否校验KEY: ">{{ form.isKey }}</el-form-item>
          <el-form-item label="请求处理编码: ">{{ form.requestCode }}</el-form-item>
          <el-form-item label="相应处理编码: ">{{ form.responseCode }}</el-form-item>
          <el-form-item label="加密key: ">{{ form.encryptKey }}</el-form-item>
          <el-form-item label="解密key: ">{{ form.decryptKey }}</el-form-item>
          <el-form-item label="客户端版本号: ">{{ form.clientVersion }}</el-form-item>
          <el-form-item label="SDK版本号: ">{{ form.sdkVersion }}</el-form-item>
          <el-form-item label="流水号版本: ">{{ form.swiftNVersion }}</el-form-item>
          <el-form-item label="备注: ">{{ form.other }}</el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import select from '../../../mock/select'
export default {
  data () {
    return {
      form: select.cusInfo
    }
  },
  methods: {
    backBtn: function () {
      this.$router.go(-1); 
    }
  }
}
</script>

<style>
@import '../../../styles/body.css';
</style>