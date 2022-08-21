let mario = document.querySelector('.mario');
let pipe = document.querySelector('.pipe');

console.log(mario);
let jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');
    
    },500);
}

let loop = setInterval(()=>{

let pipePosition = pipe.offsetLeft;
let marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

console.log(marioPosition);

if (pipePosition <= 90 && pipePosition > 0 && marioPosition < 50 ){
   
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom= `${marioPosition}px`;

    mario.src = "img/luffyderrota.png"
    mario.style.width = '100px'
    mario.style.height = '100px'
    mario.style.marginLeft = '30px'

    clearInterval(loop);

}

}, 10)

document.addEventListener('keydown', jump);
