<!--登录页面-->
<template>

  <div class="login">
    <div class="container">
      <a href="/#/home/index"><img src="/imgs/login-logo.png" alt=""></a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">帐号登录</span><span class="sep-line">|</span><span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入帐号" v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <div class="btn-box">
            <a href="javascript:" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" @click="register">手机短信登录/注册</div>
            <div class="reg">立即注册<span>|</span>忘记密码？</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="https://www.imooc.com/" target="_blank">慕课网</a> <span>|</span>
        <a href="http://mi.futurefe.com/#/index" target="_blank">仿小米电商</a> <span>|</span>
        <a href="https://class.imooc.com/sale/fe2020?mc_marking=7146f9b0e67b8bde3fd07cfdd64362ae&mc_channel=syjptx2" target="_blank">慕课前端工程师</a>
      </div>
      <p class="copyright">Copyright ©2021 wuyiccc.com All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: '',
      userId: ''
    }
  },
  methods: {
    login() {
      let {username, password} = this;
      this.axios.post('/user/login', {
        username,
        password
      }).then((res) => {
        // 在cookie中存储用户的id，方便在信息展示页面根据userId去读取后端的用户信息接口
        this.$cookie.set('userId', res.id, {expires: '1M'});
        // to-do 保存用户名
        this.$store.dispatch('saveUserName', res.username); // 触发vuex的action的saveUserName方法
        this.$router.push('/home/index');
      })
    },
    register() {
      this.axios.post('/user/register', {
        username: this.username,
        password: this.password,
        email: this.username + '@163.com'
      }).then(() => {
        alert('注册成功');
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
@import "../assets/scss/reset.scss";
@import "../assets/scss/button.scss";
.login{
  &>.container{
    height:113px;
    img{
      width:auto;
      height:100%;
    }
  }
  .wrapper{
    background:url('/imgs/login-bg.jpg') no-repeat center;
    .container{
      height:576px;
      .login-form{
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width:410px;
        height:510px;
        background-color:#ffffff;
        position:absolute;
        bottom:29px;
        right:0;
        h3{
          line-height:23px;
          font-size:24px;
          text-align:center;
          margin:40px auto 49px;
          .checked{
            color:#FF6600;
          }
          .sep-line{
            margin:0 32px;
          }
        }
        .input{
          display:inline-block;
          width:348px;
          height:50px;
          border:1px solid #E5E5E5;
          margin-bottom:20px;
          input{
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .btn{
          width:100%;
          line-height:50px;
          margin-top:10px;
          font-size:16px;
        }
        .tips{
          margin-top:14px;
          display:flex;
          justify-content:space-between;
          font-size:14px;
          cursor:pointer;
          .sms{
            color:#FF6600;
          }
          .reg{
            color:#999999;
            span{
              margin:0 7px;
            }
          }
        }
      }
    }
  }
  .footer{
    height:100px;
    padding-top:60px;
    color:#999999;
    font-size:16px;
    text-align:center;
    .footer-link{
      a{
        color:#999999;
        display:inline-block;
      }
      span{
        margin:0 10px;
      }
    }
    .copyright{
      margin-top:13px;
    }
  }
}
</style>
