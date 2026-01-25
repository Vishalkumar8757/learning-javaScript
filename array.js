
let students  = ["vishal","manyank","aniket"];
console.log(students);

let nums = [2,5,8,7,];
console.log(nums);

let info = ["vishal",20,90.5];
console.log ("mixed array",info);
console.log (info[0]);
console.log (info[0].length);
console.log (info[0][0]);

let emparr = [];
console.log(emparr.length);

console.log([].length);
console.log([1,2,3,4,5,6,7].length);

let fruit = ["mango","apple","banana"];
console.log(fruit);
 
fruit[0]= "papaya";
console.log(fruit);

console.log(fruit[0]= "papaya",fruit);

fruit[10]= "pineapple";
console.log(fruit);

let cars = ["sacpio","thar","fortuner","audi"];
console.log(cars);
cars.push("bmw","roll","ferrari")
console.log(cars);
cars.pop();
console.log(cars);

cars.unshift("maruti");
console.log(cars);
cars.shift();
console.log(cars);

let follower = ["suraj","aniket","manyank"];
console.log(follower);
let blocked = follower.shift();
console.log(follower);
console.log(blocked);

let month = ["january","july","march","august"];
console.log(month);
month.shift();
console.log(month);
month.shift();
console.log(month);
month.unshift("june");
month.unshift("july");
console.log(month);

let colour = ["red","yellow","green","black"];
 console.log(colour.indexOf("red"));
 console.log(colour.indexOf("blue"));
 console.log(colour.includes("black"));


let primary = ["red","green","yellow"];
let secondary  = ["black","white","purple"];
let fullcolour = primary.concat(secondary);
console.log(fullcolour);
console.log(secondary.concat(primary));

console.log(primary.reverse());
console.log(secondary.reverse());

let name = ["vishal","suraj","manyank","aniket","lavkush","rohit","ankit","vicky"];
console.log(name);
console.log(name.splice(5));
console.log(name);
console.log(name.splice(0,1));
console.log(name);
console.log(name.splice(0,1,"vicky","rohit"));
console.log(name);
console.log(name.splice(1,0,"vishal"));
console.log(name);


let marks = [100,5475,21,5,18,33,794];
console.log(marks.sort());

let str = ['a','n','g','b','f'];
console.log(str.sort());

let start = ["january","july","march","august"];
console.log(start.splice(0,2));
console.log(start);
console.log(start.splice(0,0,"july","june"));
console.log(start);