# ababababa
# aba
import re
a = input()
b = input()
c = re.findall(b, a)
print(len(c))


a = input()
b = input()
cnt = 0
n = 0
while n <= len(a) - len(b):
    if a[n:n + len(b)] == b:
        cnt += 1
        n += len(b)
    else:
        n += 1
print(cnt)