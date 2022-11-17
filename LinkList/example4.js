class Node{
    constructor(val){
        this.val=val;
        this.naxt=null;
    }
}

a=new Node('A');
b=new Node('B');
c=new Node('C');
d=new Node('D');

a.naxt=b;
b.naxt=c;
c.naxt=d;

const search=(head, target)=>{
    if(head==null ){
       return false;
    }
    if(head.naxt==target){
        return true;
    }
     return search(head.naxt,target);
}
search(a,a);