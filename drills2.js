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

function decode(word){
    let firstLetter=word[0];
switch(firstLetter){
    case 'a':
        console.log(word[1]);
        return  word[1];
        
    case 'b':
        console.log(word[2]);
        return word[2];
        

    case 'c':
        console.log(word[3]);
        return word[3];
        
    case 'd':
        console.log(word[4]);
        return word[4];
        
    default:
        return ' '
        


}
}
let text;
function howManyDaysInAMonth(month,leapYear){
if(leapYear==true&&month=='February'){
    return "February has 29 days."
}
switch(month){
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'February':
    case 'October':
    case 'December':
        text=`${month} has 31 days`
        break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        text= `${month} has 30 days`
    
    
   case 'February':
       text=`${month} has 28 days`
    
    default:
     text=`Must provide a valid month.`

}


return text;
}

function rockPaperScissors()








