# 1 1 1 1 1
# 1 1 1 1 1
# 1 1 1 1 1
# 1 1 1 2 1
# 1 1 1 1 1
a = [list(input().split()) for _ in range(5)]
s = set()
def bfs(y, x, cur):
    global s
    dx = [1, -1, 0, 0]
    dy = [0, 0, 1, -1]
    if len(cur) == 6:
        s.add(cur)
        return
    for i in range(4):
        ay, ax = y+dy[i], x+dx[i]
        if 0<=ay<5 and 0<=ax<5:
            bfs(ay, ax, cur+a[ay][ax])
for r in range(5):
    for c in range(5):
        bfs(r, c, a[r][c])

print(len(s))