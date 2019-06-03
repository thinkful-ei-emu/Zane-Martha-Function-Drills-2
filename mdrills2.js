'use strict';

function jediName(firstName, lastName){
  let jfirst = lastName.slice(0,3);
  let jlast = firstName.slice(0,2);
  let jname = jfirst + jlast;
  return jname;
}
const jName = jediName('Martha', 'Plantz');
console.log(jName);

function beyond(num){
  if (isFinite(num) === false && typeof(num)==='number'){
    console.log('And beyond');
  } if (num > 0 && isFinite(num) === true){
    console.log('To infinity');
  } if (num < 0 && isFinite(num) === true){
    console.log('To negative infinity');
  } if (num === 0){
    console.log('Staying home');
  }
}

function decode (word){
  let answer = [];
  let allWords = word.split(' ');
  allWords.forEach(word => { 
    let firstLetter = word[0];
    switch (firstLetter) {
    case 'a':
    //return second letter
      answer.push(word[1]);
      break;
    case 'b':
      //return 3rd letter
      answer.push(word[2]);
      break;
    case 'c':
    //return 4th letter
      answer.push(word[3]);
      break;
    case 'd':
      //return 5th letter
      answer.push(word[4]);
      break;
    default:
      answer.push(' ');
    }
  });
}
const code = decode('craft block argon meter bells brown croon droop');
console.log(code);