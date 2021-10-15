import sys
dx = [0,1,0,-1]
dy = [1,0,-1,0]
n = int(input())
m = int(input())
a = [[0]*n for _ in range(n)]
x = (n-1)//2
y = (n-1)//2
a[x][y] = 1
num = 2

for size in range(3, n+1, 2):
    x += dx[3]
    y += dy[3]
    a[x][y] = num
    num += 1
    for k in range(4):
        loop = size - 1
        if k == 0:
            loop -= 1
        for i in range(loop):
            x += dx[k]
            y += dy[k]
            a[x][y] = num
            num += 1
x = 0
y = 0
for index, row in enumerate(a):
    print(' '.join(map(str,row)))
    if m in row:
        x = index+1
        y = row.index(m)+1
print(str(x) + " " + str(y))
