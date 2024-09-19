// let firstName = "Ratnesh";
// firstName = "Puskar";
// console.log(firstName);
// let loc = "Trivandrum";
// console.log(loc);
// let pincode = 695582;
// console.log(pincode);
// var date = new Date();
// console.log(date.getDate());
// let language:any;
// language = true;
// language = "Malayalam";
// console.log(language);
// function factorial(n){
//     let fact = 1;
//     while (n > 1){
//         fact *= n;
//         n--;
//     }
//     return fact;
// }
// var result = factorial(5);
// console.log(result);
// function checkPrime(n){
//     let flag = true;
//     if(n < 1){
//         flag = false;
//     }
//     else{
//         for(let i=2; i < n/2; i++){
//             if(n %  i == 0){
//                 flag = false;
//             }
//         }
//     }
//     if(flag == true){
//         return "prime";
//     }
//     else{
//         return "not prime";
//     }
// }
// var r = checkPrime(17);
// console.log(r);
// let fruits = ["apple", "banana", "orange", "leach", "berries"];
// console.log(fruits);
// console.log(fruits.length);
// let score = ["Rohit", 240, 45.78, 130.43, 13000, "India", ]
// score.filter(e => typeof(e) == "number").map(e => console.log(e));
// const sum = score.filter(e => typeof(e) == "number").reduce((a,c )=> Number(a) + Number(c) );
// console.log("addition of number is : "+ sum);
// const n: any =[7, 2, 9, 4, 6, 5, 1, 8, 3];
// console.log(n);
// const reverse = n.toReversed((n) => {
//     return n;
// });
// console.log(reverse);
// const order = n.sort((n) => {
//     return n;
// });
// console.log(order); 
//fuctions
// type mytype =  number | string | boolean
// const add = (a: mytype, b: number, c: number) =>{ // b: number = 10 - default value for b
//     console.log(a,b,c);
//     //return a+b;
// }
// const a = add;
// a(true,10,20);
//objects
// let pet = {"type":"Dog", "name":"Bruno", "Breed":"German Shefard"};
// console.log(pet.name);
// let pet2 = pet;
// pet2 = {type: "Cat", name:"Tom", Breed:"Persian"};
// console.log(pet2);
// console.log(pet);
//class
var Student = /** @class */ (function () {
    function Student(studentId, firstName, age) {
        this.studentId = studentId;
        this.firstName = firstName;
        this.age = age;
    }
    Student.prototype.printRecord = function () {
        console.log(this.studentId, this.firstName, this.age);
    };
    return Student;
}());
var student1 = new Student("101", "Doremi", 10);
// student1.studentId = "101";
// student1.firstName = "Doremon";
// student1.age = 12;
console.log(student1);
student1.printRecord();
