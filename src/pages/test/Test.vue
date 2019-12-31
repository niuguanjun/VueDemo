<template>
  <div id="test">
    <p>尝试修改el-table的行高</p>
    <el-table 
      :data="testData"
      border 
      style="width: 50%; margin-left: 30px; font-size: 13px">
      <el-table-column label="编号" type="index"></el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="年龄" prop="age"></el-table-column>
      <el-table-column label="备注" prop="other"></el-table-column>
    </el-table>
    <el-table 
      :data="testData"
      border 
      style="width: 50%; margin-left: 30px; font-size: 13px; margin-top: 40px"
      class="test">
      <el-table-column label="编号" type="index"></el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="年龄" prop="age"></el-table-column>
      <el-table-column label="备注" prop="other"></el-table-column>
    </el-table>
    <p>修改el-form-item的宽度问题</p>
    <el-form :model="post" label-width="100px">
      <div class="form">
        <div class="form-left">
          <el-form-item label="one: " class="item" prop="one">
            <el-input v-model="post.one" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="two: " class="item" prop="one">
            <el-input v-model="post.two" placeholder=""></el-input>
          </el-form-item>
        </div>
        <div class="form-right">
          <el-form-item label="three: " class="item" prop="three">
            <el-input v-model="post.three" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="four: " class="item" prop="three">
            <el-input v-model="post.four" placeholder=""></el-input>
          </el-form-item>
        </div>
      </div>
    </el-form>

  </div>  
</template>

<script>
import Test2  from './Test2'
export default {
  data() {
    return {
      test: {
        first: ''
      },
      post: {
        one: '',
        two: '',
        three: '',
        four: ''
      },
      testData: [
        {
          name: 'oneName',
          age: 15,
          other:'啥也没有'
        },
        {
          name: 'twoName',
          age: 15,
          other:'啥也没有'
        },
        {
          name: 'thirdName',
          age: 15,
          other:'啥也没有'
        },
        {
          name: 'fourthName',
          age: 15,
          other:'啥也没有'
        },
        {
          name: 'fiveName',
          age: 15,
          other:'啥也没有'
        },
        {
          name: 'sixName',
          age: 15,
          other:'啥也没有'
        }
      ]
    }
  },
  components: {
    'test-component': Test2
  },
  methods: {
  }
}
</script>

<style>
.test {
  background-color: red;
}
.test .el-table__row {
  height: 45px;
  min-height: 0px;
}
.form .form-left {
  width: 50%
}
.form .form-right {
  width: 50%
}
</style>