class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
const append=(head,data)=>{
    let node=new Node(data);
    let curr=head;
    if(head==null){
        head=node;
    }
    else{
        while(curr.next!=null){
            curr=curr.next;
        }
        curr.next=node;
    }
    return head;
}
console.log(append(2,4,6));
console.log(append(1));
