audioStart = new Audio('./audios/tema_mario.mp3');
audioGameOver = new Audio('./audios/gameover.mp3');
textStart = document.querySelector('text-start');

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
       mario.classList.remove('jump');
    }, 500);
}


const loop = setInterval(() => {

    console.log('loop')

    const pipePosition =  pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    console.log(marioPosition);

audioStart.play(); 

    
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px' 


        function stopAudioStart(){
            audioStart.pause();
            }stopAudioStart();

audioGameOver.play();

        function stopAudio(){
            audioGameOver.pause();
            }setTimeout(stopAudio, 8000);


        clearInterval(loop);

    }

}, 10);


document.addEventListener('keydown', jump);


