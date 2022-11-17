let latters=[];
let word="racecar";
let stack="";

for(let i=0;i<word.length;i++){
    latters.push(word[i]);
}

for(let i=0;i<word.length;i++){
    stack+=latters.pop();
}
if(stack===word){
    console.log(word+" is palindrom");
}else{
    console.log(word,"not a palindrom")
}


let stack=[];
stack.push("tarun");
console.log(stack)

// console.log(stack);