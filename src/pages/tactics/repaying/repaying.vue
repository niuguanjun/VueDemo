<template>
  <div>
    贷中管理
    <el-button type="primary" size="mini" @click="getData">获取数据</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      userData: []
    }
  },
  methods: {
    // 试着解析网络数据
    getJsonData() {
      axios.get('/static/js/echarts_test_data.json')
        .then(res => {
          console.log(res)
        })
    },
    getData() {
      // 网络数据: https://www.runoob.com/static/js/echarts_test_data.json
      console.log('获取数据');
      console.log('111111111');
      this.getJsonData();
      console.log('111111111111111111')
    }
  }
}
</script>

<style scoped>

</style>