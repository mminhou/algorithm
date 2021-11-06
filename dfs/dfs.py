import sys
sys.setrecursionlimit(1000000)
answer = 0

def dfs(node,a,adj,visited):
    global answer
    for next_node in adj[node]:
        if not visited[next_node]:
            visited[next_node]=True
            temp = dfs(next_node,a,adj,visited)
            a[node] += temp
            answer += abs(temp)

    return a[node]

def solution(a, edges):
    global answer
    if sum(a): return -1

    adj = [[] for i in range(len(a))]
    visited = [False]*len(a)

    for edge in edges:
        u,v = edge
        adj[u].append(v)
        adj[v].append(u)

    dfs(0,a,adj,visited)
    return answer