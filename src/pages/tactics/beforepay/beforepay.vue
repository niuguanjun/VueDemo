<template>
  <el-tabs class="as" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="商户配置" name="first">
      <com-list></com-list>
    </el-tab-pane>
    <el-tab-pane label="产品配置" name="second">
      <product-list></product-list>
    </el-tab-pane>
  </el-tabs>  
</template>

<script>
import CustomerList from '../beforepay/customerList'
import ProductList from '../beforepay/productlist'
export default {
  data () {
    return {
      activeName: 'first',
      beforecomData: [],
      beforePData: []
    }
  },
  mounted () {
    var activeN = this.$route.query.activeName;
    if (activeN) {
      this.activeName = activeN;
    }
    
  },
  components: {
    'com-list': CustomerList,
    'product-list': ProductList
  },
  methods: {
    handleClick: function () {

    }
  }
}
</script>

<style>
  @import '../../../styles/body.css';
</style>