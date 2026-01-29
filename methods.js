// function Hello(){
//     console.log("Hello javascript");
// }
// Hello();

// function printName(){
//     console.log("vishal kumar");
// }
// printName();

// function loop(){
//     for(let i=1; i<=5; i++){
//         console.log(i ,"vishal is the best");
//     }
// }
// loop();

// // function condition(){
// //     let age = prompt("enter your age");
// //     if(age>18){
// //         console.log("eligible for vote");
// //     }
// //     else{
// //         console.log("not edigible for vote");
// //     }
// // }
// // condition();

// function dice(){
//     let random = Math.floor(Math.random()*6)+1;
//     console.log(random);
// }
// dice();

// function argument(name,age,city){
//     console.log(`${name} age is ${age} and live in ${city}`);
// }
// argument("vishal",20,"bhopal");

// // function avg(a,b,c){
// //     console.log((a+b+c)/3);
// // }
// // avg(2,5,8);


// function table(n){
//     for(let i=n ;i<=n*10; i+=n){
//         console.log(i);
//     }
// }
// table(59)

// function retu(a,b){
//     return(a*b)
// }
//  let r = retu(4,5);
// console.log(r);


// function sum(a,b){
//     return(a+b)
// }
//  let n = sum(sum(5,5),(5));
//  console.log(n);


// function agee(age){
//     if(age=>18){
//         return("Adult");
//     }
//     else{
//         return("not adult");
//     }
// }
// console.log(agee(55));

// // function Add(n) {
// //     let sum = 0;
// //     for(let i=1; i<=n; i++){
// //         sum = sum+i;
// //     }
// //     return sum;
    
// // }
// // console.log(Add(prompt("Enter any number"))) ;

// let str = ["name","vishal","age",20];
// function concat(){
//     let result = "";
//     for(let i=0; i<str.length; i++){
//         result = result+str[i];
//     }
//     return result;
// } 
// console.log(concat(str));

// let sum = 55; //global scope

// function calSum(a,b){
//     let sum = a+b; //function scope
//     console.log(sum);
// }
// calSum(2,4);

// console.log(sum);


// let age = 25;
// if(age=>18){
//     let str = "adult"; //block scope 
//     console.log(str);
// }
// console.log(str);


// let i = "block scope"
// for(let i=1; i<=5; i++){
//     console.log(i);
// }
// console.log(i);

function outerfun(){
    let x = 5;
    function innerfun(){
        let a = 50; 
        console.log(x);
        console.log(a);
    }
   // console.log(a)
    innerfun();
     
    console.log("lexical scope");
}
outerfun();


// function outerfun(){
//     function innerfun(){
//         console.log(x);
//     }
//     let x = 5;
//     innerfun();
//     console.log("hoisting scope");
// }
// outerfun();

let greet = "hello";  //global scope

function changeGreet(){
   let greet = "namaste";
   console.log(greet); //function scope

   function innerGreet(){
    console.log(greet); //lexical scope
   }
   innerGreet()
}
console.log(greet)
changeGreet()


let name = function(){ //function expression
    console.log("vishal");
}
name();

let sum = function(a,b){
    return(a+b);
}
console.log(sum(52,8))
      
