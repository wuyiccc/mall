<!--商品核心-->
<template>
  <div class="product">
    <ProductParam>
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </ProductParam>
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
  button {
    margin-left: 10px;
  }
}

</style>
