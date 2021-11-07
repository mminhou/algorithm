# 6 4
# 0100
# 1110
# 1000
# 0000
# 0111
# 0000
from collections import deque

# 벽 한개까지 부술수 있음

n, m = map(int, input().split())
a = [list(map(int, input())) for _ in range(n)]
q = deque()
d = [[[0]*2 for _ in range(m)] for _ in range(n)]
d[0][0][0] = 1
q.append((0, 0, 0))
dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]

while q:
    y, x, k = q.popleft()
    for i in range(4):
        ay, ax = y+dy[i], x+dx[i]
        if 0<=ax<m and 0<=ay<n:
            if a[ay][ax] == 0 and d[ay][ax][k] == 0:
                d[ay][ax][k] = d[y][x][k] + 1
                q.append((ay, ax, k))
            if k == 0  and a[ay][ax] == 1 and d[ay][ax][k+1] == 0:
                d[ay][ax][k+1] = d[y][x][k] + 1
                q.append((ay, ax, k+1))

if d[n-1][m-1][0] != 0  and d[n-1][m-1][1] != 0:
    print(min(d[n-1][m-1]))
elif d[n-1][m-1][0] != 0:
    print(d[n-1][m-1][0])
elif d[n-1][m-1][1] != 0:
    print(d[n-1][m-1][1])
else:
    print(-1)



