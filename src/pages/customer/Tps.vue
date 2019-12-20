<template>
  <div id="tps">
    <section>
      <div id="main-title">
        <el-row>
          <el-col :span="6">客户tps管理</el-col>
          <el-col :span="6" style="float: right; text-align: right">
            <el-button type="primary" @click="newPZ" size="small">新增配置</el-button>
          </el-col>
        </el-row>
      </div>
      <div id="main-content">
        <div id="main-filter">
          <div id="filter-item" style="margin-top: 20px; margin-bottom: 20px">
            <span class="title">APICODE: </span>
            <el-input placeholder="请输入APICODE" style="width: 200px; font-size: 12px; margin-left: 20px" size="mini" v-model="apicode"
              @keyup.native.13="searchApicode" clearable ></el-input>
            <el-button type="primary" size="mini" @click="searchApicode">查询</el-button>
            <el-button type="infor" size="mini" style="margin-left: 0px;" @click="resetTps">重置</el-button>
          </div>
        </div>
        <div class="tab-outer scroll">
          <el-table 
            :data="tableDate.slice((this.currentPage - 1) * this.pageSize, (this.currentPage - 1) * this.pageSize + this.pageSize)"
            border 
            style="width: 50%">
            <el-table-column label="APICODE" prop="apicode" align="center"></el-table-column>
            <el-table-column label="tps" prop="tps" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="edittps(scope.row)">编辑</el-button>
                <el-button type="text" size="small" @click="deletetps(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>

        <!-- 测试使用 el-pagination分页控件 -->
        <div id="main-footer">
          <el-row>
            <el-col :span="12" style="display: flex;">
              <span class="ps">每页显示: </span>
              <el-pagination 
                :page-sizes="[10, 20, 50]" 
                @size-change="changeSize"  
                layout="sizes"
                style="margin-left: 9px"></el-pagination>
            </el-col>
            <el-col :span="12" style="text-align: right;">
              <el-pagination 
                background 
                :total="tpsTotal" 
                :current-page="currentPage" 
                :page-size="pageSize" 
                @current-change="changeCurrent" 
                layout="total, prev, pager, next, jumper"></el-pagination>
              
            </el-col>
          </el-row>
        </div>
        
      </div>
    </section>
    <tps-edit :tpsVisible.sync = "isActive" :editApicode="editApicode" @changeTpsvisible="tpsChange"></tps-edit>
    <new-tps :newtpsVisible.sync = "newtpsvisible" @newTps="newtps"></new-tps>
  </div>
</template>

<script>
import api from '../../http/api'
import TpsEdit from '../../components/TpsEdit'
import NewTps from '../../components/NewTps'
export default {
  name: 'tps',
  data() {
    return {
      tableDate: [],
      apicode: '',
      tpsTotal: 0,
      currentPage: 1,
      pageSize: 10,
      isActive: false,
      editApicode: '',
      newtpsvisible: false
    }
  },
  components: {
    'tps-edit': TpsEdit,
    'new-tps': NewTps
  },
  mounted() {
    this.init()
  },
  methods: {
    init: function () {
      this.getData()
    },
    // 新增配置
    newPZ: function () {
      this.newtpsvisible = true
    },
    newtps: function () {
      this.newtpsvisible = false
    },
    // 编辑apicode
    edittps: function (val) {
      this.isActive = true;
      this.editApicode = val;
      console.log(this.editApicode)
    },
    tpsChange: function (val) {
      console.log('tpsChange', val)
      this.isActive = false
    },
    // 删除tps
    deletetps: function (val) {

    },
    
    // 查询apicode
    searchApicode: function () {
      var tmpTableData = [];
      if (this.apicode) {
        for (const index of this.tableDate) {
          if (index.apicode == this.apicode) {
            tmpTableData.push(index)
          }
        }
        this.tableDate = tmpTableData;
      } else {
        this.getData()
      }
    },
    // 重置
    resetTps: function () {
      this.getData();
      this.apicode = ''
    },
    // 当修改页数时
    changeCurrent: function (val) {
      this.currentPage = val;
    },
    // 当修改每页展示数据时
    changeSize: function (val) {
      this.pageSize = val;
      this.currentPage = 1;
    },
    // 获取tps数据
    async getData() {
      api.JH_info('/user/tps', 'post')
        .then(res => {
          this.tableDate = res.data;
          this.tpsTotal = res.data.length;
        })
        .catch(error => {
          console.log(error)
        })
    }

  }
}

</script>

<style scoped>
  @import '../../styles/body.css';
</style>