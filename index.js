//THINGS TO KNOW BEFORE GET INTO REACT

// 1) Var,LET AND CONST 

// var abc=3
// abc=4
// console.log(abc)//4

// let abc=3
// abc=5
// console.log(abc)//5

// const abc=3
// abc=5
// console.log(abc)//typeerror
// ................................................

// 2)NORMAL FUNCTION AND ARROW FUNCTION

// normal function

// function greet(){
//     age=2
//     return this.age
   
// }
// console.log(greet())//2
// or 
// function greet(){
//     console.log('good')
// }
// greet()

// arrow function

// var divideby100 = ( number) => {
//     return number/ 100
// }
//     console.log(divideby100(600))//6
// or
// var divideby100 =number => number/ 100
//     console.log(divideby100(600))
// ................................................

// 3) class and inheritance

// class

// class person {
//     constructor() {
//         this.name='ani'
//     }
//     printname() {
//         console.log(this.name)
//     }
// }
// const persons=new person()
// persons.printname();//ani

//Inheritance


// class humans {
//     constructor(){
//         this.age=2
//     }
//     printage(){
//         console.log(this.age)
//     }
// }
// class person extends humans {
//     constructor() {
//         super()
//         this.name='ani'
//     }
//     printname() {
//         console.log(this.name)
//     }
// }
// const persons=new person()
// persons.printname();//ani
// persons.printage();//2

// ....................................................

// 4)REST AND SPREAD OPERATOR

// REST OPERATOR

// const arr1=[1,2,3]
// const arr2=[...arr1,4]
// console.log(arr2)//1,2,3,4
// or 
// const obj={
//     age:2
// }
// const obj1={
//     ...obj,
//    name:'ani'
// }
// console.log(obj1)//{age: 2, name: 'ani'}

// SPREAD OPERATOR

// const filter = (...args)=>{
//     return args.filter(el=>el ===1)
// }
// console.log(filter(1,3))//1
// ....................................................

// 5)DESTRUCTURING

// const numbers=['a','b','c'];
// [good,bad,cee]=numbers;//destructuring syntax
// console.log(good,bad,cee)//a,b,c

// ....................................................

// 6) PRIMITIVE AND REFERENCE DATATYPE

// primitive datatype

// const number=1
// const num2=number;
// console.log(num2)

//reference datatype

// const person={
//     name: 'max'
// }
// const secondperson =person
// // person.name='ani'
// console.log(secondperson)//{name: 'max'}
// or 
// const person={
//     name: 'max'
// }
// const secondperson =person
// person.name='ani'
// console.log(secondperson)//{name: 'ani'}


// 7)ARRAY FUNCTIONS

//map

// const numbers=[1,2,3];
// const doubleNumArray =numbers.map((num)=>{
//     return num *2
// })

// console.log(numbers)//[1, 2, 3]
// console.log(doubleNumArray)//[2, 4, 6]