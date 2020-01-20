<template>
  <div id="test">
    <div v-for="item of testData" :key="item.id">
      <el-checkbox @change="getSelectList(item)" v-model="item.isChecked">{{ item.name }}</el-checkbox>
    </div>
    <el-button type="primary" size="mini" @click="getAllSelect">获取被点击的内容</el-button>
    <el-checkbox label="abc" v-model="activeName" @change="test"></el-checkbox>
  </div>  
</template>

<script>
import api from '../../http/api'
export default {
  data () {
    return {
      testData: [
        {
          id: '1',
          name: '第一个'
        },
        {
          id: '2',
          name: '第二个'
        },
        {
          id: '3',
          name: '第三个'
        }
      ],
      activeName: '',
      allChecked: []
    }
  },
  mounted () {
  },
  methods: {
    getSelectList: function (val) {
      console.log(val.name, val.isChecked);
      if (val.isChecked) {
        this.allChecked.push(val)
      }
      if (!val.isChecked) {
        this.allChecked.forEach(item => {
          if (item.id == val.id) {
            var index = this.allChecked.indexOf(item);
            this.allChecked.splice(index, 1);
          }
        })
      }
    },
    getAllSelect: function () {
      console.log(this.allChecked);
    },
    test: function () {
      console.log(this.activeName)
    }
  }
}
</script>

<style>

</style>