$(function () {
  $(".btn").on("click", function () {
    $(this).closest("div").css("display", "none");
    $(".tes").css("display", "none");
    console.log($(this).closest("div"))
    id = $(this).attr("href");
    $(id).addClass("fit").show("slow");

    for (var i = 1; i <= 4; i++) {
      var dot_id = "dot" + i;
      var element = document.getElementById(dot_id);
      var numericValue = +element.textContent.replace(/[^\d.-]/g, '') || 0;
      element.innerText = numericValue.toLocaleString()+"円";
  }
    // console.log(document.getElementsByClassName("dot")[0].textContent)//20万
    // console.log(document.getElementsByClassName("dot")[1].textContent)//17万
    // console.log(document.getElementsByClassName("dot")[2].textContent)//13万
    // console.log(document.getElementsByClassName("dot")[3].textContent)//10万
  });

  $(".btn2").on("click", function () {
    $(".tes").css("display", "none");
    console.log($(this).closest("div"))
    id = $(this).attr("href");
    $(id).addClass("fit").show("slow");
  });
});
