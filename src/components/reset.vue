<template>
  <div id="reset">
    <el-dialog title="重置密码" :visible.sync="visible" width="50%" :before-close="cancel">

      <el-form :model="password" size="small" label-width="12%">
        <el-form-item label="新密码: " prop="newpass" required  style="margin-bottom: 35px;">
          <el-input v-model="password.newpass" type="password" clearable auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="确认密码: " prop="turepass" required >
          <el-input v-model="password.turepass" type="password" clearable ></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" style="text-align: center; padding-top: 20px">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="submit">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      password: {
        newpass: '',
        turepass: ''
      },
      post: {},
      rules: {}
    }
  },
  props: ['visible'],
  methods: {
    cancel: function () {
      this.$emit('progressEvent', false)
    },
    submit: function () {
      this.$emit('progressEvent', false)
    }
  }
}
</script>

<style scoped>

</style>
