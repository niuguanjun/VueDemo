<template>
  <div id="apilog">
    <el-tabs class="as" v-model="activeName" type="card">
      <el-tab-pane name="login" label="登录" style="background-color: red" class="testlogin"></el-tab-pane>
      <el-tab-pane name="errorLog" label="异常">
        异常
      </el-tab-pane>
      <el-tab-pane name="hxLog" label="画像"></el-tab-pane>
      <el-tab-pane name="hnLog" label="海纳"></el-tab-pane>
      <el-tab-pane name="zhLog" label="整合"></el-tab-pane>
      <el-tab-pane name="dqLog" label="贷前"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'login'
    }
  }
}
</script>

<style scoped>
.as {
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 0px;
}
</style>
