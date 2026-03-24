const btn1El=document.querySelector(".btn1");
const btn2El=document.querySelector(".btn2");
const titleEl=document.querySelector(".title");
const resetbtn =document.querySelector(".reset");
const bodyEl = document.querySelector("body");
//Add Event listeners
btn1El.addEventListener("click",function(){
    bodyEl.style.backgroundColor="yellow";
})

btn2El.addEventListener("click",()=>{
    titleEl.style.fontSize="90px";
})
resetbtn.addEventListener("click",function(){
    bodyEl.style.backgroundColor="white";
    titleEl.style.fontSize="50px";
})
