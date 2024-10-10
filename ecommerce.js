const close=document.querySelector(".close"); 
const open=document.querySelector(".ham"); 
const menu=document.querySelector(".menu") 
close.addEventListener("click",()=>{ menu.style.visibility="hidden"; })
open.addEventListener("click",()=>{ menu.style.visibility="visible"; })


/*===========================sraech bar===================================*/
const searchBarContainerEl = document.querySelector(".search-bar-container");

const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("click", () => {
  searchBarContainerEl.classList.toggle("active");
});