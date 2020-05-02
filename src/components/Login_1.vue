<template>
  <div class="Login_1_container">
      <div class="Login_1_box">
          <!-- 用户头像区 -->
          <div class="avatar_box">
              <img src="../assets/logo.png" alt="这是用户头像盒子">
          </div>
          <!-- 表单内容区 -->
          <!-- 动态为form 表单添加属性 对象 -->
          <!-- 绑定规则对象 -->
          <!--ref 绑定组件的引用对象  -->
          <el-form ref="component_forms" :model="login_form"  :rules="login_form_rules"  label-width="0px" class="login_form">
              <!-- 用户名 -->
            <el-form-item prop="username">
            <el-input v-model="login_form.username" prefix-icon="el-icon-user" ></el-input>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item prop="password">
            <el-input v-model="login_form.password" type="password" prefix-icon="el-icon-lock" ></el-input>
            </el-form-item>
            <!-- 登陆   重置 -->
            <el-form-item class="btns">
             <el-button type="primary" @click="p_login_form">登陆</el-button>
             <el-button type="info" @click="reset_form">重置</el-button>
            </el-form-item>
          </el-form>

      </div>
  </div>
</template>

<script>
export default {
    //属性绑定,表单的数据绑定对象
    data(){

        return{
            // 创建对象 存放user and password
            login_form:{
                username:'',
                password:''
            },
            //这是表单验证规则对象

            login_form_rules:{
            username:[
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
            password:[
            { required: true, message: '请输入密码名称', trigger: 'blur' },
            { min: 6, max: 11, message: '长度在 6 到 11 个字符', trigger: 'blur' }

            ]
                

            }
        }
    },
    //绑定组件动作
    methods:{
        //重置动作
        reset_form(){
            this.$refs.component_forms.resetFields();
        },
        //登陆预验证
        p_login_form(){
            this.$refs.component_forms.validate( async valid =>{
                // 判断返回值false就不发放出请求
                if(!valid) return;
                //连接服务器 服务器地址和表单数据绑定的对象
                //await 修饰 需要异步 async,从后端返回来的数据中抽出需要 data数据
                const {data:res}=await this.$http.post("login",this.login_form);
                //判断状态
                if(res.meta.status!==200) return this.$message.error("登陆失败"),
                this.$message.success("登陆成功");
                //登陆成功后保存token
                window.$sessionStorage.setItem("token",res.data.token);
                //编程式跳转
                this.$router.push("url");

            });
        }
    }
}
</script>

<style>

.Login_1_container{
    background-color: #253145;
    height: 100%;
    
}
.Login_1_box{
    width: 450px;
    height: 400px;
    background-color:white;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform:translate(-50%,-25%);
}
.avatar_box{
    height: 130px;
    width: 130px;
    border: 1px solid #eeeeee;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 10px;
    box-shadow: 0 0 10px #dddddd;
    background-color: #ffffff;
}
.avatar_box img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eeeeee;
}
.login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    transform: translate(0,-35%);
}
.btns{
    display: flex;
    justify-content: flex-end;
}

</style>
