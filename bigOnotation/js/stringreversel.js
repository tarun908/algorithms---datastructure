function stringReverse(n){
    if(n===""){
        return "";
    }
    return stringReverse(n.substring(1)) + n.charAt(0);

}
console.log(stringReverse("i am engineer"));