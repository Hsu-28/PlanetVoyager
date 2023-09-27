<template>
    <div id="login-success">
        <div class="bgimg">
        
            <h2>SUCCESSFUL</h2>
            <div class="black-bg"> 
                <h3>訂購成功</h3>
                <p>正在為您跳轉頁面</p>  
            </div>
        </div>
    </div>
    </template>
    <script>
    export default{
        mounted() {
        setTimeout(() => {
         this.$router.push('/memberCenter');
        }, 3000);
    },
    }
    </script>
    <style scoped lang="scss">
    #login-success{
    
        .bgimg{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 100%;
            height: 100vh;
            background:  no-repeat 50% 80%/25% url(~@/assets/image/loginsuccess/登入成功.svg);
        }
        h2{
            position: relative;
            margin: 100px auto 20px;
            font-size: 57.6px;
            font-weight: 700;
            letter-spacing: .2em;
            color: transparent;
            -webkit-text-stroke: 1px $blue;
            // text-shadow: 8.7px .5px $white, 9px 0px rgba(0,0,0,0), 8.9px .3px rgba(91, 19, 236, 40%);
            &::after{
                content: "SUCCESSFUL";
                position: absolute;
                left: 2%;
                top: 0;
                color: transparent;
                -webkit-text-stroke: .2px $white;
                // text-shadow: 0px 0px 10px $blue;
            }
            &::before{
                content: "SUCCESSFUL";
                position: absolute;
                filter: blur(0.7px);
                left: 2%;
                top: 0;
                color: transparent;
                -webkit-text-stroke: 3.5px $blueO;
            }
        }
        .black-bg{
            background-color: rgba(14, 14, 14, .9);
            width: 100%;
            padding: 20px 0;
            h3, p{
                line-height: 2;
                text-align: center;
            }
            h3{
                font-size: $h2-l;
                font-weight: 700;
                color: transparent;
                -webkit-text-stroke: 1px $blue;
            }
            p{
                font-size: $p1-l;
                color: $blue;
                letter-spacing: .2em;
            }
        }
    }
    
    
    </style>
    