n, m = map(int, input().split())
a = [[False]*n for _ in range(n)]
degree = [0] * n
for _ in range(m):
    x, y = map(int,input().split())
    x -= 1
    y -= 1
    a[x][y] = a[y][x] = True
    degree[x] += 1
    degree[y] += 1

ans = -1

for i in range(n):
    for j in range(n):
        if a[i][j]:
            for k in range(n):
                if a[i][k] and a[j][k]:
                    d = degree[i] + degree[j] + degree[k] - 6
                    if ans == -1 or ans > d:
                        ans = d

print(ans)





# # 5 6
# # 1 2
# # 1 3
# # 2 3
# # 2 4
# # 3 4
# # 4 5
# from itertools import combinations
# n, m = map(int, input().split())
# d = {key: [] for key in range(n)}
# for _ in range(m):
#     u, v = map(int, input().split())
#     u -= 1
#     v -= 1
#     d[u].append(v)
#     d[v].append(u)
#
# ans = -1
# for i in combinations(range(n), 3):
#     a, b, c = i
#     if b in d[a] and c in d[a]:
#         if a in d[b] and c in d[b]:
#             if a in d[c] and b in d[c]:
#                 res = len(d[a]) + len(d[b]) + len(d[c]) - 6
#                 if ans == -1 or ans > res:
#                     ans = res
#
# print(ans)