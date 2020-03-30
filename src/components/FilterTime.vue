<template>
  <div id="filter-time">
    <span style="margin-right: 10px;">{{title}}</span>
    <el-date-picker
      v-model="post.startTime"
      placeholder="开始时间"
      size="small"
      type="date"></el-date-picker>
    <span>-</span>
    <el-date-picker
      v-model="post.endTime"
      placeholder="结束时间"
      size="small"
      type="date"></el-date-picker>
    <el-button type="info" size="small" @click="cancelBtn">不限</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      post: {
        startTime: '',
        endTime: ''
      }
    }
  },
  props: ['title'],
  methods: {
    cancelBtn: function () {
      this.post.startTime = ''
      this.post.endTime = ''
    }
  }
}
</script>

<style scoped>
#filter-time {
  display: inline;
  border-bottom: 1px dashed #d4d4d4;
  padding: 6px 28px;
  font-size: 13px;
}
</style>
