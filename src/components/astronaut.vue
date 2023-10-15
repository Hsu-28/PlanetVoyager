<template>

      <canvas id="threeJS"></canvas>
 
  </template>
  
  <script>
	import * as THREE from "three"; //把全部thress.js的東西引入
	import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"; //引入GLTFloader，以載入GLTF 格式 3D 模型的模組。
	import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
	//載入thress.js軌道，控制相機軌道的模組
	//"相機軌道控制模組"（OrbitControls），用於實現 3D 场景中相機的控制。允許透過鼠標控制旋轉 縮放 等操作
	//旋轉相機以不同的角度觀看 3D 场景。
	//使用滾輪縮放相機以放大或縮小場景中的物體。
	//平移相機以改變視角。
	//控制相機的運動速度和限制。
	//基本上就是一定要載入拉

  export default {
    data(){
      return{
        publicPath: process.env.BASE_URL,//這邊不太懂，定義路徑
		appleWidth: window.innerWidth * 0.5,
      }
      
    },
    mounted() {
      this.initThree();
      window.addEventListener("resize", this.onWindowResize);
      
    },
	
    methods: {
initThree() {
        const scene = new THREE.Scene();//先設定場景
        const canvas = document.querySelector("#threeJS");//設定"canvas"抓到canvas畫布
        const renderer = new THREE.WebGLRenderer({canvas,antialias: true,alpha: true });
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);  // 设置 canvas 大小
		// new THREE.WebGLRenderer宣告在瀏覽器使用WebGL 技術渲染 3D 场景。
		// antialias 啟動讓畫面更平滑，但是運算上比較吃耗能
		// alpha 啟動背景為透明，可以讓後面的東西透出來

		  const width = this.appleWidth; // 20% of window width，自己設的變數不重要
    	const height = width*0.5 ; // 20% of window height，自己設的變數不重要

        renderer.setSize( this.appleWidth , height );//設定場景尺寸
        renderer.setClearColor(0xffffff, 0);//設定場景背景顏色
     
        const camera = new THREE.PerspectiveCamera(
          50,          //這是視場（Field of View）的值，表示相機的視角廣度。
          600 / 350,   //這是相機的寬高比（Aspect Ratio）
          0.1,         //這是相機的近平面（Near Plane）的距離。米為單位
          1000         //這是相機的遠平面（Far Plane）的距離。米為單位
        );
        camera.position.y = 0;
        camera.position.x = 1;
        camera.position.z = 1;//相機位置

        canvas.camera = camera;
  
        const gltfLoader = new GLTFLoader();//宣告說要建立GLTF物件，然後下面開始掛載
		gltfLoader.load(`${this.publicPath}art/t3/scene.gltf`, (gltf) => {
		let model = gltf.scene;//這一行將從 GLTF 文件中加載的 3D 模型保存在 model 變數中。這個變數代表整個 3D 模型的場景，包括所有的物體和結構。
		scene.add(model);//把她掛到three.js場景裡面
		model.scale.set(0.3, 0.3 , 0.3);//這一行調整了模型的縮放。
		model.position.y = -0.5;//這一行調整了模型的位置。
		controls.minPolarAngle = controls.maxPolarAngle = Math.PI / 2; // 限制只能水平旋轉
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
        
		
		const customColor = 0xfffffff;
    // const customColor = 0xffaafff; 其他奇怪顏色
        const ambientLight = new THREE.AmbientLight(customColor, 2.1);//創造環境光  我用這個變色
        
        scene.add(ambientLight);
        canvas.renderer = renderer; 
  
        
        //設定會自動渲染場景
        function animate() {
          renderer.render(scene, camera);
          controls.update();
          requestAnimationFrame(animate);
        }
  
        animate();
      },
      onWindowResize() {
    const parentContainer = document.querySelector(".apple"); // 获取父容器元素
    const width = parentContainer.clientWidth; // 获取父容器的宽度
    const height = width * 0.5; // 根据宽度计算高度
    this.appleWidth = width*0.5;

    // 更新 canvas 元素的大小
    const canvas = document.querySelector("#threeJS");
    canvas.width = width;
    canvas.height = height;

    // 更新 Three.js 相机的宽高比
    const camera = canvas.camera;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    // 更新渲染器的大小
    const renderer = canvas.renderer;
    renderer.setSize(width, height);
  },
    },
    watch:{
      appleWidth() {
        this.appleWidth = window.innerWidth* 0.5 ;
      }
    },

  };
  </script>
  
  