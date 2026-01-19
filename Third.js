// let a = parseInt(prompt("Enter any number"))
// if(a>0){
//     alert("positive no")
// }else{
//     alert("negative number")
// }

// let a = parseInt(prompt("Enter any number"))
// if(a>15){
//     alert(" greater tan 15")
// }else{
//     alert("less than 15 number")
// }

// let a = parseInt(prompt("Enter any number"))
// if(a%3==0){
//     alert(" divisible by 3")
// }else{
//     alert(" not divisible by 3")
// }

// let a = parseInt(prompt("Enter any number"))
// if(a%2==0){
//     alert("  even")
// }else{
//     alert(" odd")
// }

  

//  let a = parseInt(prompt("Enter first number"))
//  let b = parseInt(prompt("Enter second number"))

//  if(b%2==0){
//     alert("even")
//     console.log(3.14*a*a)
//  }else{
//     alert("odd")
//     console.log(a*a*a)
//  }

//   let a = parseInt(prompt("Enter first number"))
//  if(a>0){
//     alert("positive number")
//     console.log(a)
//  }
//  else{
//     alert("negative number")
//     console.log(a*a)
//  }

 

// let num = parseInt(prompt("Enter any number"))
// if(num>0){
//     console.log("posituve")
// }else if(num<0){ 
//     console.log("negative")
// }else{
//     console.log("neturl")
// }


let a = parseInt(prompt("Enter math mark "))
let b = parseInt(prompt("Enter science mark "))
let c = parseInt(prompt("Enter hindi mark "))
let d = parseInt(prompt("Enter engilsh mark "))
let e = parseInt(prompt("Enter computer mark "))

let  total = a+b+c+d+e;
console.log(total);
let average = total/5;
console.log(average);

if(average>=100){
    console.log("A+");
}
else if(average>=90){
    console.log("A");
}
else if(average>=80){
    console.log("B+");
}
else if(average>=70){
    console.log("B");
}
else if(average>=60){
    console.log("C+");
}
else if(average>=50){
    console.log("C");
}
else if(average>=40){
    console.log("fail");
}
 