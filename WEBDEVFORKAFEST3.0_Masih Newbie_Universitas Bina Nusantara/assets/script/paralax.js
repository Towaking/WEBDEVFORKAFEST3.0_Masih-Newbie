

window.addEventListener('scroll',()=>{
    let scroll = document.querySelectorAll('.section')

    for (let index = 0; index < scroll.length; index++) {
        var w_height = window.innerHeight
        var top = scroll[index].getBoundingClientRect().top
        var show = 150;

        if (top < w_height - show){
            scroll[index].classList.add('animate');
        }else{
            scroll[index].classList.remove('animate');
        }
        
    }

})