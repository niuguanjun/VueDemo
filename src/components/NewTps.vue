<template>
  <div id="new-tps">
    <el-dialog title="新增配置" width="40%" center :visible.sync="newtpsVisible" :before-close="cancel">
      <el-form :model="newTps">
        <el-form-item label="APICODE: " label-width="120px">
          <select style="padding-left: 15px; padding-right: 15px; height: 35px; width: 400px">
            <option value="133321" label="请选择"></option>
          </select>
        </el-form-item>
        <el-form-item label="tps: " label-width="120px">
          <el-input v-model="newTps.tps" placeholder="输入tps的值" style="width: 400px"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" style="text-align: center">
        <el-button size="mini" @click="cancel">取消</el-button>
        <el-button type="primary" @click="turenewTps" size="mini">确定</el-button>
      </span>

    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTps: {
        apicode: '',
        tps: ''
      }
    }
  },
  props: ['newtpsVisible'],
  methods: {
    cancel: function () {
      this.$emit('newTps', false);
    },
    turenewTps: function () {
      this.$emit('newTps', true);
    }
  }
}
</script>

<style scoped>

</style>