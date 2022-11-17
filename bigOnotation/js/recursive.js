// function printNumber(n){
//     // base condition
//     if(n==0){
//         return;        
//     }
//     // print n
//     console.log(n);
//     // recursion
//     printNumber(n-1);
// }
// // input
// console.log(printNumber(5));



// print number from 1 to 5
// function numberPrint(n){
//     if(n==6){
//         return;
//     }
//     console.log(n);
//     numberPrint(n+1);

// }
// console.log(numberPrint(1));


// function printSum(i,n,sum){
//     if(i==n){
//         sum+=i;
//         console.log(sum);
//         return;
//     }


//     sum+=i;
//     console.log(sum);
//     console.log(i+"print i");
//     printSum(i+1,n,sum);
// }
// console.log(printSum(1,5,0));


// print factorials of n number

function printFactorial(n){
    if(n==1 || n==0 ){
        return 1;
    }
        let result=printFactorial(n-1);
        let result1=n*result;
        return result1;
        
    
}
console.log(printFactorial(5));