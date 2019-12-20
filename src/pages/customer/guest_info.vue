<template>
  <section>
    <div class="containers">
      <el-form :inline="true" label-width="100px" label-position="left" size="small">
        <h5>客户信息</h5>
        <el-form-item label="客户编号">323</el-form-item>
        <el-form-item label="客户名称">客户名称</el-form-item>
        <el-form-item label="客户简称">客户简称ddd</el-form-item>
      </el-form>
    </div>
  </section>
</template>

<script>
export default {
  props: ['info'],
  data () {
    return {
      guestInfo: ''
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>