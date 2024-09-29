
const burger = document.querySelector('.hamburger')
const menu = document.querySelector('.bar-extra')

count = 0
burger.addEventListener('click',()=>{
    if(count === 0){
        menu.classList.add('menu')
        count = 1
    }
    else{
        menu.classList.remove('menu')
        count = 0
    }
})