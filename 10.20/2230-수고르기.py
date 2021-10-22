n, m = map(int, input().split())
a = []
for _ in range(n):
    a.append(int(input()))

ans = []
left, right = 0, 0
while left <= right and right < len(a):
    if a[right] - a[left] < m:
        right += 1
    else:
        ans.append(a[right]-a[left])
        left += 1
        if left > right:
            left = right
            right = left
print(min(ans))
