<template>
  <div id="customer">
    <section>
      <div id="main-title">
        <el-row>
          <el-col :span="6" >客户管理</el-col>
          <el-col :span="6" style="float: right; text-align: right">
            <el-button type="primary" size="small">新建客户</el-button>
          </el-col>
        </el-row>
      </div>
      <div id="main-content">
        <div id="main-filter">
          <filter-v title="客户级别: " v-bind:data="khglData.customerLevel" @changeBg="changeBackG" v-show="isShowMore"></filter-v>
          <filter-v title="区域: " v-bind:data="khglData.area" @changeBg="changeBackG" v-show="isShowMore"></filter-v>
          <filter-v title="客户类型: " v-bind:data="khglData.customerCategory" @changeBg="changeBackG" v-show="isShowMore"></filter-v>
          <filter-v title="客户一级类目: " v-bind:data="khglData.cstFirstCate" @changeBg="changeBackG" v-show="isShowMore"></filter-v>
          <div id="filter-item">
            <span class="title">快速查询: </span>
            <el-input v-model="customerInput" placeholder="客户编号/客户名称/客户简称/apicode" style="width: 300px" size="mini"></el-input>
            <el-button type="primary" size="mini" @click="searchCustomer">确定</el-button>
            <el-button type="text" @click="showMore" size="mini" style="margin-left: 800px">显示更多</el-button>
          </div>
        </div>
        <!-- el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition -->
        <el-table
          :data="customerData.slice((this.comCurrent - 1) * this.comPageSize, (this.comCurrent - 1) * this.comPageSize + this.comPageSize)"
          border
          style="font-size: 12px; color: black; margin-bottom: 80px">
          <el-table-column prop="comId" label="客户编号" width="100px"></el-table-column>
          <el-table-column prop="comName" label="客户名称" width="250px"></el-table-column>
          <el-table-column prop="comShortName" label="客户简称"></el-table-column>
          <el-table-column prop="comLevel" label="客户级别">
            <span slot-scope="scope">
              <p>{{scope.row.comLevel == 1 ? '公司级重点客户' : ''}}</p>
              <p>{{scope.row.comLevel == 2 ? '区域级重点客户' : ''}}</p>
              <p>{{scope.row.comLevel == 3 ? '一般客户' : ''}}</p>
              <p>{{scope.row.comLevel == 4 ? 'SME客户' : ''}}</p>
            </span>
          </el-table-column>
          <el-table-column prop="comFirstCategory" label="客户一级类目">
            <template slot-scope="scope">
              <p>{{scope.row.comFirstCategory == 1 ? '银行' : ''}}</p>
              <p>{{scope.row.comFirstCategory == 2 ? '非银' : ''}}</p>
              <p>{{scope.row.comFirstCategory == 3 ? '催收客户' : ''}}</p>
              <p>{{scope.row.comFirstCategory == 4 ? '内部客户' : ''}}</p>
              <p>{{scope.row.comFirstCategory == 5 ? '保险用户' : ''}}</p>
              <p>{{scope.row.comFirstCategory == 6 ? '其他' : ''}}</p>
            </template>
          </el-table-column>
          <el-table-column prop="comType" label="客户类型">
            <template slot-scope="scope">
              <p>{{scope.row.comType == 1 ? '传统银行' : ''}}</p>
              <p>{{scope.row.comType == 2 ? '网络零售银行' : ''}}</p>
              <p>{{scope.row.comType == 3 ? '消费金融' : ''}}</p>
              <p>{{scope.row.comType == 4 ? '小额贷款' : ''}}</p>
              <p>{{scope.row.comType == 5 ? '网络小贷' : ''}}</p>
              <p>{{scope.row.comType == 6 ? '汽车金融' : ''}}</p>
              <p>{{scope.row.comType == 7 ? '融资租赁' : ''}}</p>
              <p>{{scope.row.comType == 8 ? '保险' : ''}}</p>
              <p>{{scope.row.comType == 9 ? '信托' : ''}}</p>
              <p>{{scope.row.comType == 10 ? '其他持牌汽车金融机构' : ''}}</p>
              <p>{{scope.row.comType == 11 ? '其他' : ''}}</p>
            </template>
          </el-table-column>
          <el-table-column prop="mainBusinessType" label="主营业务类型"></el-table-column>
          <el-table-column prop="area" label="区域" width="100px"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="text" size="mini" @click="customerInfo(scope.row)">客户详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div id="main-footer">
        <el-row>
          <el-col :span="12" style="display: flex">
            <span class="ps">每页显示: </span>
            <el-pagination :page-sizes="[10, 20, 50]" @size-change="sizeChange" layout="sizes" style="margin-left: 10px"></el-pagination>
          </el-col>

          <el-col :span="12" style="text-align: right">
            <el-pagination
              :total="comTotal"
              :current-page="comCurrent"
              :page-size="comPageSize"
              @current-change="currentChange"
              layout="total, prev, pager, jumper"
              style="float: right; margin-right: 10px;"></el-pagination>
          </el-col>
        </el-row>
      </div>
    </section>
  </div>
</template>

<script>
import Filter from '../../components/Filter'
import {khData} from '../../mock/data'
import api from '../../http/api'
export default {
  name: 'customer',
  data () {
    return {
      searchTxt: '',
      testupdate: 'abc',
      customerData: [],
      khglData: {
        customerLevel: khData.customerLevel,
        area: khData.area,
        customerCategory: khData.customerCategory,
        cstFirstCate: khData.cstFirstCate
      },
      customerInput: '',
      isShowMore: true,
      comTotal: 0,
      comCurrent: 1,
      comPageSize: 10
    }
  },
  components: {
    'filter-v': Filter
  },
  mounted () {
    this.init()
  },
  methods: {
    init: function () {
      this.getData()
    },
    async getData () {
      api.JH_info('/user/customer', 'post')
        .then(res => {
          this.customerData = res.data
          this.comTotal = res.data.length
        })
        .catch(error => {
          console.log(error)
        })
    },
    // 点击客户详情
    customerInfo: function (val) {
      console.log('客户详情: ', val)
      this.$router.push({path: '/getDetail', query: {'comName': val.comName, 'comId': val.comId}})
    },
    searchCustomer: function () {

    },
    changeBackG: function (val) {
      val.isActive = !val.isActive
    },
    showMore: function () {
      this.isShowMore = !this.isShowMore
    },
    // 页数或当前页显示修改时
    sizeChange: function (val) {
      this.comPageSize = val
      this.comCurrent = 1
    },
    currentChange: function (val) {
      this.comCurrent = val
    }
  }
}
</script>

<style scoped>
  @import '../../styles/body.css';
</style>
