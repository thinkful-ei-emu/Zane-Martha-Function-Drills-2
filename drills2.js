"use strict"
function jediName(firstName,lastName){
   const first=firstName.slice(0,2);
   const last=lastName.slice(0,3);

   return `${last}${first}`
}
const newName= jediName('Zane','Kuehn');
console.log(newName);

function beyond(num){
    if(num==NaN){
        console.log('Please enter a number')
    }
    else if(isFinite(num)===false){
        console.log('And beyond')
    }
    else if( isFinite(num) && num>0){
        console.log('To infinity')
    }
    else if(isFinite(num)&& num<0){
        console.log('To negative Infinity')
    }
    else if(num === 0){
        console.log('Staying home.')

    }

}





