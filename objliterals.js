 const student = {
    name : "vishal kaumar", 
    age : 20,
    gender :"M",
    contact : 8757372118,
 };
//  console.log(student);
console.log(student.age);
console.log(student.gender);

 const thread = {
    username :"@vishal8757",
    post : "This is mt @ firstpost",
    likes : 200,
    repost : 50,
    tags : ["@vishal","@suraj","@aniket"],
 };
//  console.log(thread);
console.log(thread["username"]);
console.log(thread.post);
console.log(thread.tags[1]);

const obj = {
    1:"a",
    2:"b",
    null:"c",
    true :"d",
    undefined:"e",
};
console.log(obj[1]);
console.log(obj.null);

const students = {
    name :"vishal",
    age :20,
    marks:89.4,
    city :"bhopal",
};
console.log(students);
students.marks = "A";
students.gender = "male";
students.city = "bihar";
console.log(students);
delete students.age;
console.log(students);

const classInfo = {
      student1 : {
        name:"vishal kumar",
        age:20,
        gender:"M"
      },

      student2 :{
        name:"aniket kumar",
        age:22,
        gender:"M"
      },

        student3 :{
        name:"manyank kumar",
        age:21,
        gender:"M"
      },
};

console.log (classInfo);
console.log (classInfo.student1);
console.log (classInfo.student1.age);
console.log (classInfo.student2.age);
console.log (classInfo.student3.age);

const classinfo =  [
    {  name:"vishal kumar",
        age:20,
        gender:"M"
    },
    {
         name:"aniket kumar",
        age:22,
        gender:"M"
    },
    {
        name:"manyank kumar",
        age:21,
        gender:"M"
    },
];
console.log(classinfo);
console.log(classinfo[0]);
console.log(classinfo[1]);
console.log(classinfo[2]);
console.log(classinfo[0].name);
console.log(classinfo[1].name);
 classinfo[2].name="suraj";
console.log(classinfo[2].name);
classinfo[2].gender="chakka";
console.log(classinfo[2]);