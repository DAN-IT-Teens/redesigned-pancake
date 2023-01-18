const b=document.querySelector('.header__menu-button')
const q=document.querySelector('.header__menu')
b.addEventListener('click',()=>{
    q.classList.toggle("hiden")
})
if(window.innerWidth >= 700){
    q.classList.remove('hiden')
}