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
                        <h1 v-if="planet_subtitle">
                            {{ planet_subtitle }}
                        </h1>
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
                        <div v-for="(URL, picIndex) in day.imgUrls" :key="picIndex" class="image-box"
                            @click="showPic($event)">
                            <img :src="`${this.$store.state.publicURL}/img/${URL.itinerary_pic}`">
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
            myData: [],
            schedules: [
                {
                    schedulenum: "schedule1",
                    num: "Day1 旅程啟航！",
                    schedule: "從地球啟程後可飽覽星際風光，飛行十四個小時後，我們會抵達偉諭航空站，稍作休息後再前往火星。",
                    imgUrls: [
                        require('@/assets/image/itinerary_mars1/d11.jpg'),
                        require('@/assets/image/itinerary_mars1/d12.jpg'),
                        require('@/assets/image/itinerary_mars1/d13.jpg'),
                    ],
                },
                {
                    schedulenum: "schedule2",
                    num: "Day2 抵達火星",
                    schedule: "抵達火星後現場觀察火星的地質歷史，學習探測器載具的使用探勘，適應火星的氣候。",
                    imgUrls: [
                        require('@/assets/image/itinerary_mars1/d21.jpg'),
                        require('@/assets/image/itinerary_mars1/d22.jpg'),
                        require('@/assets/image/itinerary_mars1/d23.jpg'),
                    ],

                },
                {
                    schedulenum: "schedule3",
                    num: "Day3 穿越火星沙漠",
                    schedule: "火星沙漠越野：搭乘特製的載具觀賞風景，穿越沙漠抵達奧林帕斯山脈山腳。",
                    imgUrls: [
                        require('@/assets/image/itinerary_mars1/d31.jpg'),
                        require('@/assets/image/itinerary_mars1/d32.jpg'),
                        require('@/assets/image/itinerary_mars1/d33.jpg'),
                    ],

                },
                {
                    schedulenum: "schedule4",
                    num: "Day 4、5 奧林帕斯山",
                    schedule: "前往奧林帕斯山高處，進入火山隧道，體驗火山的內部結構。",
                    imgUrls: [
                        require('@/assets/image/itinerary_mars1/d41.jpg'),
                        require('@/assets/image/itinerary_mars1/d42.jpg'),
                        require('@/assets/image/itinerary_mars1/d43.jpg'),
                    ],

                },
                {
                    schedulenum: "schedule5",
                    num: "Day 6 登頂",
                    schedule: "登頂奧林帕斯山，途中可能會遇到壯觀的峽谷、熔岩流和古老的火山口，回程順道參觀火星基地。",
                    imgUrls: [
                        require('@/assets/image/itinerary_mars1/d51.jpg'),
                        require('@/assets/image/itinerary_mars1/d52.jpg'),
                        require('@/assets/image/itinerary_mars1/d53.jpg'),
                    ],

                },
                {
                    schedulenum: "schedule6",
                    num: "Day 7 返回家鄉--地球",
                    schedule: "星際旅遊的壯闊冒險完美收尾！在無重力中飄浮的日子即將結束，我們即將返回地球。帶著難以置信的回憶和深刻的體驗，我們準備迎接重力的擁抱。也請各位珍惜回程最後飽覽太空的絕美景觀的機會。如果捨不得，我們期待著下次再與您共度星際旅遊的美好時光，感謝您的參與！",
                    imgUrls: [
                        require('@/assets/image/itinerary_mars1/d21.jpg'),
                        require('@/assets/image/itinerary_mars1/d12.jpg'),
                        require('@/assets/image/itinerary_mars1/d33.jpg'),
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
        },
        splitWord(text) {
            let all = [];
            let start = 0;
            let end = text.indexOf('\n', start) + 1;

            while (end > 0) {
                const p = text.slice(start, end);
                all.push(p);
                start = end;
                end = text.indexOf('\n', start) + 1;
            }

            // 如果 end 等于 -1，表示已经到达文本末尾
            if (end === -1) {
                const p = text.slice(start);
                all.push(p);
            }

            console.log(all);


            const schedules = [];
            for (let i = 0; i < all.length; i += 2) {
                const num = all[i].trim();  // 移除首尾空格和换行符
                const schedule = all[i + 1].trim();
                schedules.push({ num, schedule });
            }

            return schedules;
        },
    },
    computed: {
        showBtn() {
            console.log('click');
            return this.bigpic !== ''
        },
        coverbg() {
            return this.bigpic !== ''
        },
        planet_subtitle() {
            if (this.myData && this.myData.itinerary && this.myData.itinerary.length > 0) {
                return this.myData.itinerary[0].planet_subtitle
            } else {
                return ''
            }
        },
        // D1() {
        // return this.schedules[0].imgUrls = this.photos.filter(v => v.itinerary_photo_no < 53)   
        // },
        // D2() {
        // return this.schedules[1].imgUrls = this.photos.filter(v => v.itinerary_photo_no > 53 && v.itinerary_photo_no < 57);
        // },
        // D3() {
        // return this.schedules[2].imgUrls = this.photos.filter(v => v.itinerary_photo_no > 56 && v.itinerary_photo_no < 60)   
        // },
        // D4() {
        // return this.schedules[3].imgUrls = this.photos.filter(v => v.itinerary_photo_no > 59 && v.itinerary_photo_no < 63)   
        // },
        // D5() {
        // return this.schedules[4].imgUrls = this.photos.filter(v => v.itinerary_photo_no > 53 && v.itinerary_photo_no < 57)   
        // },
        // D6() {
        // return this.schedules[5].imgUrls = this.photos.filter(v => v.itinerary_photo_no < 53 && v.itinerary_photo_no < 57)   
        // },
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
        // axios.get('http://localhost/PV/PlanetVoyager/public/php/ItineraryMars.php')
        axios.get(`${this.$store.state.phpPublicPath}ItineraryMars.php`)
            .then(response => {
                this.myData = response.data;
                const text = this.myData?.itinerary?.[0]?.itinerary_day || ''
                const schedules = this.splitWord(text)
                const photos = Array.from({ length: this.schedules.length * 3 }, (v, i) => {
                    return this.myData.itinerary_photos[i % this.myData.itinerary_photos.length]
                });
                this.schedules = this.schedules.map((v, i) => {
                    return {
                        ...v,
                        ...schedules[i],
                        imgUrls: photos.slice(i * 3, (i + 1) * 3)
                    }
                })
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
                transform: translateY(-40%);
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
