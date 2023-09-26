<template>
    <div id="itinerary">
        <div class="planet-bg">
            <img src="@/assets/image/itinerary_moon/moon-bg.png" alt="moon">
        </div>
        <div class="main-container" data-scroll-container>
            <div class="scrollsection" data-scroll-section>
                <!-- 旅程名稱 -->
                <div class="title" style="writing-mode: vertical-lr" data-scroll data-scroll-speed="1">
                    <h1>月 球 巡 禮</h1>
                    <p></p>
                    <p></p>
                </div>
                <!-- 第一塊 -->
                <div class="schedule-section schedule-section1" data-scroll data-scroll-speed="2">
                    <div class="schedule schedule1">
                        <div class="schedule-text">
                            <h3>Day1 旅程啟航！</h3>
                            <p>從地球啟程後可飽覽星際風光，飛行十四個小時後，我們會抵達偉諭航空站，稍作休息後再前往月球。</p>
                        </div>
                        <div class="schedule-pic">
                            <div class="image-box" @click="showPic1($event)">
                                <img src='@/assets/image/aboutUs/bg-earth.svg'>
                            </div>
                            <div class="image-box" @click="showPic1($event)">
                                <img src='https://picsum.photos/100/100'>
                            </div>
                            <div class="image-box" @click="showPic1($event)">
                                <img src='https://picsum.photos/300/500'>
                            </div>
                        </div>
                        <div class="schedule-big-pic">
                            <img :src='bigpic1'>
                        </div>
                    </div>

                </div>
                <!-- 第二塊 -->
                <div class="scrollsection" data-scroll-section>
                    <div class="schedule-section schedule-section2">
                        <div class="schedule schedule2" data-scroll data-scroll-speed="2">
                            <div class="schedule-text">
                                <h3>Day2 成為歷史的見證者，朝聖阿姆斯壯的腳印</h3>
                                <p>That's one small step for man, one giant leap for mankind.
                                    極其幸運的，按照當初太陽神11號紀錄的座標定位找尋，我們發現了尚未被隕石催毀的腳印，目前也透過技術保存，讓各位參與歷史的里程。</p>
                            </div>
                            <div class="schedule-pic">
                                <div class="image-box" @click="showPic2($event)">
                                    <img src='https://picsum.photos/200/300'>
                                </div>
                                <div class="image-box" @click="showPic2($event)">
                                    <img src='https://picsum.photos/100/100'>
                                </div>
                                <div class="image-box" @click="showPic2($event)">
                                    <img src='https://picsum.photos/300/500'>
                                </div>
                            </div>
                        </div>
                        <div class="schedule-big-pic">
                            <img :src='bigpic2'>
                        </div>
                    </div>

                </div>
                <div class="scrollsection" data-scroll-section>
                    <!-- 第三塊 -->
                    <div class="schedule-section schedule-section3" data-scroll data-scroll-speed="2">
                        <div class="schedule schedule3">
                            <div class="schedule-text">
                                <h3>Day3 飽覽貝利環形山坑勝景</h3>
                                <p>月球上的隕石坑是由於天體撞擊而形成的，大小不一，深淺各異。其中隕坑中心月面座標為49.78°N
                                    30.56°E，直徑25.68公里，深約1.92公里，位於月球南極附近，直徑達295千米，比海南島還大。世上有什麼比在月球上較量高爾夫 再來瓶啤酒更愜意的事呢?</p>
                            </div>
                            <div class="schedule-pic">
                                <div class="image-box" @click="showPic3($event)">
                                    <img src='https://picsum.photos/200/300'>
                                </div>
                                <div class="image-box" @click="showPic3($event)">
                                    <img src='https://picsum.photos/100/100'>
                                </div>
                                <div class="image-box" @click="showPic3($event)">
                                    <img src='https://picsum.photos/300/500'>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="schedule-big-pic">
                        <img :src='bigpic3'>
                    </div>
                </div>
                <div class="scrollsection" data-scroll-section>
                    <!-- 第四塊 -->
                    <div class="schedule-section schedule-section4" data-scroll data-scroll-speed="2">
                        <div class="schedule schedule4">
                            <div class="schedule-text">
                                <h3>Day4、5 月球大縱走--橫斷月海與月谷</h3>
                                <p>這兩天我們將駕駛Planet Voyager的頂規太空車，Lunar
                                    Voyager橫越橫斷月海與月谷到達台日共構月球基地--蒂芬妮丘。除了欣賞美景以外，如果遇到外星物種也請不用擔心，他們是很友善的族群。</p>
                            </div>
                            <div class="schedule-pic">
                                <img class="image" src='https://picsum.photos/100/100'>
                                <img class="image" src='https://picsum.photos/100/100'>
                                <img class="image" src='https://picsum.photos/100/100'>
                            </div>
                        </div>
                        <div class="schedule-big-pic">
                            <img :src='bigpic4'>
                        </div>
                    </div>
                </div>

                <div class="scrollsection" data-scroll-section>
                    <div class="schedule-section schedule-section5" data-scroll data-scroll-speed="2">
                        <div class="schedule schedule5">
                            <div class="schedule-text">
                                <h3>Day 6 台日共構月球基地--蒂芬妮丘</h3>
                                <p>蒂芬妮丘是深太空探索的跳板，有助於實現我們登陸更遠的星系。月球基地的太陽能發電站將為未來太空任務提供可再生能源，強化星際探索空持續性。旅客在此休息養足精神，隔日再行返家。
                                </p>
                            </div>
                            <div class="schedule-pic">
                                <img class="image" src='https://picsum.photos/100/100'>
                                <img class="image" src='https://picsum.photos/100/100'>
                                <img class="image" src='https://picsum.photos/100/100'>
                            </div>
                        </div>
                        <div class="schedule-big-pic">
                            <img :src='bigpic5'>
                        </div>
                    </div>
                </div>
                <div class="scrollsection" data-scroll-section>
                    <!-- 第六塊 -->
                    <div class="schedule-section schedule-section6" data-scroll data-scroll-speed="2">
                        <div class="schedule schedule6">
                            <div class="schedule-text">
                                <h3>Day 7 返回家鄉--地球</h3>
                                <p>星際旅遊的壯闊冒險完美收尾！在無重力中飄浮的日子即將結束，我們即將返回地球。帶著難以置信的回憶和深刻的體驗，我們準備迎接重力的擁抱。也請各位珍惜回程最後飽覽太空的絕美景觀的機會。如果捨不得，我們期待著下次再與您共度星際旅遊的美好時光，感謝您的參與！
                                </p>
                            </div>
                            <div class="schedule-pic">
                                <img class="image" src='https://picsum.photos/100/100'>
                                <img class="image" src='https://picsum.photos/100/100'>
                                <img class="image" src='https://picsum.photos/100/100'>
                            </div>
                        </div>
                        <div class="schedule-big-pic">
                            <img :src='bigpic6'>
                        </div>
                    </div>
                </div>
                <!-- 空白 -->
                <div class="scrollsection" data-scroll-section>
                    <div class="blank-space"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LocomotiveScroll from 'locomotive-scroll';

export default {
    // data() {
    //     return {
    //         scrollInstance: null,
    //         bigpics: ['', '', '', '', '', ''],
    //     }
    // },
    // methods: {
    //     showPic(index, e) {
    //         this.bigpics[index] = (this.bigpics[index] === e.target.src) ? '' : e.target.src;
    //     }
    // },
    data() {
        return {
            scrollInstance: null,
            bigpic1: '',
            bigpic2: '',
            bigpic3: '',
            bigpic4: '',
            bigpic5: '',
            bigpic6: '',
        }
    },
    methods: {
        showPic1(e){
            console.log('1');
            this.bigpic1 === e.target.src? this.bigpic1 = '':this.bigpic1 = e.target.src
        },
        showPic2(e){
            this.bigpic2 === e.target.src? this.bigpic2 = '':this.bigpic2 = e.target.src
        },
        showPic3(e){
            this.bigpic3 === e.target.src? this.bigpic3 = '':this.bigpic3 = e.target.src
        },
        showPic4(e){
            this.bigpic4 === e.target.src? this.bigpic4 = '':this.bigpic4 = e.target.src
        },
        showPic5(e){
            this.bigpic5 === e.target.src? this.bigpic5 = '':this.bigpic5 = e.target.src
        },
        showPic6(e){
            this.bigpic6 === e.target.src? this.bigpic6 = '':this.bigpic6 = e.target.src
        },
    },
    // showPic(area) {
    //     // 根据区域和索引选择正确的大图URL

    // }

    // showPic1(e) {
    //     // document.getElementById("bigpic1").src === e.target.src? document.getElementById("bigpic1").src = '': document.getElementById("bigpic1").src = e.target.src;
    //     document.getElementById("bigpic1").src = e.target.src;



    // },

    // testshowpic(e){
    //     e.target.parentElement.nextSibling.firstChild.src = e.target.src;

    // showPic(a, i) {
    //     console.log(this);
    //     `this.bigpic${i}` = e.target.src
    // }
    mounted() {
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
    }
}




</script>


<style scoped lang="scss">

#itinerary {


    .image-box {
        width: 60px;
        height: 60px;

        img {
            max-width: 100%;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center center;
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
        // width: 100%;
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
        padding: 10vh 5vh 5vh 0vh;
        overflow: visible;

        &:first-child {
            padding-left: 40vh;
        }
        .schedule-section {
            position: relative;
            height: 100%;
            display: flex;
            flex-direction: column;
            margin-left: 5vh;

            .schedule-big-pic {
                opacity: 1;
                position: absolute;
                width: 100%;
                height: 50%;
                img{
                    max-width: 100%;
                    height: auto;
                    object-fit: cover;
                    overflow: hidden;
                }
            }

            .schedule-text {
                position: relative;
            }

            .schedule-text::after {
                position: absolute;
                top: 100%;
                left: 150%;
                content: url(@/assets/image/donate/down.svg);
                transform: rotate(-45deg);
            }
        }

        // 第一塊
        .schedule-section1 {
            position: relative;

            .schedule-pic {
                position: relative;
                bottom: 10%;
                right: 5%;
                width: 45%;
            }
        }

        // 第二塊
        .schedule-section2 {
            .schedule {
                order: 2;
            }

            .schedule-big-pic {
                order: 1;
                width: 400px;
                height: 300px;

                img {
                    margin: 0 auto;
                }
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
            .blank-space {
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

                position: relative;

                &:after {
                    position: absolute;
                }

                p {
                    word-break: break-all;
                    white-space: initial;
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