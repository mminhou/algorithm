# Binary Search
# 4 11
# 802
# 743
# 457
# 539

n, m = map(int, input().split())
a = []
for _ in range(n):
    a.append(int(input()))

def solve(x):
    cnt = 0
    for v in a:
        cnt += v//x
    return cnt >= m

st = 1
en = 2**32 - 1

while st < en:
    mid = (st+en+1)//2
    if solve(mid): st = mid
    else: en = mid-1

print(st)




