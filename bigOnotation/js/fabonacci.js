function printFib(a,b,n){
    if(a==0){
        return;
    }
    c=a+b;
    console.log(c);
    printFib(b,c,n-1);


 let c=()=>{
    let a=0;
    let b=1;
    let n=7;
    console.log(a);
    console.log(b);
    printFib(a,b,n-2);

}
}
    

