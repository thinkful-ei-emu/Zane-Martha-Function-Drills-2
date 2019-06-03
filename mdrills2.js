'use strict';

function jediName(firstName, lastName){
  let jfirst = lastName.slice(0,3);
  let jlast = firstName.slice(0,2);
  let jname = jfirst + jlast;
  return jname;
}

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

const jName = jediName('Martha', 'Plantz');
console.log(jName);