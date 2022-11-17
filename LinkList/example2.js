class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
const a=new Node('A');
const b=new Node('B');
const c= new Node('C');
const d=new Node('D');

a.next=b;
b.next=c;
c.next=d;


const LinkedListFind=(head,target)=>{
    let curr=head;
    while(curr!=null){
        if(curr.val==target)
        return true
        curr=curr.next;
        
    }
    return false;
}

LinkedListFind(a,'C');
