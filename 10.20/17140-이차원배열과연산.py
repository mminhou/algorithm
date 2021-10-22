# 1 2 2
# 1 2 1
# 2 1 3
# 3 3 3
from collections import Counter
r, c, k = map(int, input().split())
r -= 1
c -= 1
a = []
for _ in range(3):
    a.append(list(map(int, input().split())))

for cnt in range(101):
    if r < len(a) and c < len(a[0]) and a[r][c] == k:
        print(cnt)
        exit()

    transpose = False
    if len(a) < len(a[0]):
        transpose = True
        a = list(zip(*a))

    rlen, clen = len(a), len(a[0])
    temp = [[] for _ in range(rlen)]
    mlen = 0
    for i in range(min(rlen, 100)):
        res = [i for i in Counter(a[i]).items() if i[0] != 0]
        res.sort(key=lambda x: (x[1], x[0]))
        if mlen < len(res)*2:
            mlen = len(res)*2
        for re in res:
            temp[i].append(re[0])
            temp[i].append(re[1])
    for t in temp:
        if len(t) < mlen:
            t += [0]*(mlen-len(t))
    a = temp

    if transpose:
        a = list(zip(*a))

print(-1)