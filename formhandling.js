// function handle(){
//   let num1= parseInt(document.querySelector('#num1').value)
//   let num2= parseInt(document.querySelector('#num2').value)

//   alert(num1+num2)
// }

// function submit(){
//      let num1= parseInt(document.querySelector('#num1').value)
//      let num2= parseInt(document.querySelector('#num2').value)
//      let num3= parseInt(document.querySelector('#num3').value)
//      let num4= parseInt(document.querySelector('#num4').value)
//      let num5= parseInt(document.querySelector('#num5').value)

//      document.querySelector('#res').innerHTML = num1+num2+num3+num4+num5
      
//    return false

// }

// let person = {
//   name : "vishal",age:21 , city:"bhopal"
// }
// person.mail = "vishal@gamil.com"
// person.age = 23;
// console.log(person);

// for(let k in person){
//   console.log(k);
//   console.log(person[k]);
// }
// let k = Object.keys(person)
// console.log(k[0])

// let v = Object.values(person)
// console.log(v[0])

// let emp = {
//   emp_name : prompt("Enter name"),
//    emp_age: prompt("enter age"),
//    emp_contact:prompt("entercontact")
//   }
// console.log(emp)


let store = {
  stname : "kirana store",
  weekincome :[1200,23300,122.400],
  frenchize :{
    first :"bhopal",
    second :"indripuri" 
  },
  add :function(){
    console.log(3+6);
  },
  sub :function(a,b){
    return a-b
  }

}
console.log(store.weekincome[2]);
console.log(store.frenchize.first);

store.add()

console.log(store.sub(9,3))



// spread operator

let person = {
  name :"vishal",city:"bhopal"
}
let salary = {
  ...person,
  monthly_sal : 30000,
  yearly :"3.6lpa"
}
console.log(salary);

// destructuring

let { stname,city ,age} = {
  stname:"vishal" ,city:"bhopal", age:"20"
}
console.log(stname);

//array of object

let student = [
  {
    stname:"vishal",
    stage :24
  },
  {
    stname : "manyank",
    stage :24
  },
  {
    stname :"aniket",
    stage :55
  }
]

console.log(student); 

