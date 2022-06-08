
var countDownDate = new Date("June 12 109922 18:00:00 GMT+0000").getTime();

        var x = setInterval(function () {

            var now = new Date().getTime();

            var distance = countDownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 document.getElementById("countdown").innerHTML = days + "d : " + hours + "h : " + minutes + "m : " +seconds + "s";

                
                
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = '<a href="" id="downloadbtn">Download!</a>';
            }
        
     }, 1000);


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}



function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
