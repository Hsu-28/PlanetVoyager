<template>
    <div id="itinerary">
        <div class="planet-bg">
            <img src="@/assets/image/itinerary_moon/moon-bg.png" alt="moon">
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
                        <h1  v-if="myData && myData.itinerary && myData.itinerary.length > 0">
                            {{ myData.itinerary[0].planet_subtitle }}
                        </h1>
                    </div>


                </div>
            </div>
            <div v-for="(day, index) in schedules" :key="index" class="scrollsection" data-scroll-section>
                <div class="schedule" :class="day.schedulenum" data-scroll data-scroll-speed="2">
                    <div class="schedule-text">
                        <h3>{{ day.num }}</h3>
                        <p style="white-space: pre-line">{{ day.schedule }}</p>
                    </div>
                    <div class="schedule-pic">
                        <div v-for="(URL, picIndex) in day.imgUrls" :key="picIndex" class="image-box"
                            @click="showPic($event)">
                            <img :src="`/img/${URL.itinerary_pic}`">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LocomotiveScroll from 'locomotive-scroll';
import axios from 'axios';
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
                    schedule: "帶著輕鬆的心情於本公司飛航站集合，搭乘太空船直接飛往月球，此航程為15小時。",
                    imgUrls: [
                        require('@/assets/image/itinerary_moon2/mo211.jpg'),
                        require('@/assets/image/itinerary_moon2/mo212.jpg'),
                        require('@/assets/image/itinerary_moon2/mo213.jpg'),
                    ],
                },
                {
                    schedulenum: "schedule2",
                    num: "Day2、3 月球表面遊覽&探索",
                    schedule: "約早上8點降落在月球基地，位於近月點或月海附近。首先進行環境適應訓練，熟悉基地並參加安全簡報和旅程概述，接著穿上太空服，搭乘觀光月球車前往著名的月球撞擊坑。晚間則在舒適的基地內欣賞地球升起的美景。",
                    imgUrls: [
                        require('@/assets/image/itinerary_moon2/mo221.jpg'),
                        require('@/assets/image/itinerary_moon2/mo222.jpg'),
                        require('@/assets/image/itinerary_moon2/mo223.jpg'),
                    ],
                },
                {
                    schedulenum: "schedule3",
                    num: "Day4 科學實驗與分析",
                    schedule: `早上：參與月球地質講座，了解月球形成的歷史。
                                下午：使用地質工具採集岩石和月壤樣本。
                                晚上：在基地內進行月壤和岩石樣本分析，並分享研究結果。`,
                    imgUrls: [
                        require('@/assets/image/itinerary_moon2/mo231.jpg'),
                        require('@/assets/image/itinerary_moon2/mo232.jpg'),
                        require('@/assets/image/itinerary_moon2/mo233.jpg'),
                    ],

                },
                {
                    schedulenum: "schedule4",
                    num: "Day5 天文觀測",
                    schedule: `早上 : 專業天文學家引導的望遠鏡觀測。
                                下午：月球表面上的自由觀測，利用望遠鏡尋找星座。
                                晚上：觀賞月球夜空，無光污染的絕佳視角。`,
                    imgUrls: [
                        require('@/assets/image/itinerary_moon2/mo241.jpg'),
                        require('@/assets/image/itinerary_moon2/mo242.jpg'),
                        require('@/assets/image/itinerary_moon2/mo243.jpg'),
                    ],

                },
                {
                    schedulenum: "schedule5",
                    num: "Day6 自由活動",
                    schedule: `早上 : 可選擇月球高爾夫、月面摩托車等。
                                下午：月球低重力舞會
                                晚上：登上返回地球的太空船，進行最後的安全檢查，然後開始返程。`,
                    imgUrls: [
                        require('@/assets/image/itinerary_moon2/mo251.jpg'),
                        require('@/assets/image/itinerary_moon2/mo252.jpg'),
                        require('@/assets/image/itinerary_moon2/mo253.jpg'),
                    ],

                },
                {
                    schedulenum: "schedule6",
                    num: "Day 7 返回家鄉--地球",
                    schedule: "星際旅遊的壯闊冒險完美收尾！在無重力中飄浮的日子即將結束，我們即將返回地球。帶著難以置信的回憶和深刻的體驗，我們準備迎接重力的擁抱。也請各位珍惜回程最後飽覽太空的絕美景觀的機會。如果捨不得，我們期待著下次再與您共度星際旅遊的美好時光，感謝您的參與！",
                    imgUrls: [
                        require('@/assets/image/itinerary_moon2/mo261.jpg'),
                        require('@/assets/image/itinerary_moon2/mo262.jpg'),
                        require('@/assets/image/itinerary_moon2/mo263.jpg'),
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
        },
        D1() {
        return this.schedules[0].imgUrls = this.photos.filter(v => v.itinerary_photo_no < 35)   
        },
        D2() {
        return this.schedules[1].imgUrls = this.photos.filter(v => v.itinerary_photo_no > 34 && v.itinerary_photo_no < 38);
        },
        D3() {
        return this.schedules[2].imgUrls = this.photos.filter(v => v.itinerary_photo_no > 37 && v.itinerary_photo_no < 41)   
        },
        D4() {
        return this.schedules[3].imgUrls = this.photos.filter(v => v.itinerary_photo_no > 40 && v.itinerary_photo_no < 44)   
        },
        D5() {
        return this.schedules[4].imgUrls = this.photos.filter(v => v.itinerary_photo_no > 42 && v.itinerary_photo_no < 46)   
        },
        D6() {
        return this.schedules[5].imgUrls = this.photos.filter(v => v.itinerary_photo_no > 44 && v.itinerary_photo_no < 48)   
        },
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
    },
    created() {

axios.get('http://localhost/PV/PlanetVoyager/public/php/ItineraryMoon2.php')
    .then(response => {
        this.myData = response.data;
        this.photos = this.myData.itinerary_photos;
    })
    .catch(error => {
        console.error(error);
    });

},      
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
        }

        // 第二塊
        .schedule2 {
            flex-direction: column;
            position: relative;
            top: 40%;

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
                transform: translateY(-20%);
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