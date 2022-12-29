class Node{
  constructor(val){
    this.value=val;
    this.left=null;
    this.right=null;
  }
}
class BSTree{
  constructor(){
    this.root=null;
  }
  isBstEmpty(){
    return this.root===null
  }
  makeTree(val){
    let newNode=new Node(val)
    if(this.root===null){
      this.root=newNode
    }else{
      this.insertNode(this.root,newNode)
    }
  }
  insertNode(root,newNode){
    if(root.value >newNode.value){
      if(root.left===null){
        root.left=newNode;
      }else{
        this.insertNode(root.left,newNode)
      }
    }else{
      if(root.right===null){
        root.right=newNode;
      }else{
        this.insertNode(root.right,newNode)
      }
    }

  }
  search(root,val){
    if(root==null){
      return false
    }else if(root.value===val){
       return true
    }else if(root.value>val){
      return this.search(root.left,val)
    }else if(root.value<val){
      return this.search(root.right,val)
    }
  }

  // Depth First Search algorithm
  preOrder(root){
    if(root){
      console.log(root.value)
       this.preOrder(root.left)
       this.preOrder(root.right)
    }
  }
  inOrder(root){
    if(root){
       this.inOrder(root.left)
       console.log(root.value)
       this.inOrder(root.right)
    }
  }
  postOrder(root){
    if(root){
       this.postOrder(root.left)
       this.postOrder(root.right)
       console.log(root.value)
    }
  }

  // Breath First Search
  bfsTraversing(root){
   let queue=[]
   queue.push(this.root)
   while(queue.length){
    let current=queue.shift()
    if(current.left){
      queue.push(current.left)
    }
    if(current.right){
      queue.push(current.right)
    }
    console.log(current.value)
   }
  }

  minValue(root){
    if(!root.left){
      return root.value;
    }else{
      return this.minValue(root.left)
    }
  }
  maxValue(root){
    if(!root.right){
      return root.value;
    }
    else{
      return this.maxValue(root.right)
    }
  }
}

let bst=new BSTree();
bst.makeTree(20)
bst.makeTree(10)
bst.makeTree(5)
bst.makeTree(30)
bst.makeTree(25)
bst.makeTree(31)
bst.makeTree(45)
bst.makeTree(28)
// console.log(bst.search(bst.root,10))
// console.log(bst)



// bst.preOrder(bst.root)

// bst.inOrder(bst.root)


// bst.postOrder(bst.root)

// bfs

// bst.bfsTraversing()
console.log(bst.minValue(bst.root))
console.log(bst.maxValue(bst.root))