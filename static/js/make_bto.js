const swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination"
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

function moveToSlide(slideIndex) {
    // Swiperのスライドを指定されたスライドに移動
    swiper.slideTo(slideIndex);
}

/* /////////メンテナンス用のコンソールスクリプト///////// */
/* /////////☆おさわり厳禁☆///////// */
document.addEventListener("DOMContentLoaded", function () {
    Motherboard_images = document.getElementsByClassName("Motherboard-images");
    console.log("マザボの要素数：" + Motherboard_images.length)

    Cpu_images = document.getElementsByClassName("cpu-images")
    console.log("CPUの要素数：" + Cpu_images.length)

    Gpu_Images = document.getElementsByClassName("gpu-images")
    console.log("GPUの要素数：" + Gpu_Images.length)

    Ram_Images = document.getElementsByClassName("ram-images")
    console.log("Ramの要素数：" + Ram_Images.length)

    Rom_Images = document.getElementsByClassName("rom-images")
    console.log("Romの要素数：" + Rom_Images.length)

    Power_Source_Images = document.getElementsByClassName("power_source_images")
    console.log("PowerSourceの要素数" + Power_Source_Images.length)

    // modal_botan2 = document.getElementsByClassName("modal_btn2")
    // console.log(modal_botan2)
})

/* /////////メンテナンス用のコンソールスクリプト///////// */
Motherboard_images = document.getElementsByClassName("Motherboard-images")
Cpu_images = document.getElementsByClassName("cpu-images")
Gpu_Images = document.getElementsByClassName("gpu-images")
Ram_Images = document.getElementsByClassName("ram-images")
Rom_Images = document.getElementsByClassName("rom-images")
Power_Source_Images = document.getElementsByClassName("power_source_images")
Case_Images = document.getElementsByClassName("case-images")

// modal_botan2 = document.getElementsByClassName("modal_btn2")


//displayを非表示にするやつ
//変更を加えました
function display_close() {
    a = document.getElementsByClassName("modal")
    for (i = 0; i <= a.length; i++) {
        a[i].style.display = 'none';
    }
    // b = document.getElementsByClassName("modal")
}

function remove_video() {
    a = document.getElementById("movie")
    if (a) {
        a.remove();
        console.log("jflkajd;:lksajd;lsakd:]ksa]:dska");
    }
}

/* /////////起動時のマザボ用のスクリプト///////// */
document.addEventListener("DOMContentLoaded", Motherboard_movie_start0())

/* document.addEventListener("load",Motherboard_movie_start()) */

/* /////////マザボ用の(初期読み込み時)スクリプト///////// */
function Motherboard_movie_start0() {
    remove_video()
    movie_box = document.getElementById("movie_box")
    movie_box.width = "100% !important"

    var movie = document.createElement('video');
    movie.id = 'movie';
    movie.className = "movie"
    movie.setAttribute('autoplay', true);
    movie.setAttribute('muted', true);
    movie.src = "../../static/test/Mother-Board.mp4"
    movie.controls = false;
    movie_box.appendChild(movie);
}

/* /////////マザボ用のスクリプト///////// */
function Motherboard_movie_start() {
    remove_video()
    movie_box = document.getElementById("movie_box")
    movie_box.width = "100% !important"

    var movie = document.createElement('video');
    movie.id = 'movie';
    movie.className = "movie"
    movie.setAttribute('autoplay', true);
    movie.setAttribute('muted', true);
    movie.src = "../../static/test/Mother-Board.mp4"
    movie.controls = false;
    movie_box.appendChild(movie);
    setInterval(1500)
    // moveToSlide(1)
}

/* /////////マザボ+CPU用のスクリプト///////// */
function CPU_movie_start() {
    remove_video()
    movie_box = document.getElementById("movie_box")
    movie_box.width = "100% !important"

    var movie = document.createElement('video');
    movie.id = 'movie';
    movie.className = "movie"
    movie.setAttribute('autoplay', true);
    movie.setAttribute('muted', true);
    movie.src = "../../static/test/Mother-Board+CPU.mp4"
    movie.controls = false;
    movie_box.appendChild(movie);
    // moveToSlide(2)
}

/* //////////マザボ+CPU+GPU用のスクリプト///////// */
function GPU_movie_start() {
    remove_video()
    movie_box = document.getElementById("movie_box")
    movie_box.width = "100% !important"

    var movie = document.createElement('video');
    movie.id = 'movie';
    movie.className = "movie2"
    movie.setAttribute('autoplay', true);
    movie.setAttribute('muted', true);

    movie.src = "../../static/test/Mother-Board+CPU+GPU.mp4"
    movie.controls = false;
    movie_box.appendChild(movie);
    // moveToSlide(3)
}

/* //////////マザボ+CPU+GPU+SRAM用のスクリプト///////// */
function RAM_movie_start() {
    remove_video()
    movie_box = document.getElementById("movie_box")
    movie_box.width = "100% !important"

    var movie = document.createElement('video');
    movie.id = 'movie';
    movie.className = "movie2"
    movie.setAttribute('autoplay', true);
    movie.setAttribute('muted', true);

    movie.src = "../../static/test/Mother-Board+CPU+GPU+SRAM.mp4"
    movie.controls = false;
    movie_box.appendChild(movie);
    // moveToSlide(4)
}

/* //////////マザボ+CPU+GPU+SRAM+ROM用のスクリプト///////// */
function ROM_movie_start() {
    remove_video()
    movie_box = document.getElementById("movie_box")
    movie_box.width = "100% !important"

    var movie = document.createElement('video');
    movie.id = 'movie';
    movie.className = "movie"
    movie.setAttribute('autoplay', true);
    movie.setAttribute('muted', true);

    movie.src = "../../static/test/Mother-Board+CPU+GPU+SRAM+ROM.mp4"
    movie.controls = false;
    movie_box.appendChild(movie);
    // moveToSlide(5)
}

/* //////////マザボ+CPU+GPU+SRAM+ROM+Power用のスクリプト///////// */
function Power_movie_start() {
    remove_video()
    movie_box = document.getElementById("movie_box")
    movie_box.width = "100% !important"

    var movie = document.createElement('video');
    movie.id = 'movie';
    movie.className = "movie"
    movie.setAttribute('autoplay', true);
    movie.setAttribute('muted', true);

    movie.src = "../../static/test/Mother-Board+CPU+GPU+ROM+Power.mp4"
    movie.controls = false;
    movie_box.appendChild(movie);
    // moveToSlide(6)
}

/* //////////マザボ+CPU+GPU+SRAM+ROM+Power+Case用のスクリプト///////// */
function Case_movie_start() {
    remove_video()
    movie_box = document.getElementById("movie_box")
    movie_box.width = "100% !important"

    var movie = document.createElement('video');
    movie.id = 'movie';
    movie.className = "movie"
    movie.setAttribute('autoplay', true);
    movie.setAttribute('muted', true);

    movie.src = "../../static/test/Mother-Board+CPU+GPU+ROM+PC-Case.mp4"
    movie.controls = false;
    movie_box.appendChild(movie);
};

function join_data(data) {
  var image = document.getElementById(data + "_image");
  var img = document.getElementById(data + "_img");
  var ms = document.getElementById(data + "_display");
  image.style.display = 'block';
  img.style.display = 'block';
  ms.style.display = 'block';
};
Motherboard_Price = 0;
CPU_Price = 0;
GPU_Price = 0;
RAM_Price = 0;
ROM_Price = 0;
Power_Price = 0;
Case_Price = 0;

function join_cart() {
  if (typeof Motherboard_datas == 'undefined' || typeof CPU_datas == 'undefined' || typeof GPU_datas == 'undefined' || typeof RAM_datas == 'undefined' || typeof ROM_datas == 'undefined' || typeof Power_datas == 'undefined' || typeof Case_datas == 'undefined') {
    console.log("err");
  }
  else {
    cart_bt.style.display = 'block';
  }
}

function as() {
  All_Price = Motherboard_Price + CPU_Price + GPU_Price + RAM_Price + ROM_Price + Power_Price + Case_Price
  Price = document.getElementById("price");
  Price.innerHTML = All_Price;
}

function Motherboard_data(data) {
  Motherboard_Price = 0;
  Motherboard_Price_data = document.getElementById(data.id + "_price")
  Motherboard_Price = Number(Motherboard_Price_data.textContent)
  as()
  items_motherboard = document.getElementsByClassName("items_motherboard")
  for (var i = 0;  i < items_motherboard.length;  i++) {
    items_motherboard[i].style.display = 'none';
  };
  join_data(data.id)
  join_cart()
Money1()
};

function CPU_data(data) {
  CPU_Price = 0;
  CPU_Price_data = document.getElementById(data.id + "_price")
  CPU_Price = Number(CPU_Price_data.textContent)
  as()
  items_CPU = document.getElementsByClassName("items_CPU")
  for (var i = 0;  i < items_CPU.length;  i++) {
    items_CPU[i].style.display = 'none';
  };
  join_data(data.id)
  join_cart()
  Money1()

};
function GPU_data(data) {
  GPU_Price = 0;
  GPU_Price_data = document.getElementById(data.id + "_price")
  GPU_Price = Number(GPU_Price_data.textContent)
  as()
  items_GPU = document.getElementsByClassName("items_GPU")
  for (var i = 0;  i < items_GPU.length;  i++) {
    items_GPU[i].style.display = 'none';
  };

  join_data(data.id)
  join_cart()
  Money1()

};
function RAM_data(data) {
  RAM_Price = 0;
  RAM_Price_data = document.getElementById(data.id + "_price")
  RAM_Price = Number(RAM_Price_data.textContent)
  as()
  items_RAM = document.getElementsByClassName("items_RAM")
  for (var i = 0;  i < items_RAM.length;  i++) {
    items_RAM[i].style.display = 'none';
  };

  join_data(data.id)
  join_cart()
  Money1()

};
function ROM_data(data) {
  ROM_Price = 0;
  ROM_Price_data = document.getElementById(data.id + "_price")
  ROM_Price = Number(ROM_Price_data.textContent)
  as()
  items_ROM = document.getElementsByClassName("items_ROM")
  for (var i = 0;  i < items_ROM.length;  i++) {
    items_ROM[i].style.display = 'none';
  };

  join_data(data.id)
  join_cart()
  Money1()

};
function Power_data(data) {
  Proer_Price = 0;
  Power_Price_data = document.getElementById(data.id + "_price")
  Power_Price = Number(Power_Price_data.textContent)
  as()
  items_Power = document.getElementsByClassName("items_Power")
  for (var i = 0;  i < items_Power.length;  i++) {
    items_Power[i].style.display = 'none';
  };

  join_data(data.id)
  join_cart()
  Money1()

};
function Case_data(data) {
  Case_Price = 0;
  Case_Price_data = document.getElementById(data.id + "_price")
  Case_Price = Number(Case_Price_data.textContent)
  as()
  items_Case = document.getElementsByClassName("items_Case")
  for (var i = 0;  i < items_Case.length;  i++) {
    items_Case[i].style.display = 'none';
  };

  join_data(data.id)
  join_cart()
  Money1()

};
/* /////////////////各画像をクリックしたときの処理////////////////////////// */

 for (i = 0; i < Motherboard_images.length ; i++)  {
    Motherboard_images[i].addEventListener("click", function () {
      document.getElementById("Motherboard_back").style.display = 'none';
      Motherboard_datas = this
      Motherboard_data(this);
        Motherboard_movie_start();
        display_close();
    })
}

for (i = 0; i < Cpu_images.length; i++) {
    Cpu_images[i].addEventListener("click", function () {
      document.getElementById("CPU_back").style.display = 'none';
      CPU_datas = this
      CPU_data(this);
        CPU_movie_start()
        display_close()
    })
}

for (i = 0; i < Gpu_Images.length; i++) {
    Gpu_Images[i].addEventListener("click", function () {
      document.getElementById("GPU_back").style.display = 'none';
      GPU_datas = this
      GPU_data(this);
        GPU_movie_start()
        display_close()
    })
}

for (i = 0; i < Ram_Images.length; i++) {
    Ram_Images[i].addEventListener("click", function () {
      document.getElementById("RAM_back").style.display = 'none';
      RAM_datas = this
      RAM_data(this);
        RAM_movie_start()
        display_close()
    })
}

for (i = 0; i < Rom_Images.length; i++) {
    Rom_Images[i].addEventListener("click", function () {
      document.getElementById("ROM_back").style.display = 'none';
      ROM_datas = this
      ROM_data(this);
        ROM_movie_start()
        display_close()
    })
}

for (i = 0; i < Power_Source_Images.length ; i++) {
    Power_Source_Images[i].addEventListener("click", function () {
      document.getElementById("power_back").style.display = 'none';
      Power_datas = this
      Power_data(this);
        Power_movie_start()
        display_close()
    })
}

for (i = 0; i < Case_Images.length; i++) {
    Case_Images[i].addEventListener("click", function () {
      document.getElementById("Case_back").style.display="none";
      Case_datas = this
      Case_data(this);
        Case_movie_start()
        display_close()
    })
}



items = document.getElementsByClassName("items");
for (var i = 0;  i < items.length;  i++) {
  items[i].style.display = 'none';
}
cart_bt = document.getElementById("cart_bt");
cart_bt.style.display = 'none';


function Push_Cart() {
  bay_cart = document.getElementById("cart_data");
  bay_cart.value = Motherboard_datas.id + "/" + CPU_datas.id + "/" + GPU_datas.id + "/" + RAM_datas.id + "/" + ROM_datas.id + "/" + Power_datas.id + "/" + Case_datas.id;
}
/* /////////////////////////////////////////// */
