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
    
    const playMatch =()=>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend',function(){
                this.style.animation ="";
            });
        });

        const computerOptions = ['rock','paper','scissors'];
        options.forEach(option=>{
            option.addEventListener('click',function(){
        
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(()=>{
                    
                compareHands(this.textContent,computerChoice);
                
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                },1000);

                playerHand.style.animation = "shakePlayer 1s ease";
                computerHand.style.animation = "shakeComputer 1s ease";
            });
        });
    };

    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = playerscore;
        computerScore.textContent = computerscore;
    }


    const compareHands = (playerChoice, computerChoice) =>{
        const winner = document.querySelector('.winner');
        if(playerChoice === computerChoice) {
            winner.textContent = 'Tie';
            return;
        }
        if (playerChoice === 'rock'){
            if(computerChoice==='scissors'){
                winner.textContent = 'Player win';
                playerscore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer win';
                computerscore++;
                updateScore();
                return;
            }
        }
        if (playerChoice === 'paper'){
            if(computerChoice==='rock'){
                winner.textContent = 'Player win';
                playerscore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer win';
                computerscore++;
                updateScore();
                return;
            }
        }
        if (playerChoice === 'scissors'){
            if(computerChoice==='paper'){
                winner.textContent = 'Player win';
                playerscore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer win';
                computerscore++;
                updateScore();
                return;
            }
        }


    }
    
    startgame();
    playMatch();
    
};

game();