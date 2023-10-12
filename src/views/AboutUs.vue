<template>
    <div class="banner">
        <div class="tit">
            <h1>關於我們</h1>
            <span>ABOUT US</span>
        </div>
    </div>
    <div class="down">
        <img src="../assets/image/aboutUs/about-down.svg" alt="">
    </div>
    <div class="video">
        <video autoplay muted loop id="myVideo">
            <source src="../assets/image/aboutUs/universe.mp4" type="video/mp4">
        </video>
        <div class="video-txt">
            <p>
                我們相信太空是無限的冒險，<br>
                是無盡的奧秘，<br>
                PlanetVoyager為您打開太空的大門。
            </p>
        </div>
    </div>
    <div class="about">
        <section class="founder">
            <div class="title">
                <div class="frame-top"></div>
                <span>0</span>
                <h2>創辦人</h2>
                <h3>FOUNDER</h3>
                <span>1</span>
                <div class="frame-bottom"></div>
            </div>
            <div class="move">
                <div class="container">
                    <div v-for="(item, index) in container" :key="index" class="panel" :class="item.class">
                        <div class="text">
                            <h3>{{ item.name }}</h3>
                            <p>{{ item.introduce }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="company">
            <div class="title">
                <div class="frame-top"></div>
                <span>0</span>
                <h2>公司環境</h2>
                <h3>ENVIRONMENT</h3>
                <span>2</span>
                <div class="frame-bottom"></div>
            </div>
            <div class="cards">
                <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper">
                    <swiper-slide v-for="(item, index) in cards" :key="index">
                        <div class="cards-pic">
                            <img :src="item.image" :alt="item.alt">
                        </div>
                        <div class="txt">
                            <h2>{{ item.title }}</h2>
                            <p>{{ item.text }}</p>
                        </div>
                        <span>{{ item.page }}</span>
                    </swiper-slide>
                </swiper>
            </div>
        </section>
    </div>
    <section class="time">
        <div class="title">
            <div class="frame-top"></div>
            <span>0</span>
            <h2>公司編年史</h2>
            <h3>CGRONICLE</h3>
            <span>3</span>
            <div class="frame-bottom"></div>
        </div>
        <div class="bg-earth"></div>
        <div class="bg-mars"></div>
        <div class="wrap">
            <ul class="timeline">
                <li v-for="(item, index) in timeline" :key="index">
                    <div class="item" :class="item.class">
                        <h2>{{ item.title }}</h2>
                        <p>{{ item.text }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    <div class="about">
        <section class="contact">
            <div class="title">
                <div class="frame-top"></div>
                <span>0</span>
                <h2>聯繫我們</h2>
                <h3>CONTACT US</h3>
                <span>4</span>
                <div class="frame-bottom"></div>
            </div>
            <div class="arrow">
                <img src="../assets/image/aboutUs/big-arrow.svg" alt="">
            </div>
            <div class="data">
                <div class="pic">
                    <img src="../assets/image/aboutUs/logo.svg" alt="">
                </div>
                <table class="phone">
                    <tr>
                        <td><a href="tel:+886-3-4251108">03 425 1108</a></td>
                    </tr>
                    <tr>
                        <td>客服專線</td>
                    </tr>
                </table>
                <table class="addr">
                    <tr>
                        <td><a target="_blank" href="https://maps.app.goo.gl/7UAKNLrP1b2kodCo6">W52 桃園市中壢區<br>復興路46號9樓</a>
                        </td>
                    </tr>
                    <tr>
                        <td>地址</td>
                    </tr>
                </table>
                <table class="serve">
                    <tr>
                        <td>
                            週一至週五<br>
                            9:00~18:00<br>
                            (國定及例假日無服務)
                        </td>
                    </tr>
                    <tr>
                        <td>客服時間</td>
                    </tr>
                </table>
            </div>
        </section>
    </div>

    <div class="bottom"></div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/page/_aboutUs.scss";
</style>

<script src="./js/aboutus.js"></script>
