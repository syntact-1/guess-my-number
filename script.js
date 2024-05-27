'use strict';
// create a random number between 1 : 100
let randomNumber = Math.trunc(Math.random()*50)+1;
const number = document.querySelector(".number");
const message = document.querySelector(".message")
const body = document.body;
const againButton = document.querySelector(".again");
let score =20;
let heighScore = 0;
const htmlScore = document.querySelector(".htmlscore");
// check function and if chek box is empty and if it low and heigh
const checkButton = document.querySelector(".check");
checkButton.addEventListener('click',function(){
    const guess = Number(document.querySelector(".guess").value);
    // console.log(guess , typeof guess)
    if(!guess){
        message.textContent = " No Number"
    }
    else if(guess > randomNumber){
        if(score > 1){
        message.textContent = "To heigh"
        score--
        htmlScore.textContent = score

        }
        else{
            message.textContent = "you lost the game"
            htmlScore.textContent = 0

        }
    }
    else if(guess < randomNumber){
        if(score > 1){
            message.textContent = "To low"
            score--
            htmlScore.textContent = score
        }
        else{
            message.textContent = "you lost the game"
            htmlScore.textContent  = 0
        }
    }
    else if(guess === randomNumber){
        message.textContent = "Correct Number"
        document.querySelector("body").style.background = "#60b347"
        number.textContent = randomNumber;
        if(score > heighScore){
            heighScore = score;
            document.querySelector(".highscore").textContent = heighScore
        }
    }
    
})
againButton.addEventListener("click" , function(){
    score = 20;
    message.textContent = 'start guessing ....';
    document.querySelector(".guess").value = "";
    body.style.background = "#222";
    randomNumber = Math.trunc(Math.random()*50)+1;
    htmlScore.textContent = score
    number.textContent = "?"
})