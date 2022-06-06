import {hexaSpeakArr} from './hexSpeak.js';
const hexaAlphaArr = ["a", "b", "c", "d", "e", "f"];
const hexaNumArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


 //Prototype that will pick random numbers from a given array;
 //Execution time complexity : o(N)
Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
};

//Execution time complexity : o(N)
//Simple function that will return either zero Or one
 function capsOrNoCaps() {
     let random = Math.random();
     let result = Math.round(random);
     return Math.round(result);
 }

 
//Execution time complexity : o(N)
 function HexaGenerator() {
     let finalHexa = "";
     for (var i = 0; i < 4; i++) {
         let isCaps = capsOrNoCaps();
         let randomAlphaChar = hexaAlphaArr.random();
         let randomNumChar = hexaNumArr.random();
         //In a case where we have 2FA mechanism, we always make it "BruteForce proof" by alternating between upperCase or lowerCase, the idea is to make it harder for the BOT to guess the generated code
         let finalAlphaChar = (isCaps === 0) ? randomAlphaChar.toUpperCase() : randomAlphaChar;
         finalHexa = finalHexa + finalAlphaChar + randomNumChar;
     }
     // Ideally, we can always verify if final hexadecimal string does not contains a HexaSpeak sentence
     if (hexaSpeakArr.includes(finalHexa)) {
         HexaGenerator();
     } else {
         return "0x" + finalHexa;
     }
 }


  //Print the result. In a real world situation, we can use Twilio API to send this code via SMS or email to the user 
 console.log(HexaGenerator());
