# 4
# 24 21 14 10
n = int(input())
a = list(map(int, input().split()))
d = [-1, 0, 1]
check = True
ans = -1
for i in d:
    for j in d:
        change = 0
        if i != 0: change += 1
        if j != 0: change += 1
        a[0] = a[0]+i
        diff = (a[1]+j) - a[0]
        check = True
        an = a[0] + diff
        for k in range(2, n):
            an += diff
            if an == a[k]: continue
            if an == a[k]-1: change += 1
            elif an == a[k]+1: change += 1
            else:
                check = False
                break
        if check:
            if ans == -1 or ans > change:
                ans = change

print(ans)
