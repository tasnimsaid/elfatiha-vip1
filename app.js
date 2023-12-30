// function countWords() {

// let text = document.getElementById("text").value;
// let wordsCounts = text.split(" ").length;


// document.getElementById("best4").innerHTML=wordsCounts;

// }

// // const words = text => {

// return text.split('/\S+/').length ;

// };




// //best code lettre
// let textWithoutSpace = text.replace(/\s/g, '');
// let arrayOfLetters = textWithoutSpace.split("");


// function countWord() {
// let counts = {};
// let text = document.getElementById("text").value;
// let wordsCount = text.split(" ").length;

// let textWithoutSpace = text.replace(/\s/g, '');
//  let arrayOfLetters = textWithoutSpace.split("");


// document.getElementById("best3").innerHTML=wordsCount;

// }








function countWord3(){


   // let text3 = document.getElementById("text3").value;

   // text3 =text3.trim();
   // var words = text3.split(" ");
   // var wordCount = 0;
   
   // document.getElementById("best43").innerHTML=wordCount; 




   let text3 = document.getElementById("text3").value;

text3 =text3.trim();
var words = text3.split(" ");
// var harakats = text3.split(" ");
var wordCount = words.length;

document.getElementById("best43").innerHTML=wordCount; 

   

//  let words = text3.split(" ").length ;

   
// document.getElementById("best43").innerHTML=wordCount; 
  

let Counter31 = 0 ;
let Counter32 = 0 ;
let Counter33 = 0 ;
let Counter34 = 0 ;

 let Counter35 = 0 ;
 let Counter36 = 0 ;
let Counter37 = 0 ;
let Counter38 = 0 ;
let Counter39 = 0 ;
let Counter310 = 0 ;

let Counter311 = 0 ;
let Counter312 = 0 ;
let Counter313 = 0 ;
let Counter314 = 0 ;
let Counter315 = 0 ;
let Counter316 = 0 ;
let Counter317 = 0 ;
let Counter318 = 0 ;
let Counter319 = 0 ;
let Counter320 = 0 ;
let Counter321 = 0 ;
let Counter322 = 0 ;
let Counter323 = 0 ;
let Counter324 = 0 ;
let Counter325 = 0 ;
let Counter326 = 0 ;
let Counter327 = 0 ;
let Counter328 = 0 ;
let Counter29 = 0 ;





let allsenda ;


let Counter800 = 0;
let Counter801 = 0;
let Counter802 = 0;
let Counter803 = 0;
let Counter804 = 0;





let alif3 = ['ا','أ','إ','آ'];



let laa3 = ['ل'];
let haa3 = ['ح'];
let mim3 = ['م'];
let dal3 = ['د'];
let haae3 = ['ه' ,'ة'];
let raa3 = ['ر'];
let baa3 = ['ب'];
let ine3 = ['ع'];
let yaa3 = ['ي','ى','ئ'];
 let noon3 = ['ن'];
let kaf3 = ['ك'];
let ouaou3 = ['و','ؤ'];
let sin3 = ['س'];
let taa3 = ['ت'];
let saad3 = ['ص'];
let ttae3 = ['ط'];
let ppaf3 = ['ق'];
let ddal3 = ['ذ'];
let gaa3 = ['غ'];
let daa3 = ['ض'];
let faa3 = ['ف'];
let zay3 = ['ز'];
let kha3 = ['خ'];
let chine3 = ['ش'];
let ddda3 = ['ظ'];
let jim3 = ['ج'];
let ttta3 = ['ث'];
let damma = ["ُ","ٌ"];
let fatha = ["َ","ً"];
let kasra = ["ِ","ٍ"];
let chida = ["ّ"];
let sokoune = ["ْ"];




for (const harakat of words) {
   if (harakat.match(/[^\u0600-\u06FF]/)) {
     continue;
   }
 
   // letterCounts.set(harakat, letterCounts.get(letter) || 0);
   // letterCounts.set(harakat, letterCounts.get(letter) + 1);
 }
 



for(ch of text3) {

  
   // var ch = text3.charAt(ch);
   // if (text3.match(/[^\u0600-\u06FF]/)) {
   //    continue;
   //  }
    if (alif3.includes(ch)){
      Counter31++
  
  
  }   if (laa3.includes(ch)){
    Counter32++
 }

 if (haa3.includes(ch)){
   Counter33++
}

if (mim3.includes(ch)){
   Counter34++
   
}

if (dal3.includes(ch)){
   Counter35++
}

if (haae3.includes(ch)){
   Counter36++
}


if (raa3.includes(ch)){
   Counter37++
}
if (baa3.includes(ch)){
   Counter38++
}
if (ine3.includes(ch)){
   Counter39++
}
if (yaa3.includes(ch)){
   Counter310++
}

if (noon3.includes(ch)){
   Counter311++
}


if (kaf3.includes(ch)){
   Counter312++
}


if (ouaou3.includes(ch)){
   Counter313++
}



if (sin3.includes(ch)){
   Counter314++
}


if (taa3.includes(ch)){
   Counter315++
}


if (saad3.includes(ch)){
   Counter316++
}


if (ttae3.includes(ch)){
   Counter317++
}


if (ppaf3.includes(ch)){
   Counter318++
}


if (ddal3.includes(ch)){
   Counter319++
}


if (gaa3.includes(ch)){
   Counter320++
}


if (daa3.includes(ch)){
   Counter321++
}


if (faa3.includes(ch)){
   Counter322++
}


if (zay3.includes(ch)){
   Counter323++
}


if (kha3.includes(ch)){
   Counter324++
}


if (chine3.includes(ch)){
   Counter325++
}


if (ddda3.includes(ch)){
   Counter326++
}


if (jim3.includes(ch)){
   Counter327++
}


if (ttta3.includes(ch)){
   Counter328++
}else if (damma.includes(ch)) {
   Counter800++

    } else if (fatha.includes(ch)) {
      Counter801++

    } else if (kasra.includes(ch)) {
      Counter802++

    } else if (sokoune.includes(ch)) {
      Counter803++
  
    
  }else if (chida.includes(ch)) {
   Counter804++

 }
}








let harakatm = Counter800 * 5 + Counter801 * 4 + Counter802 * 3 + Counter803 * 6 + Counter804 * 8 ;

 document.getElementById("damma").innerHTML = Counter800 ;
 document.getElementById("fatha").innerHTML = Counter801 ;
 document.getElementById("kasra").innerHTML = Counter802 ;
 document.getElementById("sokoune").innerHTML = Counter803 ;
 document.getElementById("chida").innerHTML = Counter804 ;

 
 document.getElementById("dammax").innerHTML = Counter800 * 5 ;   
 document.getElementById("fathax").innerHTML = Counter801 * 4;
 document.getElementById("kasrax").innerHTML = Counter802 * 3 ;
 document.getElementById("sokounex").innerHTML = Counter803 * 6;
 document.getElementById("chidax").innerHTML = Counter804 * 8 ;
 document.getElementById("harakatm").innerHTML = harakatm ;
 document.getElementById("xharakatm").innerHTML = harakatm ;      
   


document.getElementById("alif3").innerHTML=Counter31;
document.getElementById("alif13").innerHTML=Counter31;

document.getElementById("laa3").innerHTML=Counter32;
document.getElementById("laa23").innerHTML=Counter32*2;

document.getElementById("haa3").innerHTML=Counter33;
document.getElementById("haa33").innerHTML=Counter33*3;

document.getElementById("mim3").innerHTML=Counter34;
document.getElementById("mim43").innerHTML=Counter34*4;

document.getElementById("dal3").innerHTML=Counter35;
document.getElementById("dal53").innerHTML=Counter35*5;

document.getElementById("haae3").innerHTML=Counter36;
document.getElementById("haae63").innerHTML=Counter36*6;

document.getElementById("raa3").innerHTML=Counter37;
document.getElementById("raa73").innerHTML=Counter37*7;

document.getElementById("baa3").innerHTML=Counter38;
document.getElementById("baa83").innerHTML=Counter38*8;

document.getElementById("ine3").innerHTML=Counter39;
document.getElementById("ine93").innerHTML=Counter39*9;

document.getElementById("yaa3").innerHTML=Counter310;
document.getElementById("yaa103").innerHTML=Counter310*10;

document.getElementById("noon3").innerHTML=Counter311;
document.getElementById("noon113").innerHTML=Counter311*11;

document.getElementById("kaf3").innerHTML=Counter312;
document.getElementById("kaf123").innerHTML=Counter312*12;


document.getElementById("ouaou3").innerHTML=Counter313;
document.getElementById("ouaou133").innerHTML=Counter313*13;


document.getElementById("sin3").innerHTML=Counter314;
document.getElementById("sin143").innerHTML=Counter314*14;

document.getElementById("taa3").innerHTML=Counter315;
document.getElementById("taa153").innerHTML=Counter315*15;

document.getElementById("saad3").innerHTML=Counter316;
document.getElementById("saad163").innerHTML=Counter316*16;

document.getElementById("ttae3").innerHTML=Counter317;
document.getElementById("ttae173").innerHTML=Counter317*17;

document.getElementById("ppaf3").innerHTML=Counter318;
document.getElementById("ppaf183").innerHTML=Counter318*18;


document.getElementById("ddal3").innerHTML=Counter319;
document.getElementById("ddal193").innerHTML=Counter319*19;

document.getElementById("gaa3").innerHTML=Counter320;
document.getElementById("gaa203").innerHTML=Counter320*20;

document.getElementById("daa3").innerHTML=Counter321;
document.getElementById("daa213").innerHTML=Counter321*21;

document.getElementById("faa3").innerHTML=Counter322;
document.getElementById("faa223").innerHTML=Counter322*22;

document.getElementById("zay3").innerHTML=Counter323;
document.getElementById("zay233").innerHTML=Counter323*23;

document.getElementById("kha3").innerHTML=Counter324;
document.getElementById("kha243").innerHTML=Counter324*24;

document.getElementById("chine3").innerHTML=Counter325;
document.getElementById("chine253").innerHTML=Counter325*25;

document.getElementById("ddda3").innerHTML=Counter326;
document.getElementById("ddda263").innerHTML=Counter326*26;

document.getElementById("jim3").innerHTML=Counter327;
document.getElementById("jim273").innerHTML=Counter327*27;

document.getElementById("ttta3").innerHTML=Counter328;
document.getElementById("ttta283").innerHTML=Counter328*28;



document.getElementById("text3").addEventListener("keyup",countWord3);

allsenda =  Counter31*1 + Counter32*2 + Counter33*3 + Counter34*4 + Counter35*5 + Counter36*6 + Counter37*7 + Counter38*8 + Counter39*9 + Counter310*10 + Counter311*11 + Counter312*12 + Counter313*13 + Counter314*14 + Counter315*15 + Counter316*16 + Counter317*17 + Counter318*18 + Counter319*19 + Counter320*20 + Counter321*21 + Counter322*22 + Counter323*23 + Counter324*24 + Counter325*25 + Counter326*26 + Counter327*27 + Counter328*28  ;
document.getElementById("best33").innerHTML= Counter31*1 + Counter32*2 + Counter33*3 + Counter34*4 + Counter35*5 + Counter36*6 + Counter37*7 + Counter38*8 + Counter39*9 + Counter310*10 + Counter311*11 + Counter312*12 + Counter313*13 + Counter314*14 + Counter315*15 + Counter316*16 + Counter317*17 + Counter318*18 + Counter319*19 + Counter320*20 + Counter321*21 + Counter322*22 + Counter323*23 + Counter324*24 + Counter325*25 + Counter326*26 + Counter327*27 + Counter328*28  ;

document.getElementById("best63").innerHTML= Counter31 + Counter32 + Counter33 + Counter34 + Counter35 + Counter36 + Counter37 + Counter38 + Counter39 + Counter310 + Counter311 + Counter312 + Counter313 + Counter314 + Counter315 + Counter316 + Counter317 + Counter318 + Counter319 + Counter320 + Counter321 + Counter322 + Counter323 + Counter324 + Counter325 + Counter326 + Counter327 + Counter328 ;
document.getElementById("xbest").innerHTML = allsenda ;      
 document.getElementById("allsense").innerHTML = harakatm +allsenda ;    

}



