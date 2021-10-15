# 9
# 3+8*7-9*2
n = int(input())
a = list(input())


def bfs(a):
    if len(a) == 1:
        print(a)
        return
    for i in range(len(a)):
        if a[i] in ('+', '-', '*'):
            print(a)
            res = str(eval(''.join(a[i-1:i+2])))
            bfs(a[:i-1]+[res]+a[i+2:])

bfs(a)