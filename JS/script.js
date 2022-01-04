$(function () {
$(".nav_toggle").on("click", function () {
    if ($(".nav_item").hasClass("active")) {
    $(".nav_item").removeClass("active");
    } else {
    $(".nav_item").addClass("active");
    }
});
});