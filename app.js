document.addEventListener("DOMContentLoaded", function() {
    var ham = document.getElementById("ham");
    var bg = document.getElementById("nav-bg");
    var content = document.getElementById("content");
    var navActive = false;
    
    ham.addEventListener("click", function() {
        navActive = !navActive;

        if(navActive === true) {
            ham.classList.add("ham-active");
            bg.classList.add("nav-active");
            content.style.display = "block";
            setTimeout(function(){
                content.classList.add("content-active");
            }, 100);
        } else if(navActive === false) {
            bg.classList.remove("nav-active");
            ham.classList.remove("ham-active");
            content.classList.remove("content-active");
            setTimeout(function(){
                content.style.display = "none";
            }, 2000);
        }
    });
});

