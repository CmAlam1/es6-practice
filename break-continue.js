const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let i = 0; i <num.length; i++){
    if(num[i]>3){
        break;
    }
    // console.log(num[i]);
}

// break hocce jokhon kono condition ke akta limit er por off kore deoa lage tokhon use hoy


// skip
const num = [1, -2, 3, -4, -5, 6, -7, 8, -9];
for(let i = 0; i <num.length; i++){
    if(num[i]<0){
       continue;
    }
    console.log(num[i]);
}

// skip hocche jokhon kono array te kono type element bad diye condition continue kore jaoa lage tokhon skip use kore
// skip use er jonno (continue use kora hoy)