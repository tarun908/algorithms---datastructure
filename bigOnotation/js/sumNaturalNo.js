function printNumber(n){
    if(n<=1){
        return n;
    }
    console.log(n);
    return n+printNumber(n-1)
}
console.log(printNumber(10)); 