<template>
  <el-tabs class="as" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="商户配置" name="first">
      <com-list v-bind:beforeData="beforecomData"></com-list>
    </el-tab-pane>
    <el-tab-pane label="产品配置" name="second"></el-tab-pane>
  </el-tabs>  
</template>

<script>
import CustomerList from '../beforepay/customerList'
import ProductList from '../beforepay/productlist'
import api from '../../../http/api'
export default {
  data () {
    return {
      activeName: 'first',
      beforecomData: []
    }
  },
  mounted () {
    this.init()
  },
  components: {
    'com-list': CustomerList,
    'product-list': ProductList
  },
  methods: {
    init: function () {
      this.getData();
    },
    async getData () {
      api.JH_info('/user/beforecomData', 'post')
        .then(res => {
          console.log(res.data);
          this.beforecomData = res.data;
        })
        .catch(error => {
          console.log(error)
        })
    },
    handleClick: function () {

    }
  }
}
</script>

<style>
  @import '../../../styles/body.css';
</style>