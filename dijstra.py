import heapq as hq

def dijkstra(graph, start):
    distances = {key: float('inf') for key in graph}
    distances[start] = 0
    q = []
    hq.heappush(q, [start, distances[start]])
    while q:
        curNode, curDis = hq.heappop(q)
        if distances[curNode] < curDis:
            continue
        for newNode, newDis in graph[curNode].items():
            distance = curDis + newDis
            if distances[newNode] > distance:
                distances[newNode] = distance
                hq.heappush(q, [newNode, distance])

    return distances
