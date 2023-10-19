import ButtonFlashBox from '@/components/ButtonFlash.vue';
import axios from 'axios';
import { contains } from 'jquery';

export default {
    components: {
        ButtonFlashBox: ButtonFlashBox
    },
    data() {
        return {
            questions: {},
            status: "donate",
            inputText: '',
            name: "",
            email: "",
            address: "",
            safetyCode: "",
            Preface: '太空，是我們人類永遠的夢想，\n我們正站在一個令人振奮的時刻，一個能夠改變世界的時代。\n\n然而，這樣的夢想需要您的支持。\n\n我們將利用這些資源推動太空科技的發展，\n確保星際旅遊變得更加安全、可持續和普及。',
            tableL1: [
                {
                    imgSrc: ' ',
                    content: ' ',
                },
                {
                    imgSrc: require("@/assets/image/donate/member.svg"),
                    content: '銀',
                    alt: '銀',
                },
                {
                    imgSrc: require("@/assets/image/donate/member.svg"),
                    content: '金',
                    alt: '金',
                },
                {
                    imgSrc: require("@/assets/image/donate/member.svg"),
                    content: '白金',
                    alt: '白金',
                },
                {
                    imgSrc: require("@/assets/image/donate/member-top.svg"),
                    content: '鑽石',
                    alt: '鑽石',
                },
            ],
            tableL2: [
                {
                    amount: '達標金額'
                },
                {
                    amount: 'NT$3,000'
                },
                {
                    amount: 'NT$6,000'
                },
                {
                    amount: 'NT$20,000'
                },
                {
                    amount: 'NT$100,000'
                },
            ],
            tableL3: [
                {
                    giveaway: '贈品'
                },
                {
                    giveaway: '鑰匙圈'
                },
                {
                    giveaway: '棒球帽'
                },
                {
                    giveaway: '帽T'
                },
                {
                    giveaway: '太空人頭盔'
                },
            ],
            tableC1: [
                {
                    td: ' ',
                },
                {
                    td: '達標金額',
                },
                {
                    td: '贈品',
                },
            ],
            tableC2: [
                {
                    imgSrc: require("@/assets/image/donate/member.svg"),
                    content: '銀',
                    alt: '銀',
                },
                {
                    td: 'NT$3,000'
                },
                {
                    td: '鑰匙圈'
                },
            ],
            tableC3: [
                {
                    imgSrc: require("@/assets/image/donate/member.svg"),
                    content: '金',
                    alt: '金',
                },
                {
                    td: 'NT$6,000'
                },
                {
                    td: '棒球帽'
                },
            ],
            tableC4: [
                {
                    imgSrc: require("@/assets/image/donate/member.svg"),
                    content: '白金',
                    alt: '白金',
                },
                {
                    td: 'NT$20,000'
                },
                {
                    td: '帽T'
                },
            ],
            tableC5: [
                {
                    imgSrc: require("@/assets/image/donate/member-top.svg"),
                    content: '鑽石',
                    alt: '鑽石',
                },
                {
                    td: 'NT$100,000'
                },
                {
                    td: '太空人頭盔'
                },
            ],
            detail: {
                title1: '支持太空，創造未來。',
                content: '您的捐款將用於太空探索技術的研發、宇航員培訓、環境保護措施以及推動太空旅遊的法規和標準。這不僅是支持一個夢想，更是為我們的子孫後代打開通向星星的大門。',
                img1: require("@/assets/image/donate/detail01.jpg"),
                alt: '詳細資訊內圖片',
                title2: '星際夢幻之旅 - 捐款抽獎活動',
                p1: '您有機會成為太空冒險的幸運者！我們在實現星際夢想的道路上需要您的支持，而現在，捐款不僅可以推動太空探索，還有機會送您上太空！',
                p2: '每一筆捐款都將是實現太空探索的一步，無論您的捐款金額大小，我們都感激不盡。為了表達謝意，我們將在這次的「星際夢幻之旅」捐款抽獎活動中，送出令人嘆為觀止的獎品。',
                title3: '捐款獎品包括：',
                p3: '● 太空之旅套餐： 贏得此獎品，您將獲得一趟星際太空旅遊的免費套餐，一生難忘的太空之旅等待著您。\n● 夜空觀測套件： 這個套件包括高品質的望遠鏡、星空地圖和專業的天文觀測指南，讓您在地球上也能欣賞星星。\n● 星際冒險寶盒： 這個寶盒中有各種與太空探索有關的禮品，包括太空模型、星星手繪畫、太空書籍等等。\n',
                p4: '另外，加入會員還可以根據您的支持程度兌換精美禮品！這是我們對您忠誠支持的感謝，也是實現太空探索的一部分。\n捐款金額擊兌換禮品如以下圖示，歡迎加入Planet Voyager會員計畫，享受這些精彩特典，並一同點亮太空的星星！',
                img2: require("@/assets/image/donate/detail02.jpg"),
            },
            money: {
                title1: '我要捐款',
                title2: '我想支持太空，推動科技發展！',
                p1: '您的捐款將直接支持太空人的訓練、科學實驗以及安全的太空任務執行，讓太空充滿更多的希望和可能性。'
            },
            btn: [
                {
                    amount: '3000',
                    span: '新臺幣'
                },
                {
                    amount: '6000',
                    span: '新臺幣'
                },
                {
                    amount: '20000',
                    span: '新臺幣'
                },
            ]
        };
    },
    methods: {
        updateInput: function (index, buttonText) {
            this.inputText = buttonText;
        },

        dochange(e) {
            if (e.target.value.length == e.target.getAttribute('maxLength')) {
                e.target.nextElementSibling.focus();
            }
        },

        changetomember() {
            this.status = 'checkinfo';
            console.log(this.status);
        },
        changetopay() {
            this.status = 'pay';
            console.log(this.status);
        },
        changetofinish() {
            this.status = 'loading';
            console.log(this.status);
            this.startLoading();

            // 傳送
            const data = {
                donate_id: 1,
                donate_amount: this.inputText,
                donate_stat: "成功",
                email: this.email,
            };
            // axios.post('http://localhost/PV/PlanetVoyager/public/php/donate.php', data, {
            // axios.post('https://tibamef2e.com/chd103/g3/PlanetVoyager/php/donate.php', data, {
            axios.get(`${this.$store.state.phpPublicPath}/donate.php`, data, {

                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                });
        },
        startLoading() {
            // 模擬加載，等待 3 秒後顯示下一個畫面
            setTimeout(() => {
                // 顯示下一個畫面
                this.status = 'success';
            }, 3000);
        },
        resetToDefault() {
            // 將所有 v-model 的值重置為默認值
            this.status = 'donate';
            this.inputText = '';
            this.name = "";
            this.email = "";
            this.address = "";
            this.safetyCode = ""
        }
    },
    mounted() {
        const $input = document.querySelectorAll('input');
        $input.forEach(input => {
            input.addEventListener('input', this.dochange);
        });
    },
    created() {
        // 發起HTTP GET 請求
        axios.get(`${this.$store.state.phpPublicPath}donate.php`)
    // axios.get('http://localhost/PV/PlanetVoyager/public/php/donate.php')
        axios.get(`${this.$store.state.phpPublicPath}donate.php`)
            .then(response => {
                this.questions = response.data;
                console.log(this.questions)
            })
            .catch(error => {
                console.error(error);
            });
     // axios.get('http://localhost/PV/PlanetVoyager/public/php/donateMember.php')
        axios.get(`${this.$store.state.phpPublicPath}donateMember.php`)
            .then(response => {
                this.name = response.data["mem_name"]
                this.email = response.data["email"]
                this.address = response.data["address"]
                // this.questions = response.data;
                console.log(response.data)
            })
            .catch(error => {
                console.error(error);
            });

        //登入狀態驗證
        fetch(`${this.$store.state.phpPublicPath}verifyLogin.php`, {
            mode: "cors",
            credentials: "include",
        })
            .then(response => response.json())
            .then(data => {
                if (data.msg === "未登入") {
                    alert('請先登入進行捐款喔！');
                    document.getElementById("pay_btn").disabled = true;
                    document.getElementById("pay_btn").title = "請先登入會員！";
                }
            })
            .catch(error => {
                console.error(error);
            });
    }
}