let Stack=function(){
    this.count=0;
    this.storage={};

// add a value on to the end of a stack

this.push=function(value){
    this.storage[this.count]=value;
    this.count++;
}
this.pop=function(){
    if(this.count===0){
        return undefined;
    }
   this.count--;
   let result=this.storage[this.count];
   delete this.storage[this.count];
   return result;
}
this.peek=function(){
    return this.storage[this.count-1];
}
}
let myStack=new Stack();
myStack.push(2)
myStack.push(3);
myStack.push(4);
console.log(myStack.pop());
console.log(myStack.peek())
console.log(myStack.pop());
console.log(myStack.peek())
console.log(myStack.pop());
// console.log(myStack.peek())
// console.log(myStack.pop());
// console.log(myStack.pop());