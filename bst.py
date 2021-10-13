import sys
sys.setrecursionlimit(100000)
answer = [[], []]

class Node:
    def __init__(self, x, y, idx):
        self.right_child = None
        self.left_child = None
        self.x = x
        self.y = y
        self.idx = idx

    def insert(self, newNode):
        nx, ny = newNode.x, newNode.y
        # 오른쪽으로 가야함
        if nx > self.x:
            if self.right_child == None:
                self.right_child = newNode
            else:
                self.right_child.insert(newNode)
        # 왼쪽으로 가야함
        else:
            if self.left_child == None:
                self.left_child = newNode
            else:
                self.left_child.insert(newNode)

    def preorder(self):
        global answer
        answer[0].append(self.idx)
        if self.left_child != None:
            self.left_child.preorder()
        if self.right_child != None:
            self.right_child.preorder()

    def postorder(self):
        global answer
        if self.left_child != None:
            self.left_child.postorder()
        if self.right_child != None:
            self.right_child.postorder()
        answer[1].append(self.idx)

def solution(nodeinfo):
    global answer
    # idx 순서 넣기
    for i in range(len(nodeinfo)):
        nodeinfo[i].append(i+1)
    # 높이에 따라 정렬
    nodeinfo = sorted(nodeinfo, key=lambda n: (-n[1], n[0]) )
    # 가장 위에 있는 노드
    rootNode = None

    for x, y, idx in nodeinfo:
        newNode = Node(x, y, idx)
        if rootNode == None:
            rootNode = newNode
        else:
            rootNode.insert(newNode)
    rootNode.preorder()
    rootNode.postorder()
    return answer