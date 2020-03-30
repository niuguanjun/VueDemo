<template>
  <div>
    <el-tabs class="as" v-model="activeName">
      <el-tab-pane label="商户配置" name="first">
        <cus-list></cus-list>
      </el-tab-pane>
      <el-tab-pane label="产品配置" name="second">
        <pro-list></pro-list>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import CusList from './cusList'
import ProList from './proList'
export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  mounted () {
    var activeN = this.$route.query.active
    if (activeN) {
      this.activeName = activeN
    }
  },
  methods: {

  },
  components: {
    'cus-list': CusList,
    'pro-list': ProList
  }
}
</script>

<style>
@import '../../../styles/body.css';
</style>
