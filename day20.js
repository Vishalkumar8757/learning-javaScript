 const studend = {
    name:"vishal kumar",
    age:20,
    phy:85,
    math:100,
    che:95,
    getavg(){
        let avg = (this.math+this.che+this.phy)/3;
        console.log(avg)
        console.log(`${this.name} get avg mark is ${avg}`)
    }

}
studend.getavg();

console.log("vishal")
console.log("vishal")
console.log("vishal")
let a = 5;
try{
  console.log(a)
}catch{
    console.log("error caught")
}
 
console.log("vishal kumar")
console.log("vishal kumar")
console.log("vishal kumar")


let sum = (a,b)=>{
    console.log(a+b);
};
sum(90,10);


const cube = (n)=>{

    console.log(n*n*n);
}
cube(55)

const pow = (a,b) =>{
    console.log(a**b);
}
pow(5,2);

const mul = (a,b) => (
   console.log( a*b )
);
mul(55,66);



// console.log("normlly exuction");
// setTimeout(()=>{
//     console.log("exuction after 4 sec");
// },4000)
// console.log("normlly exuction2");



// let id = console.log("normlly exuction");
// setInterval(()=>{
//     console.log("exuction after 2 sec multiple time");
// },2000)
// console.log("normlly exuction2");

let id = setInterval(()=>{
    console.log("exuction after 2 sec multiple time");
},2000)

setTimeout(()=>{
    clearInterval(id);
    console.log("execution stop after 10 sec");
},10000)