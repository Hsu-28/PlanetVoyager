<template>
    <div id="itinerary">
        <div class="planet-bg">
            <img src="@/assets/image/itinerary_venus/venus_bg.png" alt="Venus">
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
                    schedule: "從地球啟程後可飽覽星際風光，中途於太空站稍作休息，24小時飛行後抵達金星。",
                    imgUrls: [
                        require('@/assets/image/itinerary_venus/v211.svg'),
                        require('@/assets/image/itinerary_venus/v212.jpg'),
                        require('@/assets/image/itinerary_venus/v213.jpg'),
                    ],
                },
                {
                    schedulenum: "schedule2",
                    num: "Day2 伊師塔高地（Ishtar Terra）",
                    schedule: "伊師塔高地是金星上兩個主要高地中較小的一個，靠近金星北極，得名於阿卡德神話中的女神伊師塔。高地的面積遼闊，大約介於澳洲和美國之間，北有弗蕾亞山脈，西有阿克娜山脈，南有達努山脈。四條山脈圍繞著中央相對較低的吉祥天高原。此處地貌豐富，是絕無僅有的美景。",
                    imgUrls: [
                        require('@/assets/image/itinerary_venus/v221.svg'),
                        require('@/assets/image/itinerary_venus/v222.svg'),
                        require('@/assets/image/itinerary_venus/v223.svg'),
                    ],
                },
                {
                    schedulenum: "schedule3",
                    num: "Day3 金星最高峰 -- 馬克士威山脈（Maxwell Montes）",
                    schedule: "伊師塔高地東緣的一條山脈，其高度約為11公里，比地球的最高點珠穆朗瑪峰還要高出2至3公里左右，為金星上的最高峰，這裡的生態相當豐富，也因金星人對環境保育的重視，讓我們有機會近距離觀賞可愛的野生動物。",
                    imgUrls: [
                        require('@/assets/image/itinerary_venus/v231.svg'),
                        require('@/assets/image/itinerary_venus/v232.svg'),
                        require('@/assets/image/itinerary_venus/v233.jpg'),
                    ],
                },
                {
                    schedulenum: "schedule4",
                    num: "Day 4、5 薩卡加維亞火山",
                    schedule: "一生必訪的宇宙知名的彩色火山，其色彩來自流紋岩(rhyolite)，由花崗岩質岩漿從地底噴發後所形成，除了流紋明顯之外顏色非常豐富，其中包括紅、黃、綠、紫、白，有些甚至會出現藍、粉紅、橙等顏色。您也將在此體驗天然地熱溫泉，在美景下療癒身心，汲取宇宙能量。",
                    imgUrls: [
                        require('@/assets/image/itinerary_venus/v241.svg'),
                        require('@/assets/image/itinerary_venus/v242.svg'),
                        require('@/assets/image/itinerary_venus/v243.svg'),
                    ],
                },
                {
                    schedulenum: "schedule5",
                    num: "Day 6 瑞茲城",
                    schedule: "旅程的最後我們將到金星首都瑞茲城（Riz City），金星上有80%人口都居住於此，是一座令人嘆為觀止的漂浮城市，也是金星的科技中心，您將能參觀星球歷史博物館，一窺宇宙的歷史奧秘，也有半天的時間能在城市中自由探索，金星人非常友善及好客，或許在返回地球以前，您能結交到外星好友，得到一生難忘的體驗。",
                    imgUrls: [
                        require('@/assets/image/itinerary_venus/v251.svg'),
                        require('@/assets/image/itinerary_venus/v252.svg'),
                        require('@/assets/image/itinerary_venus/v253.jpg'),
                    ],
                },
                {
                    schedulenum: "schedule6",
                    num: "Day 7 返回家鄉--地球",
                    schedule: "星際旅遊的壯闊冒險完美收尾！在無重力中飄浮的日子即將結束，我們即將返回地球。帶著難以置信的回憶和深刻的體驗，我們準備迎接重力的擁抱。也請各位珍惜回程最後飽覽太空的絕美景觀的機會。如果捨不得，我們期待著下次再與您共度星際旅遊的美好時光，感謝您的參與！",
                    imgUrls: [
                        require('@/assets/image/itinerary_venus/v261.svg'),
                        require('@/assets/image/itinerary_venus/v262.svg'),
                        require('@/assets/image/itinerary_venus/v263.jpg'),
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
    },
    mounted() {
        const el = document.querySelector('#main-container')
        console.log(el);
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
                direction: "horizontal",
            },
            smartphone: {
                breakpoint: 0,
                smooth: true,
                direction: "horizontal",
            }
        });
        setTimeout(() => {
            this.scroll.update()
        }, 1000);
        console.log(this.scroll);
    },
    beforeUnmount() {
        console.log(this.scroll);
        if (this.scroll) {
            this.scroll.destroy();
        }
        console.log(this.scroll);
    },
    created() {

        axios.get('http://localhost/PV/PlanetVoyager/public/php/ItineraryVenus.php')
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
        top: 0;
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
                left: 130%;
            }
        }

        // 第二塊
        .schedule2 {
            flex-direction: column-reverse;
            position: relative;
            top: 30%;

            .schedule-pic {
                transform: translateY(20%);
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
            margin-left: 15vh;
            flex-direction: column;

            .schedule-pic {

                position: relative;
                transform: translateY(-10%);
                display: flex;
                flex-direction: row;
                width: 50%;
            }
        }


        // 第四塊
        .schedule4 {
            margin-top: 40vh;
            margin-left: 15vh;

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
                width: 20%;
            }
        }

        // 第五塊
        .schedule5 {
            flex-direction: column;
            margin-left: 10vh;

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