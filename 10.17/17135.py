# 5 5 1
# 0 0 0 0 0
# 0 0 0 0 0
# 0 0 0 0 0
# 0 0 0 0 0
# 1 1 1 1 1
from itertools import combinations
n, m, k = map(int, input().split())
a = [list(map(int, input().split())) for _ in range(n)]
towers = [i for i in combinations(range(m), 3)]
res = 0

def moving(b):
    for c in range(m):
        for r in range(n-1, -1, -1):
            if r == 0:
                b[r][c] = 0
                continue
            b[r][c] = b[r-1][c]

def findTarget(b, tower):
    ans = set()
    for t in tower:
        temp = []
        for r in range(n):
            for c in range(m):
                if b[r][c] == 1:
                    y, x = n, t
                    d = abs(y-r) + abs(x-c)
                    if d <= k:
                        temp.append((r, c, d))
        temp.sort(key=lambda x: (x[2], x[1]))
        if temp:
            ans.add((temp[0][0], temp[0][1]))
    return ans

for tower in towers:
    b = [[0]*m for _ in range(n)]
    for r in range(n):
        for c in range(m):
            b[r][c] = a[r][c]
    c = 0
    for i in range(n):
        delete = findTarget(b, tower)
        for item in delete:
            b[item[0]][item[1]] = 0
            c += 1
        moving(b)
    if c > res:
        res = c

print(res)









