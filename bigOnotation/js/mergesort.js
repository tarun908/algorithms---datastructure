
function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    const middleIndex=Math.floor(arr.length / 2);
    console.log(middleIndex);
    const leftarr=arr.slice(0,middleIndex);
    console.log(leftarr);
    const rightarr=arr.slice(middleIndex,arr.length);
    console.log(rightarr);
     return merge(mergeSort(leftarr),mergeSort(rightarr));
}
function merge(leftarr,rightarr){
    let resultarr=[];
    let leftIndex=0;
    let rightIndex=0;

    while(leftIndex < leftarr.length && rightIndex < rightarr.length){
        if(leftarr[leftIndex] < rightarr[rightIndex]){
            resultarr.push(leftarr[leftIndex]);
            console.log(resultarr);
            leftIndex+=1;
        }else{
            resultarr.push(rightarr[rightIndex]);
            console.log(resultarr);
            rightIndex+=1;
        }
    }
    return resultarr.concat(leftarr.slice(leftIndex)).concat(rightarr.slice(rightIndex));
    
    
}

let arr=[7,2,3,1,9,12,6];
console.log(mergeSort(arr));