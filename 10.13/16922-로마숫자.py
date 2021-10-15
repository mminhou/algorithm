n = int(input())
check = [False]*(50*20+1)
ans = 0
for i in range(n+1):
    for j in range(n-i+1):
        for k in range(n-i-j+1):
            l = n-i-j-k
            check[i+j*5+k*10+l*50] = True
for c in check:
    if c:
        ans += 1

print(ans)
