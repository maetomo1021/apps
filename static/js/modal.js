// モーダルを表示する関数
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
}

// モーダルを非表示にする関数
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}

// Motherboard選択ボタンがクリックされたときにモーダルを表示
document.getElementsByClassName("item_motherboard_button")[0].onclick = function (event) {
  event.preventDefault(); // リンクのデフォルト動作をキャンセル
  openModal("motherboard-Modal");
};

// CPU選択ボタンがクリックされたときにモーダルを表示
document.getElementsByClassName("item_cpu_button")[0].onclick = function (event) {
  event.preventDefault(); // リンクのデフォルト動作をキャンセル
  openModal("CPU-Modal");
};
document.getElementsByClassName("item_gpu_button")[0].onclick = function (event) {
  event.preventDefault(); // リンクのデフォルト動作をキャンセル
  openModal("GPU-Modal");
};
document.getElementsByClassName("item_ram_button")[0].onclick = function (event) {
  event.preventDefault(); // リンクのデフォルト動作をキャンセル
  openModal("RAM-Modal");
};
document.getElementsByClassName("item_rom_button")[0].onclick = function (event) {
  event.preventDefault(); // リンクのデフォルト動作をキャンセル
  openModal("ROM-Modal");
};
document.getElementsByClassName("item_atx_button")[0].onclick = function (event) {
  event.preventDefault(); // リンクのデフォルト動作をキャンセル
  openModal("ATX-Modal");
};
document.getElementsByClassName("item_case_button")[0].onclick = function (event) {
  event.preventDefault(); // リンクのデフォルト動作をキャンセル
  openModal("CASE-Modal");
};

// すべてのモーダルの×ボタンがクリックされたときにモーダルを閉じる
var closeButtons = document.querySelectorAll(".modal .close");
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].onclick = function () {
    var modalId = this.closest(".modal").id;
    closeModal(modalId);
  };
}

// モーダル以外の場所がクリックされたときにモーダルを閉じる
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    var modalId = event.target.id;
    closeModal(modalId);
  }
};
