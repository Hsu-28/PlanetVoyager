<template>
    <router-view />
    <section class="order-container">

        <!-- <div class="order-item" v-for="item in titlelist" :key="titleC">
            <div class="order-title">
                <img class="orderP" :src="item.src" :alt=item.titleC>
                <p>{{ item.titleE }}</p>
                <h2>{{ item.titleC }}</h2>
            </div>
            <div class="choose">
                CHOOSE
            </div>
        </div> -->
  



        <div class="order-item" v-for="(item ,index) in titlelist" :key="titleC">
            <span ></span>
            <span></span>
            <span ></span> 
            <span ></span>
            
            
            <div class="imgContaint">
                <img :src="item.bgsrc" alt="" class="img-bg">
            </div>

            <div class="order-title">
                <img class="orderP" :src="item.psrc" :alt=item.titleC>
                <p>{{ item.titleE }}</p>
                <h2>{{ item.titleC }} </h2>
               
            </div>
            
            <div class="choose">
                CHOOSE
            </div>
           
       
        </div>





    </section>
    <!-- <img src="@/assets/image/ordertitle/PLANETARYORBIT.svg" alt=""> -->
 
</template>
<script src="@/views/js/ordertitle"></script>


<style scoped lang="scss">
@import "~@/assets/sass/page/orderTitle.scss";
</style>