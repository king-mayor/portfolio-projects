const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", function () {
    if(window.pageYOffset > 100){
        toTop.style.display = "block";
    }else{
        toTop.style.display = "none";
    }
})