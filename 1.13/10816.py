# Binary Search
# 10
# 6 3 2 10 10 10 -10 -10 7 3
# 8
# 10 9 -5 2 3 4 5 -10
n = int(input())
a = list(map(int, input().split()))
m = int(input())
b = list(map(int, input().split()))

a.sort()

def lowerIdx(target):
    st = 0
    en = len(a)
    while st < en:
        mid = (st+en)//2
        if a[mid] >= target: en = mid
        else: st = mid+1
    return st

def upperIdx(target):
    st = 0
    en = len(a)
    while st < en:
        mid = (st+en)//2
        if a[mid] > target: en = mid
        else: st = mid+1
    return st

for v in b:
    print(upperIdx(v) - lowerIdx(v), end=' ')