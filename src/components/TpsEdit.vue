<template>
  <div id="tpsEdit">
    <el-dialog title="修改配置" :visible.sync="tpsVisible" width="40%" :before-close="tpscancel" center >

      <el-form :model="tpsData" class="tps-main">
        <el-form-item label="APICODE: " prop="apicode" label-width="120px">
          <select style="height: 36px; padding-left: 15px; padding-right: 15px; width: 380px">
            <option value="" :label="editApicode.apicode"></option>
          </select>
        </el-form-item>

        <el-form-item label="tps: " prop="tps" label-width="120px">
          <el-input v-model="editApicode.tps" style="width: 380px"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog_footer" style="text-align: center">
        <el-button size="mini" @click="tpscancel">取消</el-button>
        <el-button type="primary" size="mini" @click="tureTps">确认</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data () {
    return {
      tpsData: {
        apicode: '3002111',
        tps: '200'
      },
      testlabel: ['123', '234', '345', '3234'],
      testEdit: {
        apicode: '3002989'
      },
      testapicode: '3002111'
    }
  },
  props: ['tpsVisible', 'editApicode'],
  methods: {
    tpscancel: function () {
      console.log('123')
      this.$emit('changeTpsvisible', false)
    },
    tureTps: function () {
      console.log('tureTps')
      this.$emit('changeTpsvisible', true)
    }
  }
}
</script>

<style scoped>
.tps-main {
  text-align: initial;
}
.el-dialog__header {
  border-bottom: 1px solid red;
}
</style>
