// let languages=['javascript','python','c','java'];
// console.log(languages);
// console.log(languages.length)
// console.log(languages[1].length);
// console.log(languages[2].length);
// console.log(languages[3].length);
// push method
// languages.push("c++");
// languages.unshift("dart");
// languages.pop();
// languages.shift();
// console.log(languages.shift());


// ARRAY USING LOOP

// let actors=[
//     {
//         name:'actor1',
//         payment:10000
//     },
//     {
//         name:'actor2',
//         payment:100000
//     },
//     {
//         name:'actor1',
//         payment:200000
//     }
// ]
// for(let i=0;i<actors.length;i++){
//     actors[i].payment=actors[i].payment-1000;
// }
// console.log("list of those actors whose payment cut due to overacting",actors);

// ========================================================================================================


// ========================================================================================================

// Filters

// const students=[
//     {
//         name:"student1",
//         marks:45
//     },
//     {
//         name:"student2",
//         marks:60
//     },
//     {
//         name:"student3",
//         marks:35
//     },
//     {
//         name:"student4",
//         marks:50
//     }
//     , {
//         name:"student5",
//         marks:40
//     }
// ]
// const faild=students.filter((student)=>{
//     if(student.marks<45){
//         return true;
//     }
//     return false;
// })
// console.log(faild);
// ==================================================================================


// Map Function

// const users=[
//     {
//         fname:"Tarun",
//         lname:"Badhan"
//     },
//     {
//         fname:"John",
//         lname:"Doe"
//     },
//     {
//         fname:"Kapil",
//         lname:"Dev"
//     },
//     {
//         fname:"Varsha",
//         lname:"Thakur"
//     }
// ]

// const fullname=users.map((user)=>{
//     return{
//         fulLName:`${user.fname} ${user.lname}`
//     }
// })
// console.log(fullname);
// ==========================================================================================


// Reduce

// const Marvel=[
//     {
//         name:"Hulk",
//         budgut:130
//     },
//     {
//         name:"Avangers",
//         budgut:100
//     },
//     {
//         name:"Thor",
//         budgut:200
//     },
//     {
//         name:"loki",
//         budgut:111
//     },
    
    
// ]

// find total budgut using reduce
// const total=Marvel.reduce((acc,movie)=>{
//     acc+=movie.budgut;
//     return acc;
// },0)

// console.log(total);


// ======================================================\
// Find method

// const movieName=Marvel.find((movie)=>{
//     return movie.name==="loki"
// })
// console.log(movieName);
// ======================================================

// sort method

// const Name=[5,4,3,2,1]
// Name.sort();
// console.log(Name);
// const v=Name.find((name)=>{
//     return name==="kapil"

// })
// console.log(v);
a
let rev = 0;
let num = 123456789;
let lastDigit;

while(num != 0){
	lastDigit = num % 10;
  rev = rev * 10 + lastDigit;
  num = Math.floor(num/10);
}
console.log(rev);