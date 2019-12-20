<template>
  <div id="zdy">
    <section>
      <div id="main-title">
        <el-row>
          <el-col :span="12">
            <span >自动定义报告映射</span>
          </el-col>
          <el-col :span="12" style="text-align: right">
            <el-button type="primary" size="small" @click="zdyNew">新增</el-button>
          </el-col>
        </el-row>
      </div>
      <div id="main-content">
        <div id="main-filter">
          <div id="filter-item" style="margin-top: 20px; margin-bottom: 20px">
            <span class="title">APICODE: </span>
            <el-input v-model="apicode" placeholder="请输入apicode" size="small" style="width: 140px; margin-left: 10px;" clearable ></el-input>
            <span class="title" style="margin-left: 10px;">产品代码: </span>
            <el-input v-model="productid" placeholder="请输入产品代码" size="small" style="width: 140px; margin-left: 10px" clearable></el-input>
            <span class="title" style="margin-left: 10px">个性化产品映射:  </span>
            <el-input v-model="code" placeholder="请输入产品映射" size="small" style="width: 140px; margin-left: 10px" clearable></el-input>
            <el-button type="primary" @click="search(apicode, productid, code)" size="small" style="margin-left: 10px">查询</el-button>
            <el-button  @click="reset" size="small" style="margin-left: 5px;">重置</el-button>
          </div>
        </div>

        <!-- 表格展示内容 -->
        <!-- :data="tableData.slice((this.zdyCurrentPage - 1) * this.zdypageSize + 1, (this.zdyCurrentPage - 1) * this.zdypageSize + 1 + this.zdypageSize)" -->
        <el-table 
          :data="tableData.slice((this.zdyCurrentPage - 1) * this.zdypageSize, (this.zdyCurrentPage - 1) * this.zdypageSize + this.zdypageSize)"
          border
          style="font-size: 12px; margin-bottom: 80px">
          <el-table-column label="APICODE" prop="apicode" align="center"></el-table-column>
          <el-table-column label="产品代码" prop="productid" align="center"></el-table-column>
          <el-table-column label="个性化产品映射" prop="code" align="center"></el-table-column>
          <el-table-column label="创建时间" prop="createDate" align="center"></el-table-column>
          <el-table-column label="编辑" align="center">
            <template slot-scope="scope">
              <el-button type="text" @click="zdyEdit(scope.row)" size="small">修改</el-button>
              <el-button type="text" @click="proDelete(scope.row)" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

      </div>
      <div id="main-footer">
        <el-row>
          <el-col :span="12" style="display: flex">
            <span class="ps">每页显示</span>
            <el-pagination 
              :page-sizes="[10, 20, 50]" 
              @size-change="sizeChange" 
              layout="sizes"
              style="margin-left: 10px;"></el-pagination>
          </el-col>
          <el-col :span="12">
            <el-pagination 
              :total="zdytotal" 
              :current-page="zdyCurrentPage" 
              :page-size="zdypageSize" 
              @current-change="currentChange" 
              layout="total, prev, pager, next, jumper"
              style="text-align: right; margin-right: 10px;"></el-pagination>
          </el-col>
        </el-row>
      </div>
    </section>
  </div>
</template>

<script>
import api from '../../http/api'
export default {
  data() {
    return {
      apicode: '',
      productid: '',
      code: '',
      tableData: [],
      zdytotal: 0,
      zdyCurrentPage: 1,
      zdypageSize: 10
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init: function () {
      this.getDate()
    },
    // 加载数据
    async getDate () {
      api.JH_info('/user/zdy', 'post')
        .then(res => {
          this.tableData = res.data;
          this.zdytotal = res.data.length;
        })
        .catch(error => {
          console.log(error)
        })
    },
    zdyNew: function () {
      this.$router.push({name: 'newzdy', params: {id: 'newzdyparams'}})
    },
    search: function (apicode, productid, code) {
      var tmpTable = [];
      if (apicode) {
        console.log('apicode: ', apicode)
        for (const table of this.tableData) {
          if (table.apicode == apicode) {
            tmpTable.push(table)
          }
        }
      }
      console.log(tmpTable.length)
      if (tmpTable.length > 0) {
        this.tableData = tmpTable
      }
    },
    reset: function () {
      this.apicode = '';
      this.productid = '';
      this.code = '';
      this.getDate();
    },
    zdyEdit: function (val) {
      // console.log(val)
      this.$router.push({path: '/newzdy', query: {apicode: val.apicode, productid: val.productid}})
    },
    proDelete: function (val) {
      console.log(val)
      this.$confirm('确认删除吗', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then (async () => {
        this.$message({
          type: 'success',
          message: '删除成功'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },

    // pagination
    sizeChange: function (val) {
      this.zdypageSize = val;
      this.zdyCurrentPage = 1;
    },
    currentChange: function (val) {
      this.zdyCurrentPage = val;
    }
  }
}
</script>

<style scoped>
  @import '../../styles/body.css';
</style>