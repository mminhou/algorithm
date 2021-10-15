# 33(562(71(9)))
import re
s = input()
s = re.findall('\d+', s)
init = ''
while s:
    if init:
        last = s.pop()
        init = len(last[:-1]) + int(last[-1]) * init
    else:
        init = len(s.pop())
print(init)