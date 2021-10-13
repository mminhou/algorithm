def solution(n, s, a, b, fares):
    # 플로이드 와샬, 모든 정점으로부터의 최소 거리 구하고
    # ( 시작점 + x ) + ( x ~ A의 끝점) + (x ~ B의 끝점) 구해주면 될듯
    INF = 10987654321
    answer = INF

    # 초기화
    dist = [[ float('inf') for _ in range(n+1)] for _ in range(n+1) ]
    for i in range(1, n+1):
        dist[i][i] = 0
    for (st, ed, w) in fares:
        dist[st][ed] = w
        dist[ed][st] = w

    # 플로이드 와샬z
    # 경유지
    for k in range(1, n+1):
        # 출발지
        for i in range(1, n+1):
            # 목적지
            for j in range(1, n+1):
                if dist[i][j] > dist[i][k] + dist[k][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]

    # 답 구함
    for i in range(1, n+1):
        answer = min(answer, dist[s][i] + dist[i][a] + dist[i][b])
    return answer