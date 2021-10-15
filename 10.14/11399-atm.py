# 5
# 3 1 4 3 2
n = int(input())
a = list(map(int, input().split()))
a.sort()
ans = 0
while a:
    ans += n*a.pop(0)
    n -= 1
print(ans)