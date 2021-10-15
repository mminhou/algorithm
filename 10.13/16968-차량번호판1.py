# dd
fm = input()

def dfs(s, index, prev):
    if index == len(s):
        return 1
    start = ord('a') if s[index] == 'c' else ord('0')
    end = ord('z') if s[index] == 'c' else ord('9')
    ans = 0
    for i in range(start, end+1):
        if i != prev:
            ans += dfs(s, index+1, i)
    return ans

print(dfs(fm, 0, ' '))

