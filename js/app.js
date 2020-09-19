'use strict';
var userName= prompt('Write your name please!');
function questionOne (){
  var q1= prompt(userName + ' Are you intrested in our site?').toLowerCase();
  if (q1==='yes'||q1==='y') {
  //console.log('Thank you ');
    alert('Thank you ');
  } if (q1==='no' || q1==='n'){
  //console.log('Oops!');
    alert('Oops!');
  } else{
    alert('wrong input');
  }
}
questionOne();
function questionTow(){
  var q2= prompt(' Did you read my short biography?').toLowerCase();
  if (q2==='yes'||q2==='y') {
  //console.log('Great ');
    alert('Great ');
  }else if (q2==='no' || q2==='n'){
  //console.log('Oops!');
    alert('Oops!');
  } else{
    alert('wrong input');
  }
}
questionTow();
function questionThree(){
  var q3=prompt(' Did I study in Jordan?').toLowerCase();
  if (q3==='no' || q3==='n') {
  //console.log('omg!');
    alert('omg!');
  }else if(q3==='yes' || q3==='y'){
  //console.log('Very good');
    alert('Very good');
  }else{
    alert('wrong input');
  }
}
questionThree();
function questionFour(){
  var q4= prompt(' Is 29 my age?').toLowerCase();
  if (q4==='yes' || q4==='y'){
  //console.log('Good job');
    alert('Good job');
  }else if (q4==='no' || q4==='n'){
  //console.log('I hope!');
    alert('I hope!');
  }else {
    alert('wrong input');
  }
}
questionFour();
// the 5th question
function questionFive(){
  var q5= prompt(' Are interested to know more about my and my website?').toLowerCase();
  if (q5==='yes' || q5==='y'){
  //console.log('Thank you for your interesting, to know more come and visit me on youtube');
    alert('Thank you for your interesting, to know more come and visit me on youtube');
  }else if(q5==='no' || q5==='n'){
  //console.log('Have a nice day!');
    alert('Have a nice day!');
  }else {
    alert('wrong input');
  }
}
questionFive();

document.write('Welcome ' + userName + ' Have a nice day!');


//the 6th question

var correctAnswer= 23;
var tries= 4;
function questionSix(){
  while (tries> 0){
    var q6 = prompt('Can you guess what is my lucky number?it is between 15 and 30 :');
    if (q6 === correctAnswer){
      alert('Congratulations! you win the game!');
      break;
    }else if (q6 < correctAnswer){
      alert('Oops! your guess is too low!');
    }else if (q6 > correctAnswer){
      alert('Oops! your guess is too high!');
    }else{
      alert('wrog inserting!');
    }
    tries = tries -1;
  }


  if (tries===0){
    alert('you lost your chance! the number is ' + correctAnswer + ' , thank you for playing.');
  }
}
questionSix();

// the 7th question:

var correctAnswers =[6, 8];
var nTries =6;
function questionSeven(){
  while (nTries >0){
    var q7 = prompt('Can you geuss how many hours it took for this assignment?it is between 1 and 20.');
    q7 = Number(q7);
    for (var i=0; i <= 6; i++){
      if(correctAnswer[i] === q7)

      {
        nTries=i;
        alert('Congratulations! you win the game!');
        break;
      }else if(q7 < correctAnswers){
        alert('Oops! your guess is too low!');
      }else if (q7 > correctAnswers){
        alert('Oops! your guess is too high!');
      }else{
        alert('wrog inserting!');
      }
      nTries = nTries -1;
    }

    if (nTries===0){
      alert(`you lost your chance! the numbers are ${correctAnswers} , thank you for playing.`);
    }
  }
}

questionSeven();
