from collections import deque
n, m = map(int, input().split())
a = [list(input()) for _ in range(n)]
visited = [[False]*m for _ in range(n)]
dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]
q = deque()

def dfs(y, x, py, px, target):
    if visited[y][x]:
        return True
    visited[y][x] = True
    for i in range(4):
        ay, ax = y+dy[i], x+dx[i]
        if 0<=ax<m and 0<=ay<n:
            if (ay, ax) != (py, px) and a[ay][ax] == target:
                if dfs(ay, ax, y, x, target):
                    return True
    return False

for r in range(n):
    for c in range(m):
        if visited[r][c] == False:
            ok = dfs(r, c, -1, -1, a[r][c])
            if ok:
                print("Yes")
                exit()
print("No")


# 3 4
# AAAA
# ABCA
# AAAA