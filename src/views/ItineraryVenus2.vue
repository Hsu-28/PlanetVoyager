<template>
    <div id="itinerary">
        <div class="planet-bg">
            <img src="@/assets/image/itinerary_venus/venus_bg.png" alt="Venus">
        </div>
        <!-- 遮罩 -->
        <div v-if="coverbg" class="cover"></div>
        <div v-if="showBtn" class="schedule-big-pic">
            <img :src="bigpic">
            <button v-if="showBtn" class="close-btn" @click="close">&times;</button>
        </div>
        <!-- 旅程名稱 -->
        <div id="main-container" data-scroll-container>
            <div class="scrollsection" data-scroll-section>
                <div class="title" style="writing-mode: vertical-lr" data-scroll data-scroll-speed="1">
                    <div>
                        <h1>金 星 冒 險 尋 奇 之 旅</h1>
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
            scrollInstance: null,
            bigpic: '',
            showBtn: true,
            scroll: null,
            schedules: [
                {
                    schedulenum: "schedule1",
                    num: "Day1 旅程啟航！",
                    schedule: "從地球啟程後可飽覽星際風光，飛行二十小時後，我們會抵達偉諭航空站，稍作休息後再前往金星。",
                    imgUrls: [
                        require('@/assets/image/itinerary_venus1/v11.svg'),
                        require('@/assets/image/itinerary_venus1/v12.svg'),
                        require('@/assets/image/itinerary_venus1/v13.svg'),
                    ],
                },
                {
                    schedulenum: "schedule2",
                    num: "Day2 迎接金星的挑戰",
                    schedule: "我們將探險麥田圈迷宮，沉浸在神秘的符號和圖案中，解開謎題，體驗智力的挑戰。",
                    imgUrls: [
                        require('@/assets/image/itinerary_venus1/v21.svg'),
                        require('@/assets/image/itinerary_venus1/v22.svg'),
                        require('@/assets/image/itinerary_venus1/v23.svg'),
                    ],
                },
                {
                    schedulenum: "schedule3",
                    num: "Day3 探訪蜥蜴人族",
                    schedule: "我們深入蜥蜴人民族的社區，學習他們的語言、傳統和文化，與他們共進美味的蜥蜴美食，建立友誼的紐帶。",
                    imgUrls: [
                        require('@/assets/image/itinerary_venus1/v31.svg'),
                        require('@/assets/image/itinerary_venus1/v32.svg'),
                        require('@/assets/image/itinerary_venus1/v33.svg'),
                    ],
                },
                {
                    schedulenum: "schedule4",
                    num: "Day 4 城市遺址探險",
                    schedule: "追隨遺跡機器人導覽，穿越古老城市的廢墟，發現神秘的寶藏和失落的技術，了解過去文明的輝煌。",
                    imgUrls: [
                        require('@/assets/image/itinerary_venus1/v41.svg'),
                        require('@/assets/image/itinerary_venus1/v42.svg'),
                        require('@/assets/image/itinerary_venus1/v43.svg'),
                    ],
                },
                {
                    schedulenum: "schedule5",
                    num: "Day5 驚心懸崖縱走",
                    schedule: "勇敢地走上銀河砂流，挑戰自己的平衡和冒險精神，沿著宇宙懸崖行走，感受星際的刺激。",
                    imgUrls: [
                        require('@/assets/image/itinerary_venus1/v51.svg'),
                        require('@/assets/image/itinerary_venus1/v52.svg'),
                        require('@/assets/image/itinerary_venus1/v53.svg'),
                    ],
                },
                {
                    schedulenum: "schedule6",
                    num: "Day 7 返回家鄉--地球",
                    schedule: "星際旅遊的壯闊冒險完美收尾！在無重力中飄浮的日子即將結束，我們即將返回地球。帶著難以置信的回憶和深刻的體驗，我們準備迎接重力的擁抱。也請各位珍惜回程最後飽覽太空的絕美景觀的機會。如果捨不得，我們期待著下次再與您共度星際旅遊的美好時光，感謝您的參與！",
                    imgUrls: [
                        require('@/assets/image/itinerary_venus1/v11.svg'),
                        require('@/assets/image/itinerary_venus1/v12.svg'),
                        require('@/assets/image/itinerary_venus1/v13.svg'),
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
            if (this.bigpic != '') {
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
        right: -1%;
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
            z-index: 2;
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
        top: 0;
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
                transform: translateY(-33%);
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
                left: 150%;
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
            flex-direction: column;

            .schedule-pic {
                position: relative;
                transform: translateY(-30%);
                display: flex;
                flex-direction: row;
                width: 50%;
            }
        }

        // 第六塊
        .schedule6 {
            flex-direction: column-reverse;
            margin-top: 20vh;
            margin-left: 20vh;

            .schedule-text::after {
                display: none;
            }

            .schedule-pic {
                transform: translateY(15%);
                display: flex;
                flex-direction: row;
                width: 45%;
            }
        }

        // 空白
        .blank-space {
            width: 20%;
        }
    }

}
</style>
