<!--商品核心-->
<template>
  <div class="product">
    <ProductParam>
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </ProductParam>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
  </div>
</template>

<script>
import ProductParam from "@/components/ProductParam";

export default {
  name: "Product",
  components: {
    ProductParam
  }
}
</script>

<style lang="scss" scoped>

.product {
  .h {
    height: 150px;
    background-color: #7ECF68;
  }
  button {
    margin-left: 10px;
  }
}

</style>
