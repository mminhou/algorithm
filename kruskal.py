answer = [[], []]

class Node:
    def __init__(self, x, y, idx):
        self.x = x
        self.y = y
        self.idx = idx
        self.left_child = None
        self.right_child = None

    def insert(self, newNode):
        if newNode.x < self.x:
            if self.left_child == None:
                self.left_child = newNode
            else:
                self.left_child.insert(newNode)
        else:
            if self.right_child == None:
                self.right_child = newNode
            else:
                self.right_child.insert(newNode)

    def preOrder(self):
        global answer
        answer[0].append(self.idx)
        if self.left_child != None:
            self.left_child.preOrder()
        if self.right_child != None:
            self.right_child.preOrder()

    def postOrder(self):
        global answer
        if self.left_child != None:
            self.left_child.postOrder()
        if self.right_child != None:
            self.right_child.postOrder()
        answer[1].append(self.idx)


def solution(nodeinfo):
    global answer
    node = [val + [idx] for idx, val in enumerate(nodeinfo, start=1)]
    node.sort(key=lambda x: (-x[1], x[0]))

    rootNode = None
    for x, y, idx in node:
        newNode = Node(x, y, idx)
        if rootNode == None:
            rootNode = newNode
        else:
            rootNode.insert(newNode)

    rootNode.preOrder()
    rootNode.postOrder()
    return answer