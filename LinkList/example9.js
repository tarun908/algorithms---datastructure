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
e=new Node('E');

function linkAtAnyPosition(head,data,position){
    let node =new Node(data);
    let curr=head;
    let prev=null;
    if(position==0){
        node.next=head;
    }else{
        let i=0
        while(i<position){
            prev=curr;
            curr=curr.next;
            i++;
        }
        prev.next=node;
        node.next=curr;
    }
    return head;
}
console.log(linkAtAnyPosition(a,4,c));