window.addEventListener('DOMContentLoaded', function () {
    // 画面サイズの取得
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // レンダラーの作成
    const canvas = document.getElementById('canvas');
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true // 透明背景を有効にする
    });
    renderer.setSize(windowWidth, windowHeight);

    // シーンの作成
    const scene = new THREE.Scene();
    scene.background = null; // 背景色の設定(白色)

    // カメラの設定
    const camera = new THREE.PerspectiveCamera(75, windowWidth / windowHeight, 0.1, 1000);
    camera.position.set(0, 0.03, 2.5);

    // 環境光の追加
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.);
    scene.add(ambientLight);

    // 方向光の追加
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 11, 0);
    scene.add(directionalLight);

    // カメラコントロールの設定 (OrbitControls)
    const controls = new THREE.OrbitControls(camera, renderer.domElement);

    // カメラの動きを無効 変えるな！ f○●k !
    controls.enableRotate = false; // カメラの回転を無効
    controls.enableZoom = false;   // カメラのズームを無効
    controls.enablePan = false;    // カメラのパンを無効
    // GLTFモデルの読み込み
    const loader = new THREE.GLTFLoader();
    loader.load('../../../static/Image/blender/3dmodel/home.gltf', (gltf) => {
        const model = gltf.scene;
        scene.add(model);
    });

    // レンダリングループ
    const animate = () => {
        requestAnimationFrame(animate);
        controls.update(); // カメラコントロールの更新
        renderer.render(scene, camera);

    };
    animate();

    // Canvasサイズ設定
    function resizeCanvas() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const canvasWidth = windowWidth * 0.7;
        const canvasHeight = windowHeight * 0.9;

        renderer.setSize(canvasWidth, canvasHeight); // レンダラーのサイズを設定
        camera.aspect = canvasWidth / canvasHeight; // カメラのアスペクト比を更新
        camera.updateProjectionMatrix(); // カメラの投影行列を更新
    }

    // ウィンドウのリサイズイベントに対応
    window.addEventListener('resize', resizeCanvas);

    // 初期のリサイズ呼び出し
    resizeCanvas();
});
