let arr=[]
let size=arr.length
function push(){
    let val=document.getElementById('newE1').value;
    arr[size]=val
    size++
    console.log("stack element added")
}
function pop(){
    if(size>0){
        size--
        arr.length=size
        console.log("element remove from stack")
    }else{
        console.log(`stack is already empty`)
    }
}
function display(){
for(let i=0;i<=arr.length-1;i++){
    console.log("stack id is"+" "+i+" "+"value is"+arr[i])
}
}
