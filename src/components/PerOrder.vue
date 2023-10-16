<template>
  <section class="per-order">
    <form action="">

    
    <div class="order-i">

      <h4>旅客{{ numOrder }}</h4>
     
      <input type="text" placeholder="姓氏(請以英文輸入)" v-model="form.lastName" name="infos">
      <input type="text" placeholder="名字" v-model="form.name" name="infos">
      <select type="text" placeholder="性別" v-model="form.gender" class="gender" name="infos">
        <option value="" disabled selected>選擇性別</option>
        <option value="男性">男性 </option>
        <option value="女性">女性</option>
        <option value="其他">其他</option>
      </select>
      <input type="date" placeholder="出生日期" v-model="form.birthday" class="birthday" name="infos">
      <input type="text" placeholder="國籍" v-model="form.nation" name="infos">
      <input type="text" placeholder="護照號碼" v-model="form.passId" name="infos">
    
      <div class="c-s" >
        <div class="clothe">訓練服尺寸:
          <div class="chose-size">
            <select name="infos" id="" placeholder="訓練服尺寸" v-model="form.size" >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
        </div>
        <div class="status">
          {{ status }}
        </div>
      </div>


      <div class="remark">
        餐食備註:<br>
        <textarea name="infos" id="" cols="50" rows="10" class="remark-t" v-model="form.other"></textarea>
      </div>
    
      <div class="check">
        <input type="checkbox" name="infos" class="infoscheck">我已經詳閱健康規定與訂購注意事項。
      </div>
      <label for="fileUpload" class="upload">上傳體檢報告</label>
      <input type="file" id="fileUpload" style="display: none;" class="upload">
      </div>
  
    <div class="order-s">
      <div class="order-c">
        <h4>選擇艙位</h4>
        <p>Choose Cabin Seat</p>
      </div>
      <div class="cabin">
        <div class="cabin-all">

          <div v-for="i in 10" :key="i"
            :class="['cabin-per', `class${i}`, { 'disable': alreadySelectSeatIndex.includes(i) }]"
            @click="form.seatIndex = i"></div>
          <div class="cabin-chose"><span class="seats">{{ form.seatIndex }}</span></div>
        </div>

      </div>
    </div>

    <div class="order-last">
      <div class="spacesuit">
        <h4>太空服訂製</h4>
        <h5>Tailored Spacesuit</h5>
      </div>
      <div class="order-a apple">
     
      
      <canvas class="threeJS"></canvas>
      <div class="spacesuit-size">
        <div class="clothe">&nbsp; 太空服尺寸:&nbsp;&nbsp;
          <div class="chose-size">
            <select name="infos" id="" placeholder="訓練服尺寸" v-model="form.ssize" >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
        
          </div>
        </div>
        <div>
          <h5>太空服顏色</h5>
          <div class="color-containerAll">
            <div class="color-container">
              <div class="color-b">星月白</div>
              <label for="colorOption1" class="color-show white"></label>
              <input type="radio" id="colorOption1" class="cantsee" @click="white"  :value="whiteC" v-model="form.scolor" name="infos">
            </div>
            <div class="color-container">
              <div class="color-b ">銀河灰</div>
              <!-- <div class="color-show gray"></div> -->
              <label for="colorOption2" class="color-show gray"></label>
              <input type="radio" id="colorOption2" class="cantsee" @click="gray"  :value="grayC" v-model="顏色" name="infos">
            </div>
            <!-- <div class="color-container">
              <div class="color-b ">藍色</div>
              <div class="color-show blue" @click="blue"></div>
            </div>
            <div class="color-container">
              <div class="color-b ">黃色</div>
              <div class="color-show yellow" @click="yellow"></div>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    </div>
    
    </form>
    
  </section>
</template>

<script>
import * as THREE from "three"; //把全部thress.js的東西引入
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"; //引入GLTFloader，以載入GLTF 格式 3D 模型的模組。
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
export default {
  props: ["numOrder", "status", "list"],
  data() {
    return {
      publicPath: process.env.BASE_URL,//這邊不太懂，定義路徑
      appleWidth: '',
      color:  0xffffff,
      whiteC: '星月白',
      grayC: '銀河灰',
      form: {
        lastName: '',
        name: '',
        gender: '',
        birthday: '',
        nation: '',
        passId: '',
        size: '',
        other: '',
        seatIndex: "",
        ssize:'',
        scolor: '',
      }
    }
  },
  computed: {
    alreadySelectSeatIndex() {
      return this.list.map(v => v.seatIndex);
    },
  },
  watch: {
    form: {
      handler(nVal) {
        this.$emit('update-data', nVal)
      },
      deep: true,
    },
  //   appleWidth() {
  //   this.appleWidth = window.innerWidth* 0.5 ;
  // }
  },
  mounted() {
  this.initThree();
  window.addEventListener("resize", this.onWindowResize);
  
},
methods: {
  initThree() {
    const scene = new THREE.Scene();//先設定場景
    const canvas = document.querySelector(".threeJS");//設定"canvas"抓到canvas畫布
    const renderer = new THREE.WebGLRenderer({canvas,antialias: true,alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);  // 设置 canvas 大小
    // new THREE.WebGLRenderer宣告在瀏覽器使用WebGL 技術渲染 3D 场景。
    // antialias 啟動讓畫面更平滑，但是運算上比較吃耗能
    // alpha 啟動背景為透明，可以讓後面的東西透出來

    const parentContainer = document.querySelector(".apple"); // 获取父容器元素
    const width = parentContainer.clientWidth; // 获取父容器的宽度
    const height = parentContainer.clientHeight
    this.appleWidth = width;
    // const width = this.appleWidth*0.9; // 20% of window width，自己設的變數不重要
    // const height = width ; // 20% of window height，自己設的變數不重要

    renderer.setSize( this.appleWidth , height );//設定場景尺寸
    renderer.setClearColor(0xffffff, 0);//設定場景背景顏色
 
    const camera = new THREE.PerspectiveCamera(
      50,          //這是視場（Field of View）的值，表示相機的視角廣度。
      600 / 350,   //這是相機的寬高比（Aspect Ratio）
      0.1,         //這是相機的近平面（Near Plane）的距離。米為單位
      1000         //這是相機的遠平面（Far Plane）的距離。米為單位
    );
    camera.position.y = 0.39;
    camera.position.x = 0.08;
    camera.position.z = 1.04;//相機位置

    canvas.camera = camera;
  
    const gltfLoader = new GLTFLoader();//宣告說要建立GLTF物件，然後下面開始掛載
    gltfLoader.load(`${this.publicPath}art/t3/scene.gltf`, (gltf) => {
    let model = gltf.scene;//這一行將從 GLTF 文件中加載的 3D 模型保存在 model 變數中。這個變數代表整個 3D 模型的場景，包括所有的物體和結構。
    scene.add(model);//把她掛到three.js場景裡面

    model.scale.set(0.31, 0.31 , 0.35);//這一行調整了模型的縮放。
    model.position.y = -0.38;//這一行調整了模型的Y軸位置。
    // model.position.x = -0.5;//這一行調整了模型的X軸位置。
    // controls.minPolarAngle = controls.maxPolarAngle = Math.PI / 2; // 限制只能水平旋轉
    });



    const topLight = new THREE.DirectionalLight(0xffffff, .5); 
    topLight.position.set(100, 0, 200); 
    topLight.castShadow = true;
    scene.add(topLight);

    let controls = new OrbitControls(camera, renderer.domElement);//設定控制器屬性
    controls.enableDamping = false;
    controls.enablePan = false;
    controls.enableZoom = false; 
    controls.target.set( 0, 0, 0);
    
    
    // const customColor = this.color;
// const customColor = 0xffaafff; 其他奇怪顏色
    const ambientLight = new THREE.AmbientLight(this.color , 2);//創造環境光  我用這個變色
    
    scene.add(ambientLight);
    canvas.renderer = renderer; 

    
    //設定會自動渲染場景
    function animate() {
      renderer.render(scene, camera);
      controls.update();
      requestAnimationFrame(animate);
    }

    animate();
    return scene;
  },
  onWindowResize() {
    const parentContainer = document.querySelector(".apple"); // 获取父容器元素
    const width = parentContainer.clientWidth; // 获取父容器的宽度
    const height = parentContainer.clientHeight
    this.appleWidth = width;

    // 更新 canvas 元素的大小
    const canvas = document.querySelector(".threeJS");
    canvas.width = this.appleWidth;
    canvas.height = height;

    // 更新 Three.js 相机的宽高比
    // const camera = canvas.camera;
    // camera.aspect = width / height;
    // camera.updateProjectionMatrix();

    // 更新渲染器的大小
    const renderer = canvas.renderer;
    renderer.setSize(this.appleWidth, height);
  },
  white () {
    this.color = 0xffffaa
    this.updateAmbientLightColor();
  },
  gray () {
    this.color = 0x333333 
    this.updateAmbientLightColor();
  },
  // blue() {
  //   this.color = 0x0000ff
  //   this.updateAmbientLightColor();
  // },
  // yellow () {
  //   this.color = 0xffff00
  //   this.updateAmbientLightColor();
  // },
  updateAmbientLightColor() {
  const scene = this.initThree();
  const ambientLight = scene.getObjectByName('ambientLight'); // 获取环境光
  if (ambientLight) {
    ambientLight.color.set(this.color); // 设置环境光颜色
  }
  return scene;
  }
},
  // emits
}
</script>

<style scoped lang="scss">
@import "~@/assets/sass/page/orderProcess.scss";
</style> 


