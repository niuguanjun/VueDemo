<template>
  <div id="pro-new">
    <div id="main-title">
      <el-row>
        <el-col :span="12">
          <span class="title">验证管理--新增产品配置</span>
        </el-col>
        <el-col :span="12" style="text-align: right">
          <el-button type="primary" size="mini" @click="preserve">保存</el-button>
          <el-button size="mini" @click="cancel">返回</el-button>
        </el-col>
      </el-row>
    </div>
    <div id="main-content">
      <div id="tactics-filter">
        <span class="title">Apicode: </span>
        <el-select v-model="apicode" placeholder="请选择">
          <el-option v-for="item of apicodeList" :key="item.id" :value="item"></el-option>
        </el-select>
      </div>
      <div id="tactics-main">
        <el-tabs type="card">
          <el-tab-pane v-for="item of tabList" :key="item.id" :label="item" ></el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      apicode: '',
      apicodeList: ['3005441', '3005442', '3005443', '3005444'],
      tabList: ['数据产品', '规则', '产品预览']
    }
  },
  methods: {
    preserve: function () {

    },
    cancel: function () {
      this.$router.push({path: '/verification', query: {active: 'second'}})
    }
  }
}
</script>

<style>
@import '../../../styles/body.css';
</style>
