<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
        <img src="@/views/login/logo.png" alt="" />
      </div>
      <!-- 登陆表单 -->
      <!-- 用户名 -->
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="loginFormRef"
        label-width="0px"
        class="login_from"
      >
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="iconfont icon-user"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="iconfont icon-3702mima"
            type="password"
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginIndex",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456",
      },
      loginRules: {
        username: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请选择活动区域", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    login() {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) {
          return;
        }
        //发送请求进行登录
        const { data: res } = await this.$http.post("login", this.loginForm);
        // console.log(res);
        if (res.meta.status !== 200) {
          return this.$message.error("登录失败:" + res.meta.msg); //console.log("登录失败:"+res.meta.msg)
        }
        this.$message.success("登录成功");
        //保存token
        window.sessionStorage.setItem("token", res.data.token);
        // 导航至/home
        this.$router.push("/home");
      });
    },
    resetForm() {
      this.$refs.loginFormRef.resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b5b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 3px;
}
.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
.login_from {
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 0px 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>