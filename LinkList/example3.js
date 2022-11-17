// A->B->C->D->null
class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

a=new Node('A');
b=new Node('B');
c=new Node('C');
d=new Node('D');

a.next=b;
b.next=c;
c.next=d;

const printLinkedList=(head)=>{
    if(head==null){
        return;
    }
    console.log(head.val);
    printLinkedList(head.next);
}
printLinkedList(a);
