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
        <el-form :model="post" label-width="140px" :inline="true">
          <el-form-item label="APICODE: " prop="apicode" >
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
              <el-option value="测试"></el-option>
              <el-option value="正式"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否计入多头: " prop="isMultiApply">
            <el-select v-model="post.isMultiApply" placeholder="不计入" size="small">
              <el-option value="不计入"></el-option>
              <el-option value="计入"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="账号使用时长" prop="accountUseTime">
            <el-date-picker v-model="post.startTime" placeholder="请选择开始时间" type="date" value-format="yyyy-MM-dd" size="small"></el-date-picker>
            <span>-</span>
            <el-date-picker v-model="post.endTime" placeholder="请选择结束时间" type="date" value-format="yyyy-MM-dd" size="small"></el-date-picker>
          </el-form-item>

          <!-- 客户配置 -->
          <h5 style="margin-left: 10px; margin-top: 20px; margin-bottom: 20px; font-weight: 600">客户配置</h5>
          <el-form-item label="客户查询方式: " prop="searchType">
            <el-checkbox-group v-model="post.searchType" >
              <el-checkbox :label="item.id" v-for="item of select.searchType" v-bind:key="item.id">{{item.message}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="是否部码: " prop="isPlatCode">
            <el-radio-group v-model="post.isPlatCode">
              <el-radio v-for="item of select.isPlatCodes" :label="item.id" :key="item.id">{{item.message}}</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="平台: " prop="plat">
            <el-checkbox-group v-model="post.plats">
              <el-checkbox v-for="item of select.plats" :label="item.id" :key="item.id">{{item.message}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="是否输出数据产品: " prop="isOutpustDataProduct">
            <el-radio label="是" v-model="post.isOutputDataProduct"></el-radio>
            <el-radio label="否" v-model="post.isOutputDataProduct"></el-radio>
          </el-form-item>

          <el-form-item label="场景: " prop="scenes">
            <el-checkbox-group v-model="post.scenes">
              <el-checkbox v-for="item of select.scenes" :key="item.id" :label="item.id">{{item.message}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item label="审批报告是否脱敏: " prop="isDesensitization">
            <el-radio label="是" v-model="post.isDesensitization"></el-radio>
            <el-radio label="否" v-model="post.isDesensitization"></el-radio>
          </el-form-item>
          <el-form-item label="业务类型: " prop="businessType">
            <el-checkbox-group v-model="post.businessType">
              <el-checkbox v-for="item of select.businessType" :key="item.id" :label="item.id">{{item.message}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="是否开审批历史: " prop="isPermission">
            <el-radio label="是" v-model="post.isPermission"></el-radio>
            <el-radio label="否" v-model="post.isPermission"></el-radio>
          </el-form-item>
          

          <!-- 其他配置 -->
          <h5 style="margin-left: 10px; margin-top: 20px; margin-bottom: 20px; font-weight: 600">其他配置</h5>
          <el-form-item label="是否校验key值: ">
            <el-select v-model="post.isCheck" placeholder="需要" size="mini">
              <el-option value="不需要"></el-option>
              <el-option value="需要"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="请求处理编码: ">
            <el-select v-model="post.requestCode" placeholder="请选择" size="mini">
              <el-option value="00"></el-option>
              <el-option value="MD5"></el-option>
              <el-option value="Sha256"></el-option>
              <el-option value="SM3"></el-option>
              <el-option value="SM4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="响应处理编码: ">
            <el-select v-model="post.responseCode" placeholder="请选择" size="mini">
              <el-option value="00"></el-option>
              <el-option value="MsResponse"></el-option>
              <el-option value="FlatResponse"></el-option>
              <el-option value="AESResponse"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="加密key: " prop="encryptKey">
            <el-input v-model="post.encryptKey" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="解密key: " prop="decryptKey">
            <el-input v-model="post.decryptKey" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="客户端版本号: " prop="clientVersion">
            <el-input v-model="post.clientVersion" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="SDK版本号: " prop="SDKVersion">
            <el-input v-model="post.SDKVersion" ></el-input>
          </el-form-item>
          <el-form-item label="流水号版本: " prop="swiftNVersion">
            <el-input v-model="post.swiftNVersion" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="备注: " prop="remarks">
            <el-input v-model="post.remarks" type="textarea" size=""></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>


  
</template>

<script>
import Select from '../../../mock/select'
export default {
  data () {
    return {
      select: Select,
      post: {
        apicode: '',
        apiUsername: '',
        apiPassword: '',
        apiAgainPassword: '',
        webUsername: '',
        webPassword: '',
        webAgainPassword: '',
        accountType: '',
        isMultiApply: '',
        startTime: '',
        endTime: '',
        searchType: [],
        plats: [],
        isOutputDataProduct: '',
        isDesensitization: '',
        isPermission: '',
        scenes: [],
        businessType: [],
        isCheck: '',
        requestCode: '',
        responseCode: '',
        encryptKey: '',
        decryptKey: '',
        clientVersion: '',
        SDKVersion: '',
        swiftNVersion: '',
        remarks: ''
      }
    }
  },
  methods: {
    savecus: function () {

    },
    cancel: function () {
      this.$router.go(-1);
    },
  }
}
</script>

<style>
@import '../../../styles/body.css';
/* #detail-edit {
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
} */
/* .test .el-form-item {
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
} */
</style>