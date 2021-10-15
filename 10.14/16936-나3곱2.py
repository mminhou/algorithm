# 6
# 4 8 6 3 12 9
from itertools import permutations
n = int(input())
a = list(map(int, input().split()))

for i in range(n):
    num = a[i]
    cnt = 0
    while num % 3 == 0:
        num //= 3
        cnt += 1
    a[i] = (-cnt, a[i])

a.sort()
ans = [x[1] for x in a]
print(*ans, sep=' ')



# TimeOut
# def go(a):
#     for i in range(len(a)-1):
#         if a[i] % 3 == 0  and a[i] // 3 == a[i+1]:
#             continue
#         elif a[i] * 2 == a[i+1]:
#             continue
#         else:
#             return 0
#     return a
#
# for i in permutations(a):
#     res = go(i)
#     if res:
#         print(' '.join(map(str, res)))
