const bannerImages = [

    "images/Banner1.jpg",
    "images/Banner2.jpg",
    "images/Banner3.jpg"
];

/*Index set to 0*/
let currentIndex = 0;

/*Gets images from image folder for index html*/
const Images = document.getElementById("home-image");

/*Will display images one by one for few seconds each*/
setInterval(() => 
{
    currentIndex = (currentIndex + 1) % bannerImages.length;
    Images.src = bannerImages[currentIndex];

}, 3000);