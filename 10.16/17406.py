# 5 6 2
# 1 2 3 2 5 6
# 3 8 7 2 1 3
# 8 2 3 1 4 5
# 3 4 5 1 1 1
# 9 3 2 1 4 3
# 3 4 2
# 4 2 1
from itertools import permutations

def rotate(b, s, e):
    y, x = s
    l = e[0] - s[0]
    while l != 0:
        move = []
        move += [(0, 1) for _ in range(l)]
        move += [(1, 0) for _ in range(l)]
        move += [(0, -1) for _ in range(l)]
        move += [(-1, 0) for _ in range(l)]
        prev = b[y][x]
        for my, mx in move:
            y += my
            x += mx
            nxt = b[y][x]
            b[y][x] = prev
            prev = nxt
        l -= 2
        y += 1
        x += 1

n, m, k = map(int, input().split())
a = [list(map(int, input().split())) for _ in range(n)]
r = []
for _ in range(k):
    r.append(list(map(int, input().split())))
ans = float('inf')

for i in permutations(r):
    b = [[0] * len(a[0]) for _ in range(len(a))]
    for r in range(len(a)):
        for c in range(len(a[0])):
            b[r][c] = a[r][c]

    for j in i:
        start, end = (j[0]-j[2]-1, j[1]-j[2]-1), (j[0]+j[2]-1, j[1]+j[2]-1)
        rotate(b, start, end)

    for k in b:
        s = sum(k)
        if ans > s:
            ans = s

print(ans)