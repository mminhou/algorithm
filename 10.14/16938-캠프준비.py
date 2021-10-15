# 3 5 6 1
# 1 2 3
from itertools import combinations
n, l, r, x = map(int, input().split())
a = list(map(int, input().split()))
cnt = 0
for j in range(2, n+1):
    for i in combinations(a, j):
        print(i)
        if l <= sum(i) <= r and max(i)-min(i) >= x:
            # print(i)
            cnt += 1
print(cnt)