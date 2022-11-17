function isPalindarom(input){
    // base case
    if(input.length==0 || input.length==1){
        return true;
    }
    //  recursion case
    if(input.charAt(0)==input.charAt(input.length-1)){
        return isPalindarom(input.substring(1,input.length -1));

    }
    return false;
}
console.log(isPalindarom("ashsa"))