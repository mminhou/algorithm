# 6 8
# ....*...
# ...**...
# ..*****.
# ...**...
# ....*...
# ........
n, m = map(int, input().split())
a = [list(input()) for _ in range(n)]
check = [[False]*m for _ in range(n)]
ans = []
for r in range(n):
    for c in range(m):
        if a[r][c] == '*':
            l = 0
            k = 1
            while 1:
                if r + k < n and r - k >= 0 and c + k < m and c - k >= 0:
                    if a[r + k][c] == '*' and a[r - k][c] == '*' and a[r][c + k] == '*' and a[r][c - k] == '*':
                        l = k
                    else:
                        break
                else:
                    break
                k += 1
            if l > 0:
                ans.append((r+1, c+1, l))
                check[r][c] = True
                for k in range(1, l+1):
                    check[r+k][c] = True
                    check[r-k][c] = True
                    check[r][c+k] = True
                    check[r][c-k] = True

for r in range(n):
    for c in range(m):
        if a[r][c] == '*' and check[r][c] == False:
            print(-1)
            exit()

print(len(ans))
for p in ans:
    if p[2] > 1:
        for j in range(p[2], 0, -1):
            print(str(p[0])+' '+str(p[1])+' '+str(j))
    else:
        print(' '.join(map(str,p)))



