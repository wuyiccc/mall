<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://www.imooc.com/" target="_blank">慕课网</a> <span>|</span>
      <a href="http://mi.futurefe.com/#/index" target="_blank">仿小米电商</a> <span>|</span>
      <a href="https://class.imooc.com/sale/fe2020?mc_marking=7146f9b0e67b8bde3fd07cfdd64362ae&mc_channel=syjptx2" target="_blank">慕课前端工程师</a>
    </div>

    <div class="copyright">Copyright ©2021 <span class="domain">wuyiccc.com</span> All Rights Reserved.</div>

  </div>
</template>

<script>
export default {
  name: "NavFooter"
}
</script>

<style lang="scss" scoped>

.footer {
  height: 234px;
  border-top: 4px solid #FF6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;

  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }

  }

  .footer-link {
    a {
      //a标签的颜色优先级大于父级标签的优先级，所以需要额外再设置一遍
      color: #999999;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }

    margin-bottom: 13px;
  }

  .copyright {
    .domain {
      color: #FF6600;
    }
  }

}

</style>
