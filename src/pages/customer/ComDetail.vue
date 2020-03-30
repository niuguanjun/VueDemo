<template>
  <div id="comdetail">
    <div id="main-title">
      <el-row type="flex" justify="space-between">
        <el-col :span="6">
          <i class="el-icon-document" style="margin-right:8px"></i>
          {{comName}}
        </el-col>
        <el-col :span="6" style="text-align: right">
          <el-button size="mini" @click="backTo" class="el-icon-caret-left">返回</el-button>
        </el-col>
      </el-row>
    </div>
    <el-tabs class="main-contents" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane class="detail-view" label="客户信息" name="third">
        <guest-info></guest-info>
      </el-tab-pane>
      <el-tab-pane class="detail-view" label="apiCode" name="first">
        first
      </el-tab-pane>
      <el-tab-pane class="detail-view" label="客户进展" name="second">
        second
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
import guestInfo from '../customer/guest_info'
export default {
  name: 'comdetail',
  data () {
    return {
      comName: '',
      comId: '',
      activeName: 'first'
    }
  },
  components: {
    'guest-info': guestInfo
  },
  mounted () {
    this.comName = this.$route.query.comName
    this.comId = this.$route.query.comId
  },
  methods: {
    backTo: function () {
      this.$router.go(-1)
    },
    handleClick: function (val) {
      console.log(val.name)
    }
  }
}
</script>

<style scoped>
  @import '../../styles/body';
  .main-contents{
    padding: 10px 0px;
    z-index: 1000;
    position: fixed !important;
    left: 50%;
  }
  .detail-view {
    padding: 16px 32px;
  }
</style>
