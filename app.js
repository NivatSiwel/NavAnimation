document.addEventListener("DOMContentLoaded", function() {
    var ham = document.getElementById("ham");
    var bg = document.getElementById("nav-bg");
    var navActive = false;
    
    ham.addEventListener("click", function() {
        navActive = !navActive;

        if(navActive === true) {
            ham.classList.add("ham-active");
            // timmer delay for bg animation
            setTimeout(function(){
                bg.classList.add("nav-active");
            }, 500);
        } else if(navActive === false) {
            bg.classList.remove("nav-active");
            // timmer delay for bg animation
            setTimeout(function(){
                ham.classList.remove("ham-active");
            }, 300);
        }
    });
});