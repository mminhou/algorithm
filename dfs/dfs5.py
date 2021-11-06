# 6 2
# .#
# .#
# .#
# o#
# o#
# ##
import sys
sys.setrecursionlimit(1000000)
n, m = map(int, input().split())
a = [list(input()) for _ in range(n)]
dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]
def dfs(ay, ax, by, bx, cnt):
    if cnt > 10: return -1
    fallA, fallB = False, False

    if ax<0 or ax>=m or ay<0 or ay>=n: fallA = True
    if bx < 0 or bx >= m or by < 0 or by >= n: fallB = True
    if fallA and fallB:
        return -1
    if fallA or fallB:
        return cnt

    ans = -1

    for i in range(4):
        nay, nax = ay+dy[i], ax+dx[i]
        nby, nbx = by+dy[i], bx+dx[i]
        if 0<=nay<n and 0<=nax<m and a[nay][nax] == '#':
            nay, nax = ay, ax
        if 0<=nby<n and 0<=nbx<m and a[nby][nbx] == '#':
            nby, nbx = by, bx

        temp = dfs(nay, nax, nby, nbx, cnt+1)
        if temp == -1:
            continue
        if ans == -1 or temp < ans:
            ans = temp

    return ans

coin = []
for i in range(n):
    for j in range(m):
        if a[i][j] == 'o':
            coin.append((i, j))
            a[i][j] = '.'

print(dfs(coin[0][0], coin[0][1], coin[1][0], coin[1][1], 0))
