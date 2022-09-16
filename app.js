const button1 = document.querySelector('#p1button');
const button2 = document.querySelector('#p2button');
const button3 = document.querySelector('#reset');
const p1 = document.querySelector('#player1');
const p2 = document.querySelector('#player2');
const select=document.querySelector('#playto');



let p1Score=0;
let p2Score=0;
let winningScore=5;
let gameIsOver=false;

button1.addEventListener("click", function(){
    if (!gameIsOver){
    p1Score+=1;
        if(p1Score===winningScore){
            gameIsOver=true;
            p1.classList.add('winner');
            p2.classList.add('loser');
        }    
        p1.textContent = p1Score;
    }
 
})
button2.addEventListener("click", function(){
    if (!gameIsOver){
        p2Score+=1;
        
            if(p2Score===winningScore){
                gameIsOver=true;
                p2.classList.add('winner');
                p1.classList.add('loser');
            }    
            p2.textContent = p2Score;
        }
    })

button3.addEventListener("click", reset)

select.addEventListener("change",function(){
    winningScore=parseInt(this.value);
    reset();
})

function reset(){
    gameIsOver=false;
    p1Score=0;
    p2Score=0;
    p1.textContent=p1Score;
    p2.textContent=p2Score;
    p1.classList.remove('winner','loser');
    p2.classList.remove('winner','loser');

}

