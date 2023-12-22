'use strict';
alert("welcome to the 90s");
alert("Throw on a flannel shirt, part your hair down the middle and let's dive in!")
//const bandName =prompt("What is your favorite band from the 90s?");

function getName(){
    const bandName = prompt("What is your favorite band from the 90s?");
    return bandName;
}

let theirBand = getName();

console.log('theirBand');

function greetUser(){
    document.write("Hi! " + theirBand + " is one of our favorites too!");
}


let response = prompt('Question: Are the best movies from the 90s?');
    
while (response.toLowerCase() != 'yes'){
    response = prompt('wrong! Try again!');
}


function rateMyPage(){
    let rating = prompt("How many stars would you rate my page? 1-5");

    for (let i = 0; i < rating; i++){
        document.write("<img class='loop-img' src='star.png' alt='5 pointed yellow star in the style of a cartoon' />");
    }
}

    
// function coolOrNo(){
//     const movieFan = prompt("Are the best movies from the 90s?")
// console.log(movieFan);

//     if (movieFan == "yes"){
//         document.write('You are in the right place!');
//     }   else if (movieFan == "no"){
//         document.write('You have lots to learn here!');
//     }   else {
//         coolOrNoWarn();
//     }
// }

// function coolOrNoWarn(){
//     const movieFan2 = prompt("One more chance to be a good sport! Are the best movies from the 90s?")
// console.log(movieFan2);

//     if (movieFan2 == "yes"){
//         document.write('You are in the right place!');
//     }   else if (movieFan2 == "no"){
//         document.write('You have lots to learn here!');
//     }   else {
//         coolOrNoWarn2();
//     }
// }

// function coolOrNoWarn2(){
//     const movieFan3 = prompt("I can do this all day pal! Are the best movies from the 90s? Come on!")
// console.log(movieFan3);

//     if (movieFan3 == "yes"){
//         document.write('Finally, we agree on something!');
//     }   else if (movieFan3 == "no"){
//         document.write('You have lots to learn here!');
//     }   else {
//         coolOrNoWarn2();
//     }
// }


    // function coolOrNoWarn(){
    //     const movieFan2 = prompt("One more chance! Are the best movies from the 90's?")
    //     console.log(movieFan2);
    // }

    // if (movieFan2 == "yes"){
    //     document.write('You are in the right place!');
    // }   else if (movieFan2 == "no"){
    //     document.write('You have lots to learn here!');
    // }   else {
    //     coolOrNoWarn();
    // }

// function coolOrNo(){
//     const movieFan = prompt("Are the best movies from the 90s?")
// console.log(movieFan);

//     if (movieFan == "yes"){
//         document.write('You are in the right place!');
//     }   else if (movieFan == "no"){
//         document.write('You have lots to learn here!');
//     }   else {
//         document.write('Come on in!');
//     }


//document.write("Hi! " + bandName + " is one of our favorites too!");

// function getName(){
//     const bandName = prompt("What is your favorite band from the 90s?");
//     console.log(bandName);
//     return bandName;
// }

// let theirBand = getName();
// //console.log(bandName);
// //console.log(getName());

// function greetUser(){
//     document.write("Hi! " + theirBand + " is one of our favorites too!");

// greetUser();

//document.write("Hi! " + theirBand + " is one of our favorites too!");


// if (this is true) {execute this code}

// if (bandName == "Nirvana"){
//    alert("Come as you are!");
//}   else if (bandName == "Radiohead"){
//    alert("Big fans of Kid A here!");
//}   else {
//    alert("Great answer");
//}



