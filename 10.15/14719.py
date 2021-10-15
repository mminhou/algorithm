# 4 8
# 3 1 2 3 4 1 1 2
n, m = map(int, input().split())
a = list(map(int, input().split()))
ans = 0

for i in range(len(a)):
    leftH = max(a[:i+1])
    rightH = max(a[i:])
    ans += min(leftH, rightH) - a[i]

print(ans)