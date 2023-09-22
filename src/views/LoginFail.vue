@import compass/css3
<template>
<div id="login-success">
    <div class="bgimg">
        <!-- error效果 -->
        <div class="glitch" data-text="ERROR">ERROR</div> >

        <div class="black-bg"> 
            <h3>帳號或密碼輸入錯誤</h3>
            <p>請再試一次</p>  
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
#login-success{
    .glitch {
        color: $white;
        font-size: $h1-l;
        font-weight: 700;
        position: relative;
        letter-spacing: 1rem;
        margin: 0 auto;
        }
        @keyframes noise-anim {
        $steps: 20;
        @for $i from 0 through $steps {
            #{percentage($i*(1/$steps))} {
            clip: rect(random(100) + px, 9999px, random(100) + px, 0);
            }
        }
    }
        .glitch:after {
        content: attr(data-text);
        position: absolute;
        left: 2px;
        text-shadow: -3.5px 0 rgb(254, 28, 130);
        top: 0;
        color:$white;
        background: transparent;
        overflow: hidden;
        clip: rect(0, 900px, 0, 0);
        animation: noise-anim 2s infinite linear alternate-reverse;
        }

        @keyframes noise-anim-2 {
        $steps: 20;
        @for $i from 0 through $steps {
            #{percentage($i*(1/$steps))} {
            clip: rect(random(100) + px, 9999px, random(100) + px, 0);
            }
        }
        }
        .glitch:before {
        content: attr(data-text);
        position: absolute;
        left: -2px;
        text-shadow: 3.5px 0 rgb(32, 228, 146);
        top: 0;
        color: $white;
        background: transparent;
        overflow: hidden;
        clip: rect(0, 900px, 0, 0);
        animation: noise-anim-2 3s infinite linear alternate-reverse;
        }
    .bgimg{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 100%;
        height: 100vh;
        background:  no-repeat center/28% url(~@/assets/image/loginfail/登入失敗.svg);
    }
    
    .black-bg{
        background-color: rgba(14, 14, 14, .9);
        width: 100%;
        padding: 20px 0;

        h3, p{
            line-height: 2;
            text-align: center;
            font-size: $p1-l;
            color: $white;
            letter-spacing: .2em;
        }
    }
}


</style>