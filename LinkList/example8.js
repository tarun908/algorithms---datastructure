class  Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
// a=new Node('A');
// b=new Node('B');
// c=new Node('C');
// d=new Node('D');
// e=new Node('E');

// a.next=b;
// b.next=c;
// c.next=d;
// d.next=e;


function LinkAtHead(head,data){
    let node=new Node(data);
     node.next=head;
     head=node;
     return head;
}
console.log(LinkAtHead(1));
console.log(LinkAtHead(1,2));
console.log(LinkAtHead(2,3));



