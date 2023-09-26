<template>
   <div id="notfound">
        
     <div class="overlay"></div>
     <div class="pic">
          <img src="../assets/image//notfound/black_hole.jpg" alt="background">
     </div>
      
        <div class="text">
          <div class="error">404</div>
          <p>This Page Got Lost In A Black Hole</p>
          <button >GO BACK</button>
       </div>

   </div>


    <router-view/>
      
</template>

<style scoped lang="scss">
@import "~@/assets/sass/page/_notfound.scss";
</style>
