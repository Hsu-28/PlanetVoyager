<template>
    <div id="itinerary">
      <div class="planet-bg">
        <img src="@/assets/image/itinerary_moon/moon-bg.png" alt="moon">
      </div>
      <div class="main-container" data-scroll-container>
        <div
          class="scrollsection"
          data-scroll-section
          v-for="(item, index) in itineraryItems"
          :key="index"
        >
          <!-- 旅程名稱 -->
          <div class="title" style="writing-mode: vertical-lr" data-scroll data-scroll-speed="1">
            <h1>{{ item.title }}</h1>
            <p>{{ item.subtitle1 }}</p>
            <p>{{ item.subtitle2 }}</p>
          </div>
          <!-- Schedule Section -->
          <div :class="['schedule-section', `schedule-section${index + 1}`]" data-scroll data-scroll-speed="2">
            <div class="schedule" :class="'schedule' + (index + 1)">
              <div class="schedule-text">
                <h3>{{ item.day }}</h3>
                <p>{{ item.description }}</p>
              </div>
              <div class="schedule-pic">
                <img
                  class="image"
                  v-for="(pic, picIndex) in item.pictures"
                  :key="picIndex"
                  :src="pic"
                  @click="showPic(pic)"
                >
              </div>
            </div>
            <div class="schedule-big-pic">
              <img id="bigpic" class="image" :src="item.bigPicture">
            </div>
          </div>
        </div>
        <!-- 空白 -->
        <div class="scrollsection" data-scroll-section>
          <div class="blank-space"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import LocomotiveScroll from 'locomotive-scroll';
  
  export default {
    data() {
      return {
        scrollInstance: null,
        showFooter: true,
        itineraryItems: [
          {
            title: '月球巡禮',
            subtitle1: '用你的一小步',
            subtitle2: '見證人類的一大步',
            day: 'Day1 旅程啟航！',
            description: '從地球啟程後可飽覽星際風光，飛行十四個小時後，我們會抵達偉諭航空站，稍作休息後再前往月球。',
            pictures: [
              '@/assets/image/itinerary_moon/moontest.jpg',
              '',
              'https://picsum.photos/100/100'
            ],
            bigPicture: 'https://picsum.photos/300/200'
          },
          
        ]
      }
    },
    methods: {
      showPic(pic) {
        console.log(1);
        document.getElementById("bigpic").src = pic;
      },
      mounted() {
        // Initialize Locomotive Scroll
        const scroll1 = new LocomotiveScroll({
          el: document.querySelector('.main-container'),
          direction: 'horizontal',
          smooth: true,
          lerp: 0.05,
          getSpeed: true,
          tablet: {
            smooth: true
          },
          smartphone: {
            smooth: true
          }
        });
      },
      beforeUnmount() {
        document.body.style.height = `auto`;
        if (this.scrollInstance) {
          this.scrollInstance.destroy();
        }
      },
    }
  }
  </script>
  


<style scoped lang="scss">
#itinerary {

.schedule-big-pic {
    opacity: 1;
}

box-sizing: border-box;
color: $white;
line-height: 1.5;
position: relative;

// .c-scrollbar {
//     display: none;
// }

img {
    max-width: 100%;
    vertical-align: baseline;
    object-fit: cover;
    overflow: hidden;
}

body {
    overflow: hidden;
    width: 100%;
    // height: 100%;
}

.title {
    h1 {
        font-size: $h2-l;

    }

    p {
        position: relative;
        top: 25vh;
    }
}

.planet-bg {
    position: absolute;
    left: 0;
    bottom: 0;
}

.main-container {
    display: flex;
    height: 100vh;
}

.scrollsection {
    height: 100vh;
    display: flex;
    // margin-left: 10vh;
    padding: 20vh 5vh 0vh 0vh;
    overflow: visible;
    &:first-child{
        padding-left: 40vh;
    }
    &:last-child{
        padding-right: 10vh;
    // &:first-child{
    //     padding-left: 10vh;
    // }
    }
    .schedule-section {
        height: 100%;
        display: flex;
        flex-direction: column;
        margin-left: 5vh;

        .schedule-text {
            position: relative;
        }

        .schedule-text::after {
            position: absolute;
            top: 100%;
            left: 120%;
            content: url(@/assets/image/donate/down.svg);
            transform: rotate(-45deg);
        }
    }

    // 第一塊
    .schedule-section1 {
        .schedule-pic {
            position: relative;
            bottom: 10%;
            right: 5%;
            width: 45%;
        }

        .schedule-big-pic {
            margin-top: 5vh;
        }
    }

    // 第二塊
    .schedule-section2 {
        .schedule {
            order: 2;
        }

        .schedule-big-pic {
            order: 1;
            width: 300px;
            height: 200px;
        }
    }

    div.schedule2 {
        position: relative;
        display: block;

        .schedule-pic {
            position: relative;
            top: -5%;
            left: 50%;
            width: 50%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            img {
                width: 30%;
            }
        }

        .schedule-text {
            position: relative;
        }

        .schedule-text::after {
            top: -45%;
            left: 110%;
            content: url(@/assets/image/donate/down.svg);
            transform: rotate(-135deg);
        }
    }

    // 第三塊
    .schedule-section3 {
        position: relative;
        top: -20%;

        .schedule-big-pic {
            margin-top: 10vh;
        }

        .schedule3 {
            display: flex;
            flex-direction: column-reverse;

            .schedule-pic {
                position: relative;
                left: 50%;
                bottom: -5%;
                display: flex;
                flex-direction: row;
                width: 50%;

                img {
                    width: 30%;
                }
            }
        }
    }

    // 第四塊
    .schedule-section4 {
        margin-top: -8vh;
        flex-direction: column-reverse;

        .schedule-text {
            position: relative;
        }

        .schedule-text::after {
            top: -45%;
            left: 110%;
            content: url(@/assets/image/donate/down.svg);
            transform: rotate(-135deg);
        }

        .schedule-pic {
            justify-content: space-around;
            position: relative;
            right: 5%;
            width: 80%;
        }
    }

    // 第五塊
    .schedule-section5 {
        margin-top: -10vh;

        .schedule5 {
            display: flex;
            flex-direction: column-reverse;

            .schedule-pic {
                position: relative;
                left: 50%;
                bottom: -5%;
                display: flex;
                flex-direction: row;
                width: 50%;

                img {
                    width: 30%;
                }
            }
        }
    }

    // 第六塊
    .schedule-section6 {
        margin-top: -5vh;
        flex-direction: column-reverse;

        .schedule-text::after {
            display: none;
        }

        .schedule6 {
            margin-top: -12vh;
            display: flex;
            flex-direction: column-reverse;

            .schedule-pic {
                position: relative;
                left: 0%;
                bottom: -5%;
                display: flex;
                flex-direction: row;
                width: 50%;

                img {
                    width: 30%;

                }

            }
        }
        // 空白
        .blank-space{
            width: 20%;
        }
    }

    .schedule {
        width: 410px;
        // height: 170px;
        display: flex;

        .schedule-text {
            border: 1px solid $blueL;
            border-radius: 10px;
            padding: 40px;

            h3 {
                color: $blueL;
            }
        }

        .schedule-pic {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            img {
                border-radius: 50%;
                box-shadow: 5px 0 $blueL;
            }
        }

    }
}

}</style>
