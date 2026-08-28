let word = document.querySelector(".paragraph");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
btn1.addEventListener("click",function(){
    word.textContent="Hello";
})
btn2.addEventListener("click",function(){
    word.style.color="Red";
})