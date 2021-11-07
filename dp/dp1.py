# 10
# 1 2 0 1 3 2 1 5 4 2

n = int(input())
a = list(map(int, input().split()))
d = [-1]*n
d[0] = 0

# i-j <= A[j]
# j<i
# d[j] != -1

for i in range(1, n):
    for j in range(i):
        if d[j] != -1 and i-j <= a[j]:
            if d[i] == -1 or d[i] > d[j]+1:
                d[i] = d[j]+1
print(d[-1])