<!--首页核心-->
<template>
  <div class="index">
    <div class="container">

      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(subItem, subIndex) in item" :key="subIndex">
                    <a :href="'/#/home/product/' + subItem.id">
                      <img :src="subItem.img" alt="">
                      {{ subItem.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:">电视 盒子</a>
              <!--              <div class="children"></div>-->
            </li>
            <li class="menu-item">
              <a href="javascript:">笔记本 平板</a>
              <!--              <div class="children"></div>-->
            </li>
            <li class="menu-item">
              <a href="javascript:">家电 插线板</a>
              <!--              <div class="children"></div>-->
            </li>
            <li class="menu-item">
              <a href="javascript:">出行 穿戴</a>
              <!--              <div class="children"></div>-->
            </li>
            <li class="menu-item">
              <a href="javascript:">智能 路由器</a>
              <!--              <div class="children"></div>-->
            </li>
            <li class="menu-item">
              <a href="javascript:">电源 配件</a>
              <!--              <div class="children"></div>-->
            </li>
            <li class="menu-item">
              <a href="javascript:">生活 箱包</a>
              <!--              <div class="children"></div>-->
            </li>
          </ul>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a :href="'/#/home/product/' + item.id"><img :src="item.img" alt=""></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a :href="'/#/home/product/' + item.id" v-for="(item, index) in adsList" :key="index">
          <img v-lazy="item.img" alt="">
        </a>
      </div>
      <div class="banner">
        <a href="/#/home/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt="">
        </a>
      </div>
    </div>

    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/home/product/35">
              <img v-lazy="'/imgs/mix-alpha.jpg'" alt="">
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr, index) in phoneList" :key="index">
              <div class="item" v-for="(item, subIndex) in arr" :key="subIndex">
                <span :class="{'new-pro':subIndex % 2 === 0}">新品</span>
                <span :class="{'kill-pro':subIndex % 2 === 1}">秒杀</span>
                <div class="item-img">
                  <img v-lazy="item.mainImage" alt="">
                </div>
                <div class="item-info">
                  <h3>{{ item.name }}</h3>
                  <p>{{ item.subtitle }}</p>
                  <p class="price" @click="addCart(item.id)">{{ item.price | currency }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal title="提示" sure-text="查看购物车" btn-type="1" modal-type="middle" :show-modal="showModal" @submit="goToCart" @cancel="showModal=false">
      <template v-slot:body>
        <p>商品添加成功</p>
      </template>
    </modal>
  </div>
</template>

<script>
import ServiceBar from "@/components/ServiceBar";
import {swiper, swiperSlide} from 'vue-awesome-swiper';
import Modal from '@/components/Modal';
import 'swiper/dist/css/swiper.css';

export default {
  name: "Index",
  components: {
    ServiceBar,
    swiper,
    swiperSlide,
    Modal
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: 'cube',
        cubeEffect: {
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      slideList: [
        {
          id: '42',
          img: '/imgs/slider/slide-1.jpg'
        },
        {
          id: '45',
          img: '/imgs/slider/slide-2.jpg'
        },
        {
          id: '46',
          img: '/imgs/slider/slide-3.jpg'
        },
        {
          id: '45',
          img: '/imgs/slider/slide-2.jpg'
        },
        {
          id: '42',
          img: '/imgs/slider/slide-1.jpg'
        }

      ],
      menuList: [
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9'
          },
          {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版'
          },
          {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro'
          },
          {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区'
          },
        ],
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9'
          },
          {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版'
          },
          {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro'
          },
          {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区'
          },
        ],
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9'
          },
          {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版'
          },
          {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro'
          },
          {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区'
          },
        ],
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9'
          },
          {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版'
          },
          {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro'
          },
          {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区'
          },
        ],
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9'
          },
          {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版'
          },
          {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro'
          },
          {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区'
          },
        ],
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9'
          },
          {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版'
          },
          {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro'
          },
          {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区'
          },
        ],
      ],
      adsList: [
        {
          id: 33,
          img: '/imgs/ads/ads-1.png'
        },
        {
          id: 48,
          img: '/imgs/ads/ads-2.jpg'
        },
        {
          id: 45,
          img: '/imgs/ads/ads-3.png'
        },
        {
          id: 47,
          img: '/imgs/ads/ads-4.jpg'
        },
      ],
      phoneList: [],
      showModal: false
    }
  },
  // 过滤器
  filters: {
    currency(val) {
      if (!val) {
        return '0.00';
      }

      return '￥' + val.toFixed(2) + '元';
    }
  },
  mounted() {
    this.init();
  }
  ,
  methods: {
    init() {
      this.axios.get('/products', {
        params: {
          categoryId: 100012,
          pageSize: 14
        }
      }).then((res) => {
        console.log('###phoneList:', res.list);
        this.phoneList = [res.list.slice(6, 10), res.list.slice(10, 14)]; // 前6条数据是给其他功能使用的
      })
    },
    addCart() {
      this.showModal = true;
      return;
      // this.axios.post('/carts', {
      //   productId: id,
      //   selected: true
      // }).then(()=>{
      //
      // }).catch(()=>{
      //   this.showModal = true;
      // })
    },
    goToCart() {
      this.$router.push('/cart');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/base.scss";
@import "../../../assets/scss/mixin.scss";
@import "../../../assets/scss/config.scss";

.index {
  .swiper-box {

    .nav-menu {
      box-sizing: border-box;
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      padding: 26px 0px;
      background-color: #55585A7A;

      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;

          > a {
            display: block;
            position: relative;
            font-size: 16px;
            color: #ffffff;
            padding-left: 30px;

            &:after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: ' ';
              @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
            }
          }

          &:hover {
            background-color: $colorA;

            .children {
              display: block;
            }
          }

          .children {
            display: none;
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;

            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;

              li {
                z-index: 10;
                height: 75px;
                line-height: 75px;;
                width: 241px;
                flex: 1;
                padding-left: 23px;

                a {
                  color: $colorB;
                  font-size: 14px;

                  img {
                    width: 42px;
                    height: 45px;

                    margin-right: 15px;
                    vertical-align: middle;
                  }
                }


              }
            }
          }
        }
      }

    }

    .swiper-container {
      height: 451px;

      .swiper-button-prev {
        position: absolute;
        left: 274px;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;

    > a {
      width: 296px;
      height: 167px;
    }
  }

  .banner {
    margin-bottom: 50px;
  }

  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;

    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }

    .wrapper {
      display: flex;

      .banner-left {
        margin-right: 16px;

        img {
          width: 224px;
          height: 619px;
        }
      }

      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;

          &:last-child {
            margin-bottom: 0px;
          }

          .item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;

            span {
              display: none;
              width: 67px;
              height: 24px;
              line-height: 24px;
              color: #ffffff;

              &.new-pro {
                display: inline-block;
                background-color: #7ECF68;
              }

              &.kill-pro {
                display: inline-block;
                background-color: #E82626;
              }
            }

            .item-img {
              img {
                width: 100%;
                height: 195px;
              }
            }

            .item-info {
              h3 {
                font-size: $fontJ;
                color: $colorB;
                line-height: $fontJ;
                font-weight: bold;
              }

              p {
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }

              .price {
                color: #F20A0A;
                font-size: $fontJ;
                font-weight: bold;
                cursor: pointer;

                &:after {
                  content: ' ';
                  @include bgImg(22px, 22px, '/imgs/icon-cart-hover.png');
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }


        }
      }
    }
  }

}

</style>
