<template>
  <div id="perpreview">
    <el-row id="main-title" type="flex" justify="space-between">
      <el-col :span="6">
        <span style="margin-left: 10px">查看产品信息</span>
      </el-col>
      <el-col :span="6" style="text-align: right">
        <el-button size="mini" @click="cancel"><i class="el-icon-arrow-left"></i>返回</el-button>
      </el-col>
    </el-row>
    <div id="main-content">
      <div id="tactics-filter">
        <span class="title">apicode: </span>
        <el-input v-model="previewApicode" disabled size="small" style="width: 300px; margin-left: 30px"></el-input>
      </div>
    </div>
    <div id="tactics-main">
      <p style="border-left: 3px solid blue; padding-left: 5px">产品预览</p>
      <el-table :data="productList"
        border 
        style="margin-top: 20px; font-size: 13px;">
        <el-table-column label="序号" type="index" width="50px"></el-table-column>
        <el-table-column label="接口名" prop="productUrl" width="100px"></el-table-column>
        <el-table-column label="产品类别" prop="productCategory" width="100px"></el-table-column>
        <el-table-column label="产品名称" prop="productName" width="350px"></el-table-column>
        <el-table-column label="版本选择" prop="productVersion"></el-table-column>
        <el-table-column label="返回的数据产品" prop="productData" width="300px"></el-table-column>
        <el-table-column label="产品使用类型" prop="productType"></el-table-column>
        <el-table-column label="总访问量/总计" prop="totalNumber"></el-table-column>
        <el-table-column label="测试条数/天" prop="dayNumber"></el-table-column>
        <el-table-column label="其他说明" prop="other"></el-table-column>
      </el-table>
    </div>
    
  </div>  
</template>

<script>
import {productList} from '../../../mock/data'
export default {
  data () {
    return {
      previewApicode: '',
      productList: productList
    }
  },
  mounted () {
    var beforequery = this.$route.query.id;
    this.previewApicode = beforequery;
  },
  methods: {
    cancel: function () {
      this.$router.push({path: '/beforepaying', query: {activeName: 'second'}})
    }
  }
}
</script>

<style scoped>
#tactics-filter {
  margin-top: 30px;
  margin-bottom: 30px;
}
#tactics-filter .title {
  margin-left: 80px;
}
#tactics-main {
  padding: 5px 30px;
}
</style>