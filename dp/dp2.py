# 7
# 1 2 1 3 1 2 1

n = int(input())
a = list(map(int, input().split()))
d = [[-1]*(n) for _ in range(n)]
def go(i, j):
    if i==j:
        return 1
    elif i+1==j:
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

m = int(input())
for _ in range(m):
    src, dst = map(int, input().split())
    print(go(src-1, dst-1))


