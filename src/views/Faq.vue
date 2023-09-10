<template>
 
    <router-view/> 



        <div class="title">
            <h2>問與答</h2>
            <div class="line"></div>
            <div class="card">
                <img src="~@/assets/image/faq/QA.svg" alt="">
                <p>Welcome to our Q&A session! Ask questions,<br>
                    get answers, and dive into engaging<br>
                    discussions with our experts.</p>
            </div>
        </div>
        <div class="faq">
            <h3>FAQs</h3>
            <span class="caption">GENERAL</span>
            <div v-for="(item, index) in questions" :key="item.order" >
                <button class="accordion" @click="showContentF(index)">
                    <img src="~@/assets/image/faq/title.svg" alt="">
                    <span>{{ item.order }}</span>{{ item.question }}
                </button>
                <div class="panel" v-show="item.toggle">
                    <p>{{ item.answer }}</p>
                </div>
            </div>
        </div>


   
    




</template>
<!-- <script src="./js/faq2.js"></script> -->
<script src="./js/faq.js"></script>


<style>
body {
    background-color: #000;
}

/* 打开和关闭手风琴面板的样式 */
.accordion {
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    padding: 10px 90px 10px 18px;
    width: 100%;
    text-align: left;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    border-left: none;
    outline: none;
    transition: 0.4s;
    font-size: 20px;
    display: flex;
    align-items: center;
}

/* 设置点击和鼠标移到选项上面时（悬停）的样式 */
.active,
.accordion:hover {
    background-color: #ffffff38;
    color: #ffffff;
}

/* 为手风琴面板设计样式。 默认隐藏 */
.panel {
    padding: 0 18px;
    /* background-color: transparent; */
    color: #fff;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    font-size: 14px;
    line-height: 2;
    width: 800px;
    line-height: 1.8;
}

.panel p {
    padding: 15px 0;
}

/* 设置 +、- 标志 */
.accordion:after {
    content: '\002B';
    /* Unicode 字符 + 号 */
    color: #777;
    font-weight: bold;
    /* float: right; */
    margin-left: 5px;
    font-size: 20px;
    display: block;
    margin-left: auto;
}

.accordion span {
    font-size: 30px;
    padding: 0 20px;
}

.accordion img {
    width: 10px;
}

.active:after {
    content: "\2212";
    /* Unicode 字符 - 号 */
}

.title {
    padding-top: 40px;
    max-width: 1000px;
    margin: auto;
    display: flex;
    flex-direction: row;
    color: #fff;
}

.title h2 {
    writing-mode: vertical-lr;
    letter-spacing: 1em;
    font-size: 35px;
    color: #fff;
}

.title .line {
    border: 2px solid #fff;
    margin-left: 40px;
    height: 100px;
}

.faq {
    max-width: 1000px;
    margin-left: auto;
    padding-bottom: 60px;
}

.faq h3 {
    text-align: center;
    font-size: 40px;
    color: #fff;
    padding-bottom: 20px;
}

.caption {
    color: #fff;
    font-size: 30px;
    display: block;
    padding-bottom: 10px;
}

.card {
    padding-left: 20px;
}

.card img {
    max-width: 350px;
}

.card p {
    font-size: 14px;
}
</style>