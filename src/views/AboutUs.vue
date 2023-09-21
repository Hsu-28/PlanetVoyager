<template>
    <div class="banner">
        <div class="tit">
            <h1>關於我們</h1>
            <span>ABOUT US</span>
        </div>
    </div>
    <div class="video">
        <!-- 影片 -->
        <!-- <iframe width="1920" height="700" src="https://www.youtube.com/embed/F2V3zwaPicU?si=BW8Zyb1ArELMMZE6"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe> -->

        <video autoplay muted loop id="myVideo">
            <source src="../assets/image/aboutUs/universe.mp4" type="video/mp4">
        </video>
    </div>
    <div class=" about">
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
                    <div class="panel active bg1">
                        <div class="text">
                            <h3>Alex Edwards</h3>
                            <p>
                                Alex在航空和太空領域擁有豐富的經驗，曾是一家著名太空科技公司的高級工程師，對太空探索有著深刻的熱情，並致力於讓太空旅遊成為現實。
                            </p>
                        </div>
                    </div>
                    <div class="panel bg2">
                        <div class="text">
                            <h3>David Smith</h3>
                            <p>
                                David對於太空科學領域擁有卓越的專業知識。他曾參與多個太空任務，包括國際太空站的建設和月球探測計劃。
                            </p>
                        </div>
                    </div>
                    <div class="panel bg3">
                        <div class="text">
                            <h3>Mark Anderson</h3>
                            <p>
                                Mark曾在全球領先的投資銀行擔任高級副總裁，對金融和資本市場有深刻的了解，且熱衷於將資源引入太空旅遊行業，以實現夢想。
                            </p>
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
            <div class="ccard">
                <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper">
                    <swiper-slide>Slide 1</swiper-slide>
                    <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
                    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
                    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
                    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
                </swiper>
            </div>

            <div class="card">
                <h2>公司外觀</h2>
                <p>本公司因有開發需求，故將位置選在離市區較遠的桃園市W52區</p>
            </div>
        </section>
        <section class="time">
            <div class="title">
                <div class="frame-top"></div>
                <span>0</span>
                <h2>公司編年史</h2>
                <h3>CGRONICLE</h3>
                <span>3</span>
                <div class="frame-bottom"></div>
            </div>
            <div class="wrap">
                <ul class="timeline">
                    <li>
                        <div class="item">
                            <h2>公司成立</h2>
                            <p>在1999年，我們敢於夢想，創立了PlanetVoyager。我們的團隊由夢想家和科學家組成，致力於太空旅遊的可能性。</p>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <h2>首次登陸</h2>
                            <p>第二年(2000年)，我們成功進行了旅行團首次月球登陸。這次歷史性的登陸為我們的公司帶來了全球關注，標誌著太空旅遊的新紀元。</p>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <h2>擴展與合作</h2>
                            <p>2005年開始擴大我們的太空旅遊項目，新增火星及金星，並建立了與太空科技公司的合作夥伴關係，以提供更多選擇和更高的安全標準。</p>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <h2>星際旅遊</h2>
                            <p>2008年見證了星際旅遊的崛起，客戶可以在太空站中度過豪華且深度的假期。這一年，我們的服務超越了地球。</p>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <h2>科學探索</h2>
                            <p>2010我們開始支持科學家進行太空實驗，以研究太陽系中的神秘之處。我們成為太空科學的夥伴，推動知識的邊緣。</p>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <h2>太空旅遊的未來</h2>
                            <p>我們將目光投向更遠的未來，計劃更遠的目的地和更多的太空冒險。我們將繼續領先，實現太空夢！</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
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
                        <td><a href="">03 425 1108</a></td>
                    </tr>
                    <tr>
                        <td>客服專線</td>
                    </tr>
                </table>
                <table class="addr">
                    <tr>
                        <td><a href="">W52 桃園市中壢區<br>復興路46號9樓</a></td>
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
