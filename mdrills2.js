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
  return answer;
}
const code = decode('craft block argon meter bells brown croon droop');

function dayInAMonth(month, leapYear){
  switch (month){
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    return `${month} has 31 days`;
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    return  `${month} has 30 days`;
  case 'Feburary':
    if (leapYear === true){
      return 'Feburary has 29 days';
    } else{
      return 'Feburary has 28 days';
    }
  }
}

const howMany = dayInAMonth('May');
console.log(howMany);

function rockPaperScissors(num){
  const comp = Math.floor(Math.random() * 3) + 1;
  if (num < 1 || num >3){
    throw Error;
  }else{
    switch(num){
    case 1:
      if (comp === 1){
        return 'Its a tie';
      }else if(comp === 2){
        return 'Computer wins';
      } else {
        return 'Player wins';
      }
    case 2:
      if (comp === 2){
        return 'Its a tie';
      }else if(comp === 3){
        return 'Computer wins';
      } else {
        return 'Player wins';
      }
    case 3:
      if (comp === 3){
        return 'Its a tie';
      }else if(comp === 1){
        return 'Computer wins';
      } else {
        return 'Player wins';
      }
    }
  }
}

const game1 = rockPaperScissors(1);
