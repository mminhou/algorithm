# 3     m까지 수중 1, 2, 3 으로 만들 수 있는 순서 다른거는 같은것으로 취급
# 4
# 7
# 10
n = int(input())
nums = [1, 2, 3]
for _ in range(n):
    m = int(input())
    d = [0]*(m+1)
    d[0] = 1
    for j in range(3):
        for i in range(1, m+1):
            if i-nums[j] >= 0:
                d[i] += d[i-nums[j]]

    print(d[m])