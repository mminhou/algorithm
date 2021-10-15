# 5 0
# -7 -3 -2 5 8
n, m = map(int, input().split())
a = list(map(int, input().split()))
ans = 0
def go(index, sum):
    global ans
    if index == n:
        if sum == m:
            ans += 1
        return
    go(index+1, sum)
    go(index+1, sum+a[index])
if m == 0:
    ans -= 1
go(0, 0)
print(ans)