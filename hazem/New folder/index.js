var images = [
    "./images/1-1.png",
    "./images/2 -1.png",
    "./images/3-1.png",
    "./images/4-1.png",
    "./images/5-1.png"
];
setInterval(function () {

    var firstImage = $("#image-container img:first").attr('src');
    $("#image-container img:first").remove();
    var index = images.indexOf(firstImage);
    var nextIndex = (index + 1) % images.length;
    $("#image-container").append('<img src="' + images[nextIndex] + '" class="d-block">');
}, 3000);
