# 6
# 1 2 3 4 1 6
# 7 8 9 1 4 2
# 2 3 4 1 1 3
# 6 6 6 6 9 4
# 9 1 9 1 9 5
# 1 1 1 1 9 9
from collections import deque
dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]

def bfs(d, x, y, k):
    n = len(d)
    d[x][y] = k
    q = deque()
    q.append((x, y))
    while q:
        x, y = q.popleft()
        for i in range(4):
            ax, ay = x+dx[i], y+dy[i]
            if 0<=ax<n and 0<=ay<n:
                if d[ax][ay] == 0:
                    d[ax][ay] = k
                    q.append((ax, ay))

def go(a, x, y, d1, d2):
    n = len(a)
    d = [[0]*n for _ in range(n)]
    for i in range(d1+1):
        d[x+i][y-i] = 5
        d[x+d2+i][y+d2-i] = 5
    for i in range(d2+1):
        d[x+i][y+i] = 5
        d[x+d1+i][y-d1+i] = 5
    for j in range(y-d1):
        d[x+d1][j] = 3
    for j in range(y+d2+1, n):
        d[x+d2][j] = 2
    for i in range(x):
        d[i][y] = 1
    for i in range(x+d1+d2+1, n):
        d[i][y-d1+d2] = 4

    bfs(d, 0, 0, 1)
    bfs(d, 0, n-1, 2)
    bfs(d, n-1, 0, 3)
    bfs(d, n-1, n-1, 4)
    cnt = [0]*5
    for r in range(n):
        for c in range(n):
            if d[r][c] == 0:
                d[r][c] = 5
            cnt[d[r][c]-1] += a[r][c]

    cnt.sort()
    ans = cnt[-1] - cnt[0]
    return ans

n = int(input())
a = [list(map(int, input().split())) for _ in range(n)]
ans = -1

for x in range(n):
    for y in range(n):
        for d1 in range(1, n):
            for d2 in range(1, n):
                if 0<=y-d1 and y+d2<n:
                    if x+d1+d2<n:
                        temp = go(a, x, y, d1, d2)
                        if ans == -1 or ans > temp:
                            ans = temp
print(ans)

