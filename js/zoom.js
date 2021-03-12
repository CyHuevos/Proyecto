function actualizarTama() {

    $("body").css("zoom", window.innerWidth / 500);
    $("body").css("zoom", window.innerHeigth / 400);
}
$(document).ready(function() {
    $(window).on("resize", actualizarTama);
    actualizarTama();
});