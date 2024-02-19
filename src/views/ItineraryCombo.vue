<template>
    <div id="itinerary">
        <div class="planet-bg">
            <img src="@/assets/image/itinerary_combo/galaxy_bg.png" alt="galaxy">
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
                    <!-- <div class="schedule-pic">
                        <div v-for="(URL, picIndex) in day.imgUrls" :key="picIndex" class="image-box"
                            @click="showPic($event)">
                            <img :src="URL"> 原來的
                            
                            <img :src="require(`@/assets/image/itinerary_combo${URL}`)"> 

                            
                        </div>
                    </div> -->
                    <div class="schedule-pic">
                        <div v-for="(URL, picIndex) in day.imgUrls" :key="picIndex" class="image-box"
                            @click="showPic($event)">

                            <img :src="URL">
                            <!-- <img :src="`${this.$store.state.publicURL}/img/${URL.itinerary_pic}`"> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>、、
    </div>
</template>

<script>
import LocomotiveScroll from 'locomotive-scroll';
import axios from 'axios';
export default {
    data() {
        return {
            photos: [],
            myData: [],
            test: "",
            bigpic: '',
            showBtn: true,
            scroll: null,
            schedules: [
                {
                    schedulenum: "schedule1",
                    num: "Day1 旅程啟航！",
                    schedule: "從地球啟程後可飽覽星際風光，隔日中午抵達月球，在銀河中體驗太空中漂浮。",
                    imgUrls: [
                        require('@/assets/image/itinerary_combo/c11.jpg'),
                        require('@/assets/image/itinerary_combo/c12m.jpg'),
                        require('@/assets/image/itinerary_combo/c13.jpg'),
                    ],
                },
                {
                    schedulenum: "schedule2",
                    num: "Day2 月球美景饗宴",
                    schedule: "在月球周圍繞行，除了神奇的月亮景色，也能於月球的空中觀測未知的生物和奇異的地貌，滿足您的探索精神。",
                    imgUrls: [
                        require('@/assets/image/itinerary_combo/c21.svg'),
                        require('@/assets/image/itinerary_combo/c22.svg'),
                        require('@/assets/image/itinerary_combo/c23.svg'),
                        // 'c21.svg',
                        // 'c22.svg',
                        // 'c23.svg'

                    ],
                },
                {
                    schedulenum: "schedule3",
                    num: "Day3 金星秘景探索",
                    schedule: "藉由蟲洞跳躍，我們前往金星，探索這個炎熱的星球。在金星空中的飛航期間，您將發現更多奇異的景色和未知生物，使我們的旅程更加驚喜。",
                    imgUrls: [
                        require('@/assets/image/itinerary_combo/c31.svg'),
                        require('@/assets/image/itinerary_combo/c32.svg'),
                        require('@/assets/image/itinerary_combo/c33.svg'),
                        // 'c31.svg',
                        // 'c32.svg',
                        // 'c33.svg'

                    ],
                },
                {
                    schedulenum: "schedule4",
                    num: "Day4、5 火星遺跡巡航",
                    schedule: "再次飛入蟲洞，前往火星。在這顆紅色星球上，於空中觀看遠古遺跡、麥田圈等等，尋訪生命的起源和消殞，為您的旅程添上色彩。",
                    imgUrls: [
                        require('@/assets/image/itinerary_combo/c41.svg'),
                        require('@/assets/image/itinerary_combo/c42.svg'),
                        require('@/assets/image/itinerary_combo/c43.svg'),
                        // 'c41.svg',
                        // 'c42.svg',
                        // 'c43.svg'
                    ],
                },
                {
                    schedulenum: "schedule5",
                    num: "Day 6 台日共構月球基地--蒂芬妮丘",
                    schedule: "蒂芬妮丘是深太空探索的跳板，有助於實現我們登陸更遠的星系。月球基地的太陽能發電站將為未來太空任務提供可再生能源，強化星際探索空持續性。旅客在此休息養足精神，隔日再行返家。",
                    imgUrls: [
                        require('@/assets/image/itinerary_combo/c51.svg'),
                        require('@/assets/image/itinerary_combo/c52.svg'),
                        require('@/assets/image/itinerary_combo/c53.svg'),
                        // 'c51.svg',
                        // 'c52.svg',
                        // 'c53.svg',
                    ],
                },
                {
                    schedulenum: "schedule6",
                    num: "Day 7 返回家鄉--地球",
                    schedule: "星際旅遊的壯闊冒險完美收尾！在無重力中飄浮的日子即將結束，我們即將返回地球。帶著難以置信的回憶和深刻的體驗，我們準備迎接重力的擁抱。也請各位珍惜回程最後飽覽太空的絕美景觀的機會。如果捨不得，我們期待著下次再與您共度星際旅遊的美好時光，感謝您的參與！",
                    imgUrls: [
                        require('@/assets/image/itinerary_combo/c11.svg'),
                        require('@/assets/image/itinerary_combo/c12.svg'),
                        require('@/assets/image/itinerary_combo/c13.svg'),
                        // 'c11.svg',
                        // 'c12.svg',
                        // 'c13.svg',
                    ],
                },
            ],
            content: '',
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
        // return this.schedules[0].imgUrls = this.photos.filter(v => v.itinerary_photo_no < 4)   
        // },
        // D2() {
        // return this.schedules[1].imgUrls = this.photos.filter(v => v.itinerary_photo_no > 3 && v.itinerary_photo_no < 7);
        // },
        // D3() {
        // return this.schedules[2].imgUrls = this.photos.filter(v => v.itinerary_photo_no > 6 && v.itinerary_photo_no < 10)   
        // },
        // D4() {
        // return this.schedules[3].imgUrls = this.photos.filter(v => v.itinerary_photo_no > 9 && v.itinerary_photo_no < 13)   
        // },
        // D5() {
        // return this.schedules[4].imgUrls = this.photos.filter(v => v.itinerary_photo_no < 4)   
        // },
        // D6() {
        // return this.schedules[5].imgUrls = this.photos.filter(v => v.itinerary_photo_no < 3 && v.itinerary_photo_no < 7)   
        // },


    },
    created() {
        axios.get(`${this.$store.state.phpPublicPath}ItineraryCombo.php`)
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
        width: 90%;
        left: -20%;
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
                transform: translateY(-25%);
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