<template>
    <div id="itinerary">
        <div class="planet-bg">
            <img src="@/assets/image/itinerary_mars/mars_bg.png" alt="mars">
        </div>
        <!-- 遮罩 -->
        <div v-if="coverbg" class="cover" @click="close"></div>
        <div v-if="showBtn" class="schedule-big-pic">
            <img :src="bigpic">
            <button v-if="showBtn" class="close-btn" @click="close">&times;</button>
        </div>
        <!-- 旅程名稱 -->
        <div id="main-container" data-scroll-container>
            <div class="scrollsection" data-scroll-section>
                <div class="title" style="writing-mode: vertical-lr" data-scroll data-scroll-speed="1">
                    <div>
                        <h1>火 星 生 命 解 密 之 旅</h1>
                    </div>


                </div>
            </div>
            <div v-for="(day, index) in schedules" :key="index" class="scrollsection" data-scroll-section>
                <div class="schedule" :class="day.schedulenum" data-scroll data-scroll-speed="2">
                    <div class="schedule-text">
                        <h3>{{ day.num }}</h3>
                        <p>{{ day.schedule }}</p>
                    </div>
                    <div class="schedule-pic">
                        <div v-for="(URL, picIndex) in day.imgUrls" :key="picIndex" class="image-box" @click="showPic($event)">
                            <img :src="URL">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LocomotiveScroll from 'locomotive-scroll';

export default {
    data() {
        return {
            bigpic: '',
            showBtn: true,
            scroll: null,
            schedules: [
                {
                    schedulenum: "schedule1",
                    num: "Day1 旅程啟航！",
                    schedule: "從地球啟程後可飽覽星際風光，飛行十四個小時後，我們會抵達偉諭航空站，稍作休息後再前往火星。",
                    imgUrls: [
                        require('@/assets/image/itinerary_mars2/m11.jpg'),
                        require('@/assets/image/itinerary_mars2/m12.jpg'),
                        require('@/assets/image/itinerary_mars2/m13.jpg'),
                    ],
                },
                {
                    schedulenum: "schedule2",
                    num: "Day2 艾里隕石坑",
                    schedule: "前往艾里隕石坑 了解火星的地層變化，這些地層提供了一本連續章節的歷史書，記錄了每個地層沉積時的環境條件。",
                    imgUrls: [
                        require('@/assets/image/itinerary_mars2/m21.jpg'),
                        require('@/assets/image/itinerary_mars2/m22.jpg'),
                        require('@/assets/image/itinerary_mars2/m23.jpg'),
                    ],

                },
                {
                    schedulenum: "schedule3",
                    num: "Day3 太陽系最大的峽谷--水手號峽谷",
                    schedule: "前往水手號峽谷觀看壯麗美景，水手號峽谷長約3000公里，是美國大峽谷的近四倍長，高溫熔岩在地殼其他區域形成裂縫，隨著時間推移，逐漸演變成現有的水手號峽谷。",
                    imgUrls: [
                        require('@/assets/image/itinerary_mars2/m31.jpg'),
                        require('@/assets/image/itinerary_mars2/m32.jpg'),
                        require('@/assets/image/itinerary_mars2/m33.jpg'),
                    ],

                },
                {
                    schedulenum: "schedule4",
                    num: "Day4 蓋爾撞擊坑( Gale Crater )和夏普山( Mount Sharp )",
                    schedule: "2012年火星探測車好奇號在蓋爾撞擊坑這塊區域發現了河床，沿著河床的軌跡、一直到火山口底部，更發現了許多「 火星上曾經有水」的證據。在附近一座名為夏普山的火山，發現了「有機分子」，被認為是宇宙中生命的起源，我們將前往此地，探索其中奧妙。",
                    imgUrls: [
                        require('@/assets/image/itinerary_mars2/m41.jpg'),
                        require('@/assets/image/itinerary_mars2/m42.jpg'),
                        require('@/assets/image/itinerary_mars2/m43.jpg'),
                    ],

                },
                {
                    schedulenum: "schedule5",
                    num: "Day5、6 地下冒險",
                    schedule: "火星在40億年前具有溫暖潮濕的環境，但隨著磁場消失、大氣層變薄及環境溫度下降等影響，液態水僅能在較深的地下層中才穩定存在。若火星上有機會出現生命，其所在的位置可能會跟隨融化後的液態水進入更深的地層。",
                    imgUrls: [
                        require('@/assets/image/itinerary_mars2/m51.jpg'),
                        require('@/assets/image/itinerary_mars2/m52.jpg'),
                        require('@/assets/image/itinerary_mars2/m53.jpg'),
                    ],

                },
                {
                    schedulenum: "schedule6",
                    num: "Day 7 返回家鄉--地球",
                    schedule: "星際旅遊的壯闊冒險完美收尾！在無重力中飄浮的日子即將結束，我們即將返回地球。帶著難以置信的回憶和深刻的體驗，我們準備迎接重力的擁抱。也請各位珍惜回程最後飽覽太空的絕美景觀的機會。如果捨不得，我們期待著下次再與您共度星際旅遊的美好時光，感謝您的參與！",
                    imgUrls: [
                        require('@/assets/image/itinerary_mars2/m61.jpg'),
                        require('@/assets/image/itinerary_mars2/m62.jpg'),
                        require('@/assets/image/itinerary_mars2/m63.jpg'),
                    ],

                },
            ],
        };
    },
    methods: {
        showPic(e) {
            this.bigpic = e.target.src;
        },
        close() {
            if( this.bigpic != ''){
                this.bigpic = '';
            }
        }
    },
    computed: {
        showBtn() {
            console.log('click');
            return this.bigpic !== ''
        },
        coverbg() {
            return this.bigpic !== ''
        }
    },
    mounted() {
        const el = document.querySelector('#main-container')
        if (!el) return;
        console.log(el)
        this.scroll = new LocomotiveScroll({
            el,
            direction: 'horizontal',
            smooth: true,
            lerp: 0.05,
            getSpeed: true,
            tablet: {
                breakpoint: 0,
                smooth: true,
                direction: "horizontal"
            },
            smartphone: {
                breakpoint: 0,
                smooth: true,
                direction: "horizontal"
            }
        });
    },
    beforeUnmount() {
        console.log(this.scroll);
    if (this.scroll) {
      this.scroll.destroy();
    }
    console.log(this.scroll);
  }              
};

</script>

<style scoped lang="scss">
#itinerary {
    display: flex;
    position: relative;

    .cover {
        z-index: 1;
        position: absolute;
        width: 100%;
        height: 100%;
        // 透明度 0.6 的黑色半透明遮罩
        background: rgba(0, 0, 0, 0.6);
        // 設置背景混和模式為相乘模式
        background-blend-mode: multiply;
        background-size: cover;
        background-position: center center;
    }

    .close-btn {
        width: 65px;
        cursor: pointer;
        position: absolute;
        z-index: 10;
        background-color: transparent;
        border: none;
        color: $blueL;
        font-weight: 200;
        font-size: 60px;
        text-shadow: 3px 1px 5px $blueL;
        top: -10%;
        right: 0;
    }

    .schedule-big-pic {
        z-index: 5;
        // border: 3px solid #fff;
        border-radius: 10px;
        overflow: hidden;
        position: absolute;
        inset: 0;
        margin: auto;
        width: 500px;
        height: 300px;
        // align-self: flex-end;

        img {
            max-width: 100%;
            height: auto;
            object-fit: cover;
            overflow: hidden;
        }
    }

    .image-box {
        position: relative;
        width: 60px;
        height: 60px;
        z-index: 10;

        img {
            z-index:2;
            max-width: 100%;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center center;
            cursor: pointer;
        }
    }

    box-sizing: border-box;
    color: $white;
    line-height: 1.5;
    position: relative;

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
        display: flex;
        flex-direction: column;
        z-index: 10;
        margin-left: 10%;
        margin-top: 5%;
        margin-bottom: 1%;

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
        padding-top: 20vh;

        &:first-child {
            padding-left: 40vh;
        }

        &:nth-child(2) {
            padding-left: 10vh;
        }

        &:last-child {
            padding-right: 20vh;

        }

        .schedule {

            display: flex;

            .schedule-text {
                width: 410px;
                position: relative;
                border: 1px solid $blueL;
                border-radius: 10px;
                padding: 25px;


                h3 {
                    color: $blueL;
                    font-weight: 700;
                }

                &:after {
                    position: absolute;
                }

                p {
                    word-break: break-all;
                    white-space: initial;
                }
            }

            .schedule-text::after {
                position: absolute;
                top: 100%;
                left: 120%;
                content: url(@/assets/image/donate/down.svg);
                transform: rotate(-45deg);
            }

            .schedule-pic {
                img {
                    border-radius: 50%;
                    box-shadow: 5px 0 $blueL;
                }

                display: flex;
                flex-direction: column;
                justify-content: space-between;

            }
        }

        // 第一塊
        .schedule1 {
            .schedule-pic {
                position: relative;
                bottom: 10%;
                right: 2%;
                width: 45%;
            }
            .schedule-text::after {
                top: 80%;
                left: 140%;
            }

        }

        // 第二塊
        .schedule2 {
            flex-direction: column;
            position: relative;
            top: 50%;

            .schedule-pic {
                transform: translateY(-10%);
                position: relative;
                right: -50%;
                width: 45%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }


            .schedule-text::after {
                top: -45%;
                left: 120%;
                content: url(@/assets/image/donate/down.svg);
                transform: rotate(-135deg);
            }
        }

        // 第三塊
        .schedule3 {
            margin-left: 10vh;

            .schedule-pic {
                transform: translateY(-30%);
                position: relative;
                right: 40%;
                display: flex;
                flex-direction: row;
                width: 40%;
            }
        }


        // 第四塊
        .schedule4 {
            margin-top: 40vh;
            margin-left: -10vh;

            .schedule-text::after {
                top: -45%;
                left: 130%;
                content: url(@/assets/image/donate/down.svg);
                transform: rotate(-135deg);
            }

            .schedule-pic {
                justify-content: space-around;
                position: relative;
                right: 2%;
                width: 45%;
            }
        }

        // 第五塊
        .schedule5 {
            flex-direction: column-reverse;
            margin-left: 15vh;
            .schedule-pic {
                position: relative;
                transform: translateY(10%);
                display: flex;
                flex-direction: row;
                width: 50%;
            }
            .schedule-text::after {
                transform: rotate(-60deg);
            }
        }

        // 第六塊
        .schedule6 {
            flex-direction: column;
            margin-top: 25vh;
            margin-left: 20vh;

            .schedule-text::after {
                display: none;
            }

            .schedule-pic {
                transform: translateY(-10%);
                display: flex;
                flex-direction: row;
                width: 50%;
            }
        }

        // 空白
        .blank-space {
            width: 20%;
        }
    }

}
</style>