AOS.init({startEvent: 'load'});
window.addEventListener('load', AOS.refresh);

var swiperConv = new Swiper(".conv-swiper", {
    slidesPerView: 1,        
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    speed: 800,
});


var swiperMap = new Swiper(".map-swiper", {
    slidesPerView: 1,        
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    speed: 800,
});

var swiperSpace = new Swiper(".space-swiper", {
    slidesPerView: 1,        
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    speed: 800,
});

var swiperCook = new Swiper(".cook-swiper", {
    slidesPerView: 1,        
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    speed: 800,
});

var swiperHost = new Swiper(".host-swiper", {
    slidesPerView: 1,        
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    speed: 800,
});

var swiperRoom = new Swiper(".room-swiper", {
    slidesPerView: 1,        
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    speed: 800,
});

function sendEmail(){
    Email.send({
        SecureToken: "8207c7d7-4a6c-4797-870d-d16ee71023ce",
        To : "a0932168202@gmail.com, zhulixdesign@gmail.com, zhuli705098@gmail.com",
        From : "walayydesign@gmail.com",
        // From : "藍海VILLA",
        Subject : "藍海VILLA預約賞屋",
        Body : "姓名:" + document.getElementById("name").value
                + "<br>手機:" + document.getElementById("phone").value
                + "<br>信箱:" + document.getElementById("email").value
                + "<br>留言:" + document.getElementById("content").value
    }).then(
        message => alert("感謝您的來信！我們很快就會和您聯繫！"),
    );
}

$(".btn-top").click(function(){
    $("html, body").animate({scrollTop: 0},300);
})