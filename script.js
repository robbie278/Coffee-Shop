const swiper = new Swiper(".swiper",{
    autoplay:{
        delay:4000,
        disableonInteraction:false
    },
    effect:"fade",
    loop:true,

    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },

})

let menu = document.querySelector('.menu')
let nums = document.querySelectorAll('.num')
let start = false

window.addEventListener('scroll', ()=>{
    const navbar = document.querySelector('.navbar')

      navbar.classList.toggle('sticky' , window.scrollY > 0)

    if(window.scrollY >= menu.offsetTop){
        if(!start){
     nums.forEach( num =>{
        startCount(num)
     })
        }
        start = true
    }
})

const startCount = (el) =>{
    let max = el.dataset.val
    let count = setInterval( () =>{
        el.textContent++
        if(el.textContent === max){
            clearInterval(count)
        }
    },3000 / nums)
}
