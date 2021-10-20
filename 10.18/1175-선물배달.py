# 2 3
# SCC
# ...
from collections import deque

n, m = map(int, input().split())
a = [list(input()) for _ in range(n)]
# 동 남 서 북
d = {0: (0, 1), 1: (1, 0), 2: (0, -1), 3: (-1, 0)}

def dfs(a, y, x, dir, cnt):
    q = deque()
    q.append((y, x, dir, cnt, 0))
    while q:
        y, x, dir, cnt, t = q.popleft()
        if cnt == 2:
            print(t)
            break
        for i in range(4):
            ay, ax = y+d[i][0], x+d[i][1]
            if a[ay][ax] == '#' or i == dir:
                continue
            if a[ay][ax] == 'C':
                q.append((ay, ax, i, cnt+1, t+1))

for r in range(n):
    for c in range(m):
        if a[r][c] == 'S':
            sy, sx = r, c

dfs(a, sy, sx, 0, 0)



