# 2 2
# 2
# 1 2
# 2 1
from itertools import combinations
n, m = map(int, input().split())
stk = []
for _ in range(int(input())):
    stk.append(list(map(int, input().split())))

res = 0

for i in combinations(stk, 2):
    s1, s2 = i[0], i[1]
    if (s1[0]+s2[0] <= n and max(s1[1], s2[1]) <= m) or (s1[1]+s2[0] <= n and max(s1[0], s2[1]) <= m) or (s1[0]+s2[1] <= n and max(s1[1], s2[0]) <= m) or (s1[1]+s2[1] <= n and max(s1[0], s2[0]) <= m):
        t = s1[0]*s1[1] + s2[0]*s2[1]
        if t > res:
            res = t
    if (s1[0]+s2[0] <= m and max(s1[1], s2[1]) <= n) or (s1[1]+s2[0] <= m and max(s1[0], s2[1]) <= n) or (s1[0]+s2[1] <= m and max(s1[1], s2[0]) <= n) or (s1[1]+s2[1] <= m and max(s1[0], s2[0]) <= n):
        t = s1[0]*s1[1] + s2[0]*s2[1]
        if t > res:
            res = t

print(res)