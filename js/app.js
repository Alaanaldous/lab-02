'use strict';
var count = 0;
var userName = prompt('What\'s your name ^^');
alert('Welcome you ' + userName);

function question1() {
  var q1 = prompt('Is my major Accountancy?^.^').toLowerCase();
  if (q1 == 'yes' || q1 == 'y') {
    //console.log('Correct answer '+userName);
    alert('Correct answer ' + userName);
    count++;
  } else if (q1 == 'no' || q1 == 'n') {
    //console.log('Incorrect answer '+userName);
    alert('Incorrect answer ' + userName);
  } else {
    alert('Empty input ' + userName);
  }
}

function question2() {
  var q2 = prompt('Do you think i graduated in low avarage?').toLowerCase();
  if (q2 == 'no' || q2 == 'n') {
    //onsole.log('Ammazing,correct again '+userName);
    alert('Ammazing,correct again ' + userName);
    count++;
  } else if (q2 == 'yes' || q2 == 'y') {
    // console.log('Oops,incorrect '+ userName);
    alert('Oops,incorrect ' + userName);
  } else {
    alert('Empty input ' + userName);
  }
}

function question3() {
  var q3 = prompt('Do you think am hardworker?').toLowerCase();
  if (q3 == 'yes' || q3 == 'y') {
    //console.log('Correct answer ^^ '+userName);
    alert('Correct answer ^^ ' + userName);
    count++;
  } else if (q3 == 'no' || q3 == 'n') {
    //console.log('Oppsi,incorrect answer '+userName);
    alert('Oppsi,incorrect answer ' + userName);
  } else {
    alert('Embty input ' + userName);
  }
}

function question4() {
  var q4 = prompt('Do you think i will stop there?').toLowerCase();
  if (q4 == 'yes' || q4 == 'y') {
    //console.log('Thank you alot for you suppot^^ '+userName);
    alert('Thank you alot for your support ^^ ' + userName);
    count++;
  } else if (q4 == 'no' || q4 == 'n') {
    //console.log('Thank you, i will do my best ^^ '+userName);
    alert('Thank you, i will do my beast ^^ ' + userName);
  } else {
    alert('Embty input ' + userName);
  }
}

function question5() {
  var q5 = prompt('Do you think you are in the right place').toLowerCase();
  switch (true) {
  case (q5 == 'yes' || q5 == 'y'):
    //console.log('I appreciate^^ '+userName)
    alert('I appritciate ' + userName);
    count++;
    break;
  case (q5 == 'no' || q5 == 'n'):
    //console.log('I appreciate too ^^ '+userName)
    alert('I appreciate it too ^^ ' + userName);
    break;
  default: alert('Embty input ' + userName);
    break;
  }
}

function question6() {
  var myNumber = 4;
  var flag = false;
  for (var i = 0; i < 4; i++) {
    var userNumber = Number(prompt('Can you guess the correct number between 1-10, pay attention that you have four chances.'));
    if (myNumber == userNumber) {
      flag = true;
      //console.log('Correct answer '+userName);
      alert('Correct answer '+userName);
      count++;
      break;
    } else if (myNumber < userName) {
      alert('Too high '+userName);
    } else if (myn=Number > userName) {
      alert('Too low '+ userName);
    } else {
      alert('Embty input '+ userName);
    }
  }
  if (!flag) {
    alert('Opps '+ userName +'the correct answer is ' + myNumber);
  }
}

function question7() {
  var transPortation = ['car', 'plant', 'train', 'camel', 'bicycle'];
  var finish = false;
  var m = 0;
  while (m < 6) {
    var ridable = prompt('what can people use to travel?').toLowerCase();
    for (var k = 0; k < transPortation.length; k++) {
      if (ridable == transPortation[k]) {
        alert('correct answer '+userName);
        count++;
        finish = true;
        break;
      }
    }
    if (finish)
      break;
    alert(userName +'You have' + 5 - m + ' reamin');
    m++;
  }
}

question1();
question2();
question3();
question4();
question5();
question6();
question7();

alert(userName +' your score is ' + count + '/7');
