# 10 15
# 5 1 3 5 10 7 4 9 2 8

n, m = map(int, input().split())
a = list(map(int, input().split()))
left, right, s = 0, 0, a[0]
l = n+1

while left <= right and right < n:
    if s < m:
        right += 1
        if right < n:
            s += a[right]
    elif s == m:
        l = min(l, right-left+1)
        right += 1
        if right < n:
            s += a[right]
    elif s > m:
        s -= a[left]
        l = min(l, right-left+1)
        left += 1
        if left > right and left < n:
            right = left
            s = a[left]

if l < n:
    ans = 0
print(ans)

