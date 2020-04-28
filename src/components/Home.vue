<template>  
<el-container class="home_container">
  <el-header>
      <div>
          <img src="../assets/logo.png" alt="">
          <span>电商管理系统</span>
      </div>
      <el-button type=info @click="Logout">退出</el-button>
      </el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main</el-main>
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