<template>
  <div class="home_container">
    <el-container>
      <el-header
        >this is home
        <el-button type="info" @click="logout"> 退出 </el-button></el-header
      >
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "homeIndex",
  methods: {
    logout() {
        window.sessionStorage.clear()
        this.$router.push('/login')
    },
  },
};
</script>