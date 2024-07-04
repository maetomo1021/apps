window.addEventListener('DOMContentLoaded', (event) => {
    const basePath = '../../static/Image/Mfactory/';
    const leftImages = [basePath + '1.png', basePath + '2.png', basePath + '3.png'];
    const rightImages = [basePath + '4.png', basePath + '5.png', basePath + '6.png']; // rightの画像のパスの配列

    let leftIndex = 0;
    let rightIndex = 0;

    const leftElement = document.querySelector('.left');
    const rightElement = document.querySelector('.right');

    function changeleftImage() {
        leftElement.style.backgroundImage = `url(${leftImages[leftIndex]})`;
        leftIndex = (leftIndex + 1) % leftImages.length;
    }

    function changerightImage() {
        rightElement.style.backgroundImage = `url(${rightImages[rightIndex]})`;
        rightIndex = (rightIndex + 1) % rightImages.length;
    }

    setInterval(changeleftImage, 6000); // 3秒ごとにleftの画像を切り替える
    setInterval(changerightImage, 6000); // 3秒ごとにrightの画像を切り替える


    const left = document.querySelector(".left");
    const right = document.querySelector(".right");

    left.addEventListener('mouseover', function () {
        right.classList.add("hoverAnime");
    });

    left.addEventListener('mouseout', function () {
        right.classList.remove("hoverAnime");
    });

    right.addEventListener('mouseover', function () {
        left.classList.add("hoverAnime");
    });

    right.addEventListener('mouseout', function () {
        left.classList.remove("hoverAnime");
    });

    document.addEventListener("DOMContentLoaded", function () {
        const follower2 = document.querySelector('.follower2');
        const leftColumn = document.querySelector('.left');

        leftColumn.addEventListener('mouseenter', function () {
            const wrapperWidth = document.querySelector('.wrapper').offsetWidth;
            follower2.style.left = `${wrapperWidth}px`;
        });

        leftColumn.addEventListener('mouseleave', function () {
            // マウスが外れたときに、follower2を初期位置に戻す
            follower2.style.left = '10%'; // 初期位置に合わせて調整してください
        });
    });

});
