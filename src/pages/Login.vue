<template>
  <div id="login">
    <!-- <el-row>
      <el-col :span="12" style="display: flex" justify="space-between"> 
        <span>页数较少是显示</span>
        <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
      </el-col>
      <el-col :span="12" style="display: flex">
        <span>页数超过七页时显示: </span>
        <el-pagination :total="90" layout="prev, pager, next, jumper" background ></el-pagination>
      </el-col>
    </el-row>
    <div style="margin-top: 20px;">
      <span>每页显示: </span>
      <el-pagination :page-sizes="[10, 20, 50]" layout="sizes" background ></el-pagination>
    </div>
    <div style="margin-top: 20px;">
      <span>设置最大按钮数</span>
      <el-pagination :total="1000"  :page-size="10"  layout="total, prev, pager, next" background ></el-pagination>
    </div>

    <div>
      <span>显示总数</span>
      <el-pagination :total="1000" :page-size="20"  layout="total, prev, pager, next" background></el-pagination>
    </div>

    <div>
      <span>调整每页显示条数</span>
      <el-pagination :total="1000" :page-size="10" :page-sizes="[10, 20, 50]" layout="sizes, prev, pager, next"></el-pagination>
    </div>

    <div>
      <span>直接前往</span>
      <el-pagination :total="1000"  :page-size="10"  layout="prev, pager, next, jumper"></el-pagination>
    </div>

    <div>
      <span>完整功能</span>
      <el-pagination :total="1000"  :page-sizes="[10, 20, 50]" layout="total, sizes, prev, pager, next, jumper" background></el-pagination>
    </div>

    <div>
      <span>绑定data参数</span>
      <el-pagination 
        :total="mytotal" 
        :current-page="mycurrentPage" 
        :page-size="mypageSize" 
        @current-change="handlecurrentChange" 
        @size-change="handlePageChange"
        layout="total, sizes, prev, pager, next, jumper"
        background ></el-pagination>
    </div> -->

    <el-button type="primary" @click="testAjax">点击测试mock</el-button>
    <el-button type="primary" @click="testMock">测试mock生成数据</el-button>

    
  </div>
</template>

<script>
import api from '../http/api.js'
export default {
  data() {
    return {
      mytotal: 1232,
      mycurrentPage: 1,
      mypageSize: 10
    }
  },
  methods: {
    handlecurrentChange: function (val) {
      console.log('当前显示第', val, '页');
    },
    handlePageChange: function (val) {
      console.log('每页显示', val, '条')
    },
    testAjax: function () {
      console.log('测试ajax')
      api.JH_info('/user/index', 'post')
        .then(res => {
          console.log(res.person)
        })
      console.log('123')
    },
    testMock: function () {
      api.JH_info('/user/tps', 'post')
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>

<style scoped>

</style>