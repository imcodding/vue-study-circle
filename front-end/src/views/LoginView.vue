<template>
  <div class="loginContainer">
    <div class="loginBox">
      <div class="title">LOGIN</div>
      <input type="text" placeholder="아이디" v-model="userId" /><br />
      <input type="password" placeholder="패스워드" v-model="password" /><br />
      <button class="loginBtn" @click="login()">로그인</button><br />
      <div class="register" @click="register()">회원가입</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
      password: ''
    }
  },
  methods: {
    login() {
      let params = {};
      params.userId = this.userId;
      params.password = this.password;
      
      this.$router.push('/home');
    },
    register() {

    }
  }
}
</script>

<style>

</style>