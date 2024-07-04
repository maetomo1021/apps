
document.addEventListener("DOMContentLoaded", function () {

    // 画面サイズの取得
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // レンダラーの作成
    const canvas = document.getElementById('canvas');
    const renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setSize(windowWidth, windowHeight);

    // シーンの作成
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#ffffff'); // 背景色の設定(白色)

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(75, windowWidth / windowHeight, 0.1, 1000);
    camera.position.set(10, 0, 5); // カメラの位置を調整

    // ライトの作成
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 20, 5);
    scene.add(light);

    // 3Dモデルの読み込み
    const loader = new THREE.GLTFLoader();
    loader.load('../static/Image/blender/3dmodel/mazabo-maetomo_ver3_big_colored.gltf', function (gltf) {
        // '3dmodel/Asus_Rog_Strix_z-390_i-gaming.gltf'
        const model = gltf.scene;
        scene.add(model);
        animate();
    });

    // OrbitControlsの設定
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.enableZoom = true;
    controls.zoomSpeed = 0.5;
    controls.enablePan = true;
    controls.panSpeed = 0.5;
    // アニメーション
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
})
