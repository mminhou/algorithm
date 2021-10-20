# 7
# 1 2 1 3 1 2 1
# 4
# 1 3
# 2 5
# 3 3
# 5 7
n = int(input())
a = list(map(int, input().split()))
d = [[-1]*n for _ in range(n)]
m = int(input())

def go(i, j):
    if i == j:
        return 1
    if i+1 == j:
        if a[i] == a[j]:
            return 1
        else:
            return 0
    if d[i][j] != -1:
        return d[i][j]
    if a[i] != a[j]:
        d[i][j] = 0
    else:
        d[i][j] = go(i+1, j-1)
    return d[i][j]

for _ in range(m):
    i, j = map(int, input().split())
    res = go(i-1, j-1)
    print(res)
