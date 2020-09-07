'use strict';
var userName= prompt('Write your name please!');

var q1= prompt(userName + ' Are you intrested in our site?').toLowerCase();
if (q1==='yes'||q1==='y') {
  //console.log('Thank you ');
  alert('Thank you ');
}else if (q1==='no' || q1==='n'){
  //console.log('Oops!');
  alert('Oops!');
} else{
  alert('wrong input');
}

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

document.write('Welcome ' + userName + ' Have a nice day!');
