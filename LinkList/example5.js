class Node{
    constructor(val){
        this.val=val;
        this.next=null;

    }
}
a=new Node(10);
b=new Node(20);
c=new Node(30);
d=new Node(40);

a.next=b;
b.next=c;
c.next=d;

const sumListNumber=(head)=>{
    let sum=0;
    while(head!=null){
        sum=sum+head.val;
      head=head.next;
    //   console.log(sum);
    }
    console.log(sum);
}
sumListNumber(a);