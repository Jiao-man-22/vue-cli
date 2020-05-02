<template>  
<el-container class="home_container">
  <el-header>
      <div>
          <img src="../assets/logo.png" alt="">
          <span>电商管理系统</span>
      </div>
      <el-button type=info @click="Logout">退出</el-button>
      </el-header>
      <!-- 主题内容区 -->
  <el-container>
      <!-- 侧边栏 -->
    <el-aside width="200px">
       <el-menu default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#333744"
      text-color="#fff"
      :router="true">
      <!-- 一级菜单区域 -->
      <el-submenu index="1">
        <!-- 一级菜单模板区域 -->
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <!-- 二级菜单区域 可以使用 el-submenu进行套娃-->
        <el-menu-item index="1-4-1">
          <!-- 二级菜单模板 -->
          <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        </el-menu-item>
        <!-- 一级菜单 -->
        <el-menu-item index="1-4-2">
          <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        </el-menu-item>
        <!-- 一级菜单 -->
        <el-menu-item index="1-4-3">
          <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        </el-menu-item>
      </el-submenu>
      <!-- 一级菜单 -->
        <el-menu-item index="1-4-4">
          <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        </el-menu-item>
       <el-menu-item index="1-4-5">
          <!-- 二级菜单模板 -->
          <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        </el-menu-item>
    </el-menu></el-aside>
    <el-main>
      <!-- 路由占位符 -->
        <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
    methods:{
        Logout(){
            //清空token，在重定向
            window.sessionStorage.clear;
            this.$router.push('/login_1')

        }
    }

}
</script>

<style lang="scss" scoped>
.home_container{
    height: 100%;
}
.el-header{
    background-color: #374555;
    display: flex;
    justify-content: space-between;
    padding: 0;
    align-items: center;
    color: #fff;
    font-size: 20px;
    >div{
        height: 100%;
        display: flex;
        align-items: center;
        span{
            margin-left: -30px;
        }
    }
}
.el-aside{
    background-color: #333744;
    .el-menu{
      border-right: none;
    }
    
}
.el-main{
    background-color: #eaedf1;
}
img{
    transform: scale(0.3);
    margin:0;
    padding: 0;
    transform: translate(-50);
}
</style>