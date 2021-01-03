<template>

  <!--  slide是下划-->
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>标题</span>
          <a href="javascript:" class="icon-close" @click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <a href="javascript:" class="btn" v-if="btnType==='1'" @click="$emit('submit')">确定</a>
          <a href="javascript:" class="btn" v-else-if="btnType==='2'" @click="$emit('cancel')">取消</a>
          <div class="btn-group" v-else>
            <a href="javascript:" class="btn" @click="$emit('submit')">确定</a>
            <a href="javascript:" class="btn" @click="$emit('cancel')">取消</a>
          </div>
        </div>
      </div>
    </div>
  </transition>


</template>

<script>
export default {
  name: "Modal",
  props: {

    // 1-是否显示弹框
    showModal: {
      type: Boolean,
      default: true
    },

    // 2-弹框标题
    title: String,

    // 3-弹框类型：小small 中middle 大large 表单form
    modalType: {
      type: String,
      default: 'form'
    },

    // 4-按钮类型: 1: 确定 2：取消 3：确定+取消
    btnType: String,

    // 5-确定按钮文本
    sureText: {
      type: String,
      default: '确定'
    },
    // 6-取消按钮文本
    cancelText: {
      type: String,
      default: '取消'
    }

  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/modal.scss";

</style>