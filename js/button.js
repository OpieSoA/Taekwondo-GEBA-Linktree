$(".label").mousedown(function(e) {
    $(this).addClass("active");
}).click(function(e) { // Fixed typo: changed 'mouseclick' to 'click'
    $(this).removeClass("active");
}).mouseout(function() {
    $(this).removeClass("active");
});