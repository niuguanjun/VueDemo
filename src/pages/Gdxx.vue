<template>
  <div>
    <section>
      <div id="main-title">
        <el-row>
          <el-col :span="6">工单信息</el-col>
        </el-row>
      </div>
      <div id="main-content">
        <div id="main-filter">
          <el-row type="flex">
            <filter-time title="工单申请时间: " v-show="isShow"></filter-time>
            <filter-time title="最后更新时间: " v-show="isShow"></filter-time>
          </el-row>

          <!-- 工单列表 -->
          <filter-v title="产品类型: " v-bind:data="gdData.productType"  @changeBg="changeBackG" v-show="isShow"></filter-v>
          <filter-v title="工单状态: " v-bind:data="gdData.gdStatus" @changeBg="changeBackG" v-show="isShow"></filter-v>
          <filter-v title="账号类型: " v-bind:data="gdData.accountType" @changeBg="changeBackG" v-show="isShow"></filter-v>

          <div id="filter-item">
            <span class="title">快速查询:</span>
            <el-input v-model="apicodeSearch" placeholder="客户名称/客户编号/单号/交付人员/apiCode" style="width: 300px;" size="mini"></el-input>
            <el-button type="primary" size="mini">确定</el-button>
            <el-button type="text" style="margin-left: 800px" size="mini" @click="showMore">基本筛选</el-button>
          </div>

        </div>

        <el-table 
          :data="orderData.slice((this.orderCurrent - 1) * this.orderPageSize + 1, (this.orderCurrent - 1) * this.orderPageSize + 1 + this.orderPageSize)"
          border 
          style="font-size: 12px; color: black; margin-bottom: 80px">
          <el-table-column label="客户编号" prop="comId" width="75px;"></el-table-column>
          <el-table-column label="客户名称" prop="customerName" width="250px;"></el-table-column>
          <el-table-column label="客户简称" prop="comShortName" width="100px;"></el-table-column>
          <el-table-column label="apiCode" prop="apiCode"></el-table-column>
          <el-table-column label="单号" prop="crmNumber" width="75px;"></el-table-column>
          <el-table-column label="申请时间" prop="createTime" width="150px"></el-table-column>
          <el-table-column label="最后一次更新时间" prop="modifyTime" width="150px"></el-table-column>
          <el-table-column label="账号类型" prop="accountType" width="75px">
            <template slot-scope="scope">
              <p>{{scope.row.accountType === 1 ? '正式' : ''}}</p>
              <p>{{scope.row.accountType === 0 ? '测试' : ''}}</p>
            </template>
          </el-table-column>
          <el-table-column label="产品类型" prop="productType"></el-table-column>
          <el-table-column label="工单状态" prop="deliveryStatus">
            <template slot-scope="scope">
              <p>{{scope.row.deliveryStatus === 0 ? '待交付' : ''}}</p>
              <p>{{scope.row.deliveryStatus === 1 ? '开通账号中' : ''}}</p>
              <p>{{scope.row.deliveryStatus === 2 ? '已开通账号' : ''}}</p>
              <p>{{scope.row.deliveryStatus === 3 ? '退回' : ''}}</p>
              <p style="color: red">{{scope.row.deliveryStatus === 4 ? '工单异常' : ''}}</p>
              <p>{{scope.row.deliveryStatus === 5 ? '已交付' : ''}}</p>
            </template>
          </el-table-column>
          <el-table-column label="交付人员" prop="applicationName"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope" >
              <el-button type="text" size="mini" @click="reset(scope.row)">重新分配</el-button>
            </template>

          </el-table-column>
        </el-table>

        <div id="main-footer">
          <el-row>
            <el-col :span="12" style="display: flex">
              <span class="ps">每页显示: </span>
              <el-pagination 
                :page-sizes="[10, 20, 50]" 
                @size-change="sizeChange" 
                layout="sizes"
                style="margin-left: 10px"></el-pagination>
            </el-col>
            <el-col :span="12">
              <el-pagination 
                :total="orderTotal" 
                :current-page="orderCurrent" 
                :page-size="orderPageSize"
                @current-change="currentChange" 
                layout="total, prev, pager, next, jumper"
                style="text-align: right; padding-right: 10px"></el-pagination>
            </el-col>
          </el-row>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import FilterTime from '../components/FilterTime'
import Filter from '../components/Filter'
import api from '../http/api'
export default {
  name: 'gdxx',
  data() {
    return {
      isShowMore: true,
      isShow: true,
      orderData: [],
      orderTotal: 0,
      orderCurrent: 1,
      orderPageSize: 10,
      apicodeSearch: '',
      orderTime: {
        startTime: '',
        endTime: ''
      },
      lastReviewTime: {
        startTime: '',
        endTime: ''
      },
      gdData: {
        productType: [
          {
            id: 1,
            text: '不限',
            isActive: false
          },
          {
            id: 2,
            text: '企业微信',
            isActive: false
          },
          {
            id: 3,
            text: '策略引擎',
            isActive: false
          },
          {
            id: 4,
            text: '风险罗盘(标准版)',
            isActive: false
          }
        ],
        gdStatus: [
          {
            id: 1,
            text: '不限',
            isActive: false
          },
          {
            id: 2,
            text: '待交付',
            isActive: false
          },
          {
            id: 3,
            text: '开通账号中',
            isActive: false
          },
          {
            id: 4,
            text: '已开通账号',
            isActive: false
          },
          {
            id: 5,
            text: '退回', 
            isActive: false
          },
          {
            id: 6,
            text: '工单异常',
            isActive: false
          }
        ],
        accountType: [
          {
            id: 1,
            text: '不限',
            isActive: false
          },
          {
            id: 2,
            text: '测试',
            isActive: false
          },
          {
            id: 3,
            text: '正式',
            isActive: false
          }
        ]
      }
    }
  },
  components: {
    'filter-v': Filter,
    'filter-time': FilterTime
  },
  mounted () {
    this.init();
  },
  methods: {
    init: function () {
      this.getData()
    },
    async getData() {
      api.JH_info('/user/orderlist', 'post')
        .then(res => {
          this.orderData = res.data;
          this.orderTotal = res.data.length;
        })
        .catch(error => {
          console.log(error)
        })
    },
    showMore: function () {
      this.isShow = !this.isShow
    },
    changeShow: function () {
      console.log('123')
    },
    timeChange: function () {
      console.log('timeChange')
    },
    changeBackG: function (val) {
      val.isActive = !val.isActive;
    },

    // 重新分配
    reset: function (val) {
      console.log(val)
    },

    //页数显示
    sizeChange: function (val) {
      this.orderPageSize = val;
      this.orderCurrent = 1;
      
    },
    currentChange: function (val) {
      this.orderCurrent = val;
    },
  }
}
</script>

<style scoped>
  @import '../styles/body.css';
</style>