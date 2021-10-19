# 380
n = int(input())
d = [500, 100, 50, 10, 5, 1]
target = 1000 - n
c = 0
i = 0
while target != 0:
    while target >= d[i]:
        target -= d[i]
        c += 1
    i += 1
print(c)



