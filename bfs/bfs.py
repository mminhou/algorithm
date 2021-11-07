# 6 4 1
# 0100
# 1110
# 1000
# 0000
# 0111
# 0000
from collections import deque
q = deque()
n, m, k = map(int, input().split())
a = [list(map(int, input())) for _ in range(n)]
dist = [[[0]*(k+1) for _ in range(m)] for _ in range(n)]
dist[0][0][0] = 1

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]
q.append((0, 0, 0))
while q:
    y, x, c = q.popleft()
    for i in range(4):
        ay, ax = y+dy[i], x+dx[i]
        if 0<=ax<m and 0<=ay<n:
            if a[ay][ax] == 0 and dist[ay][ax][c] == 0:
                dist[ay][ax][c] = dist[y][x][c]+1
                q.append((ay, ax, c))
            if c < k and a[ay][ax] == 1 and dist[ay][ax][c+1] == 0:
                dist[ay][ax][c+1] = dist[y][x][c] + 1
                q.append((ay, ax, c+1))

ans = [i for i in dist[-1][-1] if i != 0]
if ans:
    print(min(ans))
else:
    print("-1")
