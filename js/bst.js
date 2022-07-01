let answer = Array(2).fill([]);

class Node {
  constructor(x, y, idx) {
    this.rightChild = None;
    this.leftChild = None;
    this.x = x;
    this.y = y;
    this.idx = idx;
  }

  insert = (newNode) => {
    const nx = newNode.x;
    const ny = newNode.y;

    if (nx > this.x) {  // Direction right
        if (this.rightChild === None) {
            this.rightChild = newNode
        } else {
            this.rightChild.insert(newNode);
        }
    } else {  // Direction left
        if (this.leftChild === None) {
            this.leftChild = newNode;
        } else {
            this.leftChild.insert(newNode);
        }
    }
  }

  preorder = () => {
    answer[0].push(this.idx);
    if (this.leftChild !== None) {
        this.leftChild.preorder();
    }
    if (this.rightChild !== None) {
        this.rightChild.preorder();
    }
  }
}


function solution(nodeInfo) {

    for (let i=0; i<nodeInfo.length; i+=1) {
        nodeInfo[i].app
    }

}
