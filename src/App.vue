<template>
  <div id="app">
    <el-container>
      <el-header class="main-header" >
        <el-row :gutter="20" style="line-height: 60px;">
          <el-col :span="18">
            <p style="color: white">
              <el-button type="text" style="color: white" @click="collapseEvt">测试</el-button>
            </p>
          </el-col>
          <el-col :span="6" style="text-align:right">
            <p>
              <el-button type="text" style="color: white" icon="el-icon-lock" @click="reset">重置密码</el-button>
              <el-button type="text" style="color: white" @click="exit">退出</el-button>
            </p>
          </el-col>
        </el-row>
      </el-header>
      <el-container class="con-bg">
        <el-aside style="margin-top:0px">
          <el-menu class="el-menu-vertical-demo" default-active="1" unique-opened :collapse="isCollapse" 
            style="height: 100px; text-align: left" theme="dark" router >
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>客户中心</template>
              <el-menu-item index="/customer" @click="skip(customer)">客户管理</el-menu-item> 
              <el-menu-item index="/tps" @click="skip(tps)">tps管理</el-menu-item>
              <el-menu-item index="/zdy" @click="skip(zdy)">自定义报告映射</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-time"></i>工单管理</template>
              <el-menu-item index="/gdxx" @click="skip(gdxx)">工单信息</el-menu-item>
              <el-menu-item index="/login" @click="skip(login)">登录</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-plus"></i>日志信息</template>
              <el-menu-item index="/log" @click="skip(log)">日志</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title"><i class="el-icon-plus"></i>策略引擎管理</template>
              <el-menu-item index="/verification">验证管理</el-menu-item>
              <el-menu-item index="/beforepaying">贷前管理</el-menu-item>
              <el-menu-item index="/repaying">贷中管理</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title"><i class="el-icon-picture"></i>测试信息</template>
              <el-menu-item index="/test">测试页面</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main class="main-con">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <reset-view :visible.sync = "isActive" @progressEvent = "changeVisible"></reset-view>
  </div>
  
</template>

<script>
import ResetView from '../src/components/reset'
export default {
  name: 'App',
  data() {
    return {
      customer: 'customer',
      tps: 'tps',
      gdxx: 'gdxx',
      login: 'login',
      zdy: 'zdy',
      log: 'log',
      isActive: false,
      isCollapse: false,
    }
  },
  components: {
    'reset-view': ResetView
  },
  methods: {
    skip: function(val) {
    },
    exit: function () {
      console.log('exit')
    },
    reset: function () {
      this.isActive = true
    },
    changeVisible: function (data) {
      this.isActive = false;
    },
    collapseEvt: function() {

    }
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
body .el-table th.gutter {
  display: table-cell!important;
}
.main-con {
  position: absolute;
  padding: 0px;
  background-color: #fff;
  top: 0px;
  left: 0px;
  right: 0px;
  left: 187px;
  bottom: 0px;
  transition: left .5s;
}
.con-bg {
  position: absolute;
  top: 60px;
  width: 100%;
  bottom: 0px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 186px;
  min-height: 400px;
}
.main-header {
  /* display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: black;
  color: white */
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 60px;
  background-color: black;
  color: white;
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.4);
  margin-right: 5px;
}
::-webkit-scrollbar-thumb:hover {
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #CCC;
  opacity: .8;
}

</style>
