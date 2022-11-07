let str = document.querySelector(".str");
str.addEventListener("click",function cut() {
    document.getElementById("start").style.display = "none";
    document.getElementById("loding").style.display = "block";
    setTimeout(cut,5000)
})

