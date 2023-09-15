<template>
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
    <div class="faq-width">
        <div class="faq">
            <div class="heading">
                <h3>F A Q s</h3>
            </div>
            <span class="caption">GENERAL</span>
            <div v-for="(item, index) in questions" :key="item.order">
                <button class="accordion">
                    <img src="~@/assets/image/faq/title.svg" alt="">
                    <span>{{ item.order }}</span>{{ item.question }}</button>
                <div class="panel">
                    <p>{{ item.answer }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style s lang="scss">
@import "@/assets/sass/page/_faq.scss";
</style>
<script src="./js/faq.js"></script>
