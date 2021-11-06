# 4
# 1 2
# 1 3
# 2 4
# 1 2 3 4
from collections import deque

n = int(input())
a = [[] for _ in range(n+1)]
for _ in range(n-1):
    u, v = map(int,input().split())
    u -= 1
    v -= 1
    a[u].append(v)
    a[v].append(u)

b = list(map(int, input().split()))
b = [x-1 for x in b]
order = [0]*n

for i in range(n):
    order[b[i]] = i

for i in range(n):
    a[i].sort(key= lambda x: order[x])

ans = []
check = [False]*n

def dfs(x):
    if check[x]:
        return
    ans.append(x)
    check[x] = True
    for i in a[x]:
        dfs(i)

dfs(0)

ok = True
for i in range(n):
    if ans[i] != b[i]:
        ok = False
print(1 if ok else 0)
