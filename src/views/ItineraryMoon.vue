<template>
    <div id="itinerary">
        <div class="planet-bg">
            <img src="@/assets/image/itinerary_moon/moon-bg.png" alt="moon">
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
                        <h1>月 球 巡 禮</h1>
                        <p>用你的一小步</p>
                        <p>見證人類的一大步</p>
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
                    schedule: "從地球啟程後可飽覽星際風光，飛行十四個小時後，我們會抵達偉諭航空站，稍作休息後再前往月球。",
                    imgUrls: [
                        require('@/assets/image/itinerary_moon/mo11.svg'),
                        require('@/assets/image/itinerary_moon/mo12.svg'),
                        require('@/assets/image/itinerary_moon/mo13.svg'),
                    ],
                },
                {
                    schedulenum: "schedule2",
                    num: "Day2 成為歷史的見證者，朝聖阿姆斯壯的腳印",
                    schedule: "That's one small step for man, one giant leap for mankind.極其幸運的，按照當初太陽神11號紀錄的座標定位找尋，我們發現了尚未被隕石催毀的腳印，目前也透過技術保存，讓各位參與歷史的里程。",
                    imgUrls: [
                        require('@/assets/image/itinerary_moon/mo21.svg'),
                        require('@/assets/image/itinerary_moon/mo22.svg'),
                        require('@/assets/image/itinerary_moon/mo23.svg'),
                    ],
                },
                {
                    schedulenum: "schedule3",
                    num: "Day3 飽覽貝利環形山坑勝景",
                    schedule: "月球上的隕石坑是由於天體撞擊而形成的，大小不一，深淺各異。其中隕坑中心月面座標為49.78°N, 30.56°E，直徑25.68公里，深約1.92公里，位於月球南極附近，直徑達295千米，比海南島還大。世上有什麼比在月球上較量高爾夫 再來瓶啤酒更愜意的事呢？",
                    imgUrls: [
                        require('@/assets/image/itinerary_moon/mo31.svg'),
                        require('@/assets/image/itinerary_moon/mo32.svg'),
                        require('@/assets/image/itinerary_moon/mo33.svg'),
                    ],
                },
                {
                    schedulenum: "schedule4",
                    num: "Day4、5 月球大縱走--橫斷月海與月谷",
                    schedule: "這兩天我們將駕駛Planet Voyager的頂規太空車，Lunar Voyager橫越橫斷月海與月谷到達台日共構月球基地--蒂芬妮丘。除了欣賞美景以外，如果遇到外星物種也請不用擔心，他們是很友善的族群。",
                    imgUrls: [
                        require('@/assets/image/itinerary_moon/mo41.svg'),
                        require('@/assets/image/itinerary_moon/mo42.svg'),
                        require('@/assets/image/itinerary_moon/mo43.svg'),
                    ],
                },
                {
                    schedulenum: "schedule5",
                    num: "Day 6 台日共構月球基地--蒂芬妮丘",
                    schedule: "蒂芬妮丘是深太空探索的跳板，有助於實現我們登陸更遠的星系。月球基地的太陽能發電站將為未來太空任務提供可再生能源，強化星際探索空持續性。旅客在此休息養足精神，隔日再行返家。",
                    imgUrls: [
                        require('@/assets/image/itinerary_moon/mo51.svg'),
                        require('@/assets/image/itinerary_moon/mo52.svg'),
                        require('@/assets/image/itinerary_moon/mo53.svg'),
                    ],
                },
                {
                    schedulenum: "schedule6",
                    num: "Day 7 返回家鄉--地球",
                    schedule: "星際旅遊的壯闊冒險完美收尾！在無重力中飄浮的日子即將結束，我們即將返回地球。帶著難以置信的回憶和深刻的體驗，我們準備迎接重力的擁抱。也請各位珍惜回程最後飽覽太空的絕美景觀的機會。如果捨不得，我們期待著下次再與您共度星際旅遊的美好時光，感謝您的參與！",
                    imgUrls: [
                        require('@/assets/image/itinerary_moon/mo61.svg'),
                        require('@/assets/image/itinerary_moon/mo62.svg'),
                        require('@/assets/image/itinerary_moon/mo63.svg'),
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