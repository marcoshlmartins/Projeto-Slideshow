let totalSlides = document.querySelectorAll('.slider--item').length

let currentSlide = 0;


document.querySelector('.slider--width').style.width =`calc(100vw * ${totalSlides})`

document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`

function voltar(){
currentSlide--

    if(currentSlide < 0){
        currentSlide = totalSlides - 1
    }

    updateMargin();

}
function avancar(){

currentSlide++

if (currentSlide > (totalSlides-1)){
    currentSlide = 0
}
updateMargin();
}

function updateMargin(){

    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;

    let newMargin = (currentSlide * sliderItemWidth)

    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`

}



document.querySelector('body').addEventListener('keyup',avancarTecla)


function avancarTecla(e){

    if (e.key === 'ArrowRight'){
        avancar();
    } else if (e.key ==='ArrowLeft'){
        voltar();
    }



}