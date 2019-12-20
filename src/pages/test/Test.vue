<template>
  <div id="test">

    <p style="margin-left: 20px;">测试el-tabs的问题</p>
    <el-tabs v-model="activeName" class="test-tabs">
      <el-tab-pane label="姓名姓名姓名" name="first">
        姓名
      </el-tab-pane>
      <el-tab-pane label="年龄" name="second">
        年龄
      </el-tab-pane>
      <el-tab-pane label="性别" name="third">
        性别
      </el-tab-pane>
    </el-tabs>
    <test-component v-bind:propdata="stringData"></test-component>
  </div>  
</template>

<script>
import Test2  from './Test2'
export default {
  data() {
    return {
      activeName: 'first',
      personData: {
        name: 'LBJ',
        sex: '男'
      },
      stringData: '这是一条测试的数据'
    }
  },
  components: {
    'test-component': Test2
  },
  methods: {
  }
}
</script>

<style>
.test-tabs .el-tabs__header {
  padding-left: 20px;
  margin-bottom: 0px
}
</style>