<template>
   <div id="notfound">
      <div class="container">
         <div class="overlay"></div>
         <div class="pic">
               <img src="../assets/image//notfound/black_hole.jpg" alt="background">
         </div>
            
            <div class="text">
               <div class="error">404</div>
               <p>This Page Got Lost In A Black Hole</p>
               <button  @click="goBack" >GO BACK</button>
            </div>
         </div>
</div>

    <router-view/>
      
</template>

<style scoped lang="scss">
@import "~@/assets/sass/page/_notfound.scss";
</style>

<script>
export default {
  methods: {
    goBack() {
      // 使用 $router.push('/') 返回到主頁
      this.$router.push('/');
    }
  }
};
</script>
