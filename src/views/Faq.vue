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
<!-- <script src="./js/faq.js"></script> -->
 <script>
export default {
    data() {
        return {
            openedIndex: null,  // 初始化时没有打开的答案
            questions: [
                {
                    order: '01',
                    question: '太空旅遊的主要安全問題是什麼？',
                    answer: '太空旅遊的安全性是我們最重要的關切。主要安全問題包括太空船發射和著陸過程中的風險、失重對旅客身體的影響、太空環境中的輻射暴露以及太空船和設施的功能可靠性。為了應對這些問題，我們採用了嚴格的工程標準和安全程序，並要求所有參加太空旅遊的旅客接受嚴格的訓練和健康檢查。'
                },
                {
                    order: '02',
                    question: '我可以在太空旅遊中參與科學實驗嗎？',
                    answer: '是的，我們鼓勵旅客參與科學實驗。在太空旅遊期間，您將有機會參與一系列科學研究項目，例如研究失重環境對人體的影響、觀測天文現象，甚至參與植物生長實驗。這不僅豐富了您的旅行體驗，還有助於擴展我們對太空的科學知識。'
                },
                {
                    order: '03',
                    question: '太空旅遊是否適合老年人和身體不健康的人？',
                    answer: '太空旅遊對身體狀況有一定要求，但不一定排除了老年人和一些身體不健康的人。參加太空旅遊的旅客應該通過嚴格的健康檢查，以確保他們能夠適應太空環境。然而，老年人和身體不健康的人可能會面臨一些額外的風險，我們建議他們在參加之前咨詢醫生。'
                },
                {
                    order: '04',
                    question: '太空旅遊是否對地球環境有負面影響？',
                    answer: '太空旅遊行業一直在努力減少對地球環境的影響。我們致力於減少火箭發射的碳排放，參與太空碎片清理，並探索在太空中利用資源以減少地球資源的壓力。同時，我們也支持環保項目，以促進地球的可持續性。'
                },
                {
                    order: '05',
                    question: '太空旅遊的未來是什麼？',
                    answer: '太空旅遊的未來令人興奮。我們預期未來將有更多的太空旅遊目的地，包括登陸火星和其他星體。技術的不斷發展將使太空旅遊更加普及，並帶來更多的科學和商業機會。我們致力於推動太空旅遊的發展，讓更多人能夠參與這一獨特的探險體驗。'
                },
            ]
        };
    },
    methods: {
        accordionEvent() {
            const acc = document.getElementsByClassName("accordion");
            for (let i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function () {
                    this.classList.toggle("active");
                    const panel = this.nextElementSibling;
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                });
            }
        }
    },
    mounted() {
        this.accordionEvent()
    }
}


</script> 