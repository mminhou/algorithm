from itertools import permutations
# 1234 3456
a, b = map(int, input().split())
c = -1
a = list(str(a))
for i in permutations(a):
    if i[0] == '0':
        continue
    n = int(''.join(i))
    if n < b:
        c = max(c, n)

print(c)
