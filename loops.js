// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// for(let i=10; i>=1; i--){
//     console.log(i);
// }
 
// for(let i=1; i<=15; i++){
//      if(i%2!=0){
//         console.log(i)
//      }
// }

// for(let i=0; i<=20; i+=2){
//     console.log(i)
// }

// for(let i=2; i<=20; i+=2){
//     console.log(i)
// }

// for(let i=1; i<=20; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// for(let i=5; i<=50; i+=5){
//     console.log(i);
// }

// for(let i=5; i<=50; i++){
//     if(i%5==0){
//         console.log(i);
//     }
// }


// let n = prompt("write your number")
// for( n=5; n<=50; n++){
//     if(n%5==0){
//         console.log(n);
//     }
// }

// let n = prompt("write your number")
// for(let i=n; i<=50; i++){
//     if(i%5==0){
//         console.log(i);
//     }
// }

// let n = prompt("write your number")
// for( n=5; n<=50; n+=5){

//      console.log(n);
// }

// let n =parseInt(prompt("write your number"))
// for(let i=n; i<=n*10; i+=n){

//      console.log(i);
// }

// for(let i=1; i<=5; i++){
//     console.log(`outer loop ${i}`)
//     for(let j=1; j<=5; j++){
//         console.log(j)
//     }
//      console.log(`inner loop end`)
// }

// let m = 1;
// while(m<=10){
//     console.log(m);
//     m++;
// }

// let m = 20;
// while(m>=1){
//     console.log(m);
//     m--;
// }

// const favmovie = "kgf";
// let guess = prompt("guess my fav movie");
// while(guess!=favmovie && guess!="quit"){
//     prompt("please try again");
// }
// if(favmovie==guess){
//     console.log("congrat !");
// }
// else{
//     console.log("you quit the game"); 
// }

// let i = 1;
// while(i<=5){
//     if(i==3){
//         break;
//     }
//     console.log(i);
//     i++;
// }
// console.log(`loops break on loop 3`);

// let fruit = ["mango","banana","litchi","papya","watermelon"];
// for(let i=0; i<fruit.length; i++){
//     console.log(i,fruit[i]);
// }

// let fruit = ["mango","banana","litchi","papya","watermelon"];
// for(let i=fruit.length-1; i>=0; i--){
//     console.log(i,fruit[i]);
//}

// let name = "vishal kumar";
// for(name of "vishal kumar"){
//     console.log(name);
// }

// let fruits = ["mango","banana","litchi","papya","watermelon"];
// for(fruit of fruits){
//     console.log(fruit);
// }

let fruits =[ ["mango","banana","litchi","papya","watermelon"],["mango","banana","litchi","papya","watermelon"]];
for(list of fruits){
    for(name of list)
    console.log(name);
}