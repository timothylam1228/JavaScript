const game = ()=>{
    let playerscore = 0 ;
    let computerscore = 0;
    
    const startgame = ()=>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click',()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add("fadeIn");
        });
    };

    startgame();
    
};

game();