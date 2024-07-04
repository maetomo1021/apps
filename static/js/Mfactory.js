window.addEventListener('DOMContentLoaded', function () {
    // script.js
    const modeToggle = document.getElementById("modeToggle");
    const body = document.body;

    modeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");
    });




    function handleHover(img) {
        let animatedSrc = img.getAttribute('data-animated-src');

        // サイズを固定
        img.style.width = img.offsetWidth + "px";
        img.style.height = img.offsetHeight + "px";

        img.src = animatedSrc;
        APNG.animateImage(img);

        img.onmouseout = function () {
            handleMouseOut(img);
        };
    }

    function handleMouseOut(img) {
        let originalSrc = img.getAttribute('data-original-src');
        img.src = originalSrc;
        img.onmouseover = function () {
            handleHover(img);
        };
    }

    // 画像のロード後にAPNGのアニメーション対応を検証する
    window.onload = function () {
        const apngImages = document.querySelectorAll("img[data-animated-src]");
        apngImages.forEach(img => {
            // 予めmouseoverイベントを設定
            img.onmouseover = function () {
                handleHover(img);
            };
        });
    }
})
