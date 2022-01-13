# Binary Search
# 5
# 4 1 5 2 3
# 5
# 1 3 7 9 5
n = int(input())
a = list(map(int, input().split()))
m = int(input())
b = list(map(int, input().split()))
a.sort()

def binarySearch(target):
    st = 0
    en = len(a)-1
    while st <= en:
        mid = (st+en)//2
        if a[mid] < target:
            st = mid+1
        elif a[mid] > target:
            en = mid-1
        else:
            return 1
    return 0

for v in b:
    if binarySearch(v):
        print("1")
    else:
        print("0")