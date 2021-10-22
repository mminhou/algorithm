# 4 6 8
# 4 1 3 3 8
# 1 3 5 2 9
# 2 4 8 4 1
# 4 5 0 1 4
# 3 3 1 2 7
# 1 5 8 4 3
# 3 6 2 1 2
# 2 2 2 3 5
n, m, total = map(int, input().split())
a = [[0]*m for _ in range(n)]
ans = 0

for _ in range(total):
    r, c, s, d, z = map(int, input().split())
    if d == 1 or d == 2:
        s %= (2*n-2)
    else:
        s %= (2*m-2)
    a[r-1][c-1] = (s, d, z)

def move(a):
    b = [[0]*m for _ in range(n)]
    for r in range(n):
        for c in range(m):
            if a[r][c] != 0:
                speed, direction, size = a[r][c]
                if direction == 1:
                    y = r
                    init = -1
                    for _ in range(speed):
                        if y+init < 0 or y+init >= n:
                            direction = 3 - direction
                            init *= -1
                        y += init
                    if b[y][c]:
                        if b[y][c][2] < size:
                            b[y][c] = (speed, direction, size)
                    else:
                        b[y][c] = (speed, direction, size)
                elif direction == 2:
                    y = r
                    init = 1
                    for _ in range(speed):
                        if y+init < 0 or y+init >= n:
                            direction = 3 - direction
                            init *= -1
                        y += init
                    if b[y][c]:
                        if b[y][c][2] < size:
                            b[y][c] = (speed, direction, size)
                    else:
                        b[y][c] = (speed, direction, size)
                elif direction == 3:
                    x = c
                    init = 1
                    for _ in range(speed):
                        if x+init < 0 or x+init >= m:
                            direction = 7 - direction
                            init *= -1
                        x += init
                    if b[r][x]:
                        if b[r][x][2] < size:
                            b[r][x] = (speed, direction, size)
                    else:
                        b[r][x] = (speed, direction, size)
                elif direction == 4:
                    x = c
                    init = -1
                    for _ in range(speed):
                        if x+init < 0 or x+init >= m:
                            direction = 7 - direction
                            init *= -1
                        x += init
                    if b[r][x]:
                        if b[r][x][2] < size:
                            b[r][x] = (speed, direction, size)
                    else:
                        b[r][x] = (speed, direction, size)
    return b

for king in range(m):
    for r in range(n):
        if a[r][king] != 0:
            ans += a[r][king][2]
            a[r][king] = 0
            break
    a = move(a)

print(ans)