# 2 3
# SCC
# ...
from collections import deque

n, m = map(int, input().split())
a = [list(input()) for _ in range(n)]
d = [[[[-1] * 4 for k in range(4)] for j in range(m)] for i in range(n)]
dy = [-1, 1, 0, 0]
dx = [0, 0, 1, -1]
q = deque()
y1, x1, y2, x2 = -1, -1, -1, -1
ans = -1

for r in range(n):
    for c in range(m):
        if a[r][c] == 'S':
            for k in range(4):
                q.append((r, c, k, 0))
                d[r][c][k][0] = 0
        elif a[r][c] == 'C':
            if x1 == -1:
                y1, x1 = r, c
            else:
                y2, x2 = r, c

while q:
    y, x, direction, s = q.popleft()
    if s == 3:
        ans = d[y][x][direction][s]
        break
    for k in range(4):
        if direction == k:
            continue
        ny, nx = y+dy[k], x+dx[k]
        if 0<=nx<m and 0<=ny<n:
            if a[ny][nx] != '#':
                ns = s
                if a[ny][nx] == 'C':
                    if nx == x1 and ny == y1:
                        ns |= 1
                    else:
                        ns |= 2

                if d[ny][nx][k][ns] == -1:
                    d[ny][nx][k][ns] = d[y][x][direction][s] + 1
                    q.append((ny, nx, k, ns))

print(ans)


