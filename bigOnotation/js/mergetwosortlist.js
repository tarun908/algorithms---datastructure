function mergeSort( A,  B){
    if(A==null ){return B}
    if(B==null){return A}
    if(A.value<B.value){
        A.next=mergeSort(A.next,B);
        return A;
    }else{
        B.next=mergeSort(A,B.next);
        return B;

    }
}
let n1=new mergeSort(1,2);
let n2=new mergeSort(3,6);
let n3=new mergeSort(5,4);
let n4=new mergeSort(10,12);
let n5=new mergeSort(11,7);
let n6=new mergeSort(13,0);
console.log(n1);