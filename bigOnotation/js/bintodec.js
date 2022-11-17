function findBinary(num){
    if(num==0){
        return "";
    }
    
    return findBinary(Math.floor(num/2))+(num%2);
}
console.log(findBinary(2));