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
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <ServiceBar></ServiceBar>
  </div>
</template>

<script>
import ServiceBar from "@/components/ServiceBar";
import {swiper, swiperSlide} from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

export default {
  name: "Index",
  components: {
    ServiceBar,
    swiper,
    swiperSlide
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
          id: '',
          img: '/imgs/slider/slide-4.jpg'
        },
        {
          id: '',
          img: '/imgs/slider/slide-5.jpg'
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
      ]


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

          >a {
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
}

</style>
