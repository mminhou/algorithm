// 가중치 없는 Graph - 가장 멀리 떨어져있는 노드의 갯수 구하기
const dijkstra = (n, adj) => {
  const dist = Array(n + 1).fill(false);
  const queue = [];

  queue.push({ to: 1, cost: 0 });
  dist[1] = 0;

  while (queue.length !== 0) {
    let { to, cost } = queue.shift();

    adj[to].map((nextNode) => {
      const nextCost = cost + 1;
      if (dist[nextNode] === false) {
        dist[nextNode] = nextCost;
        queue.push({ to: nextNode, cost: nextCost });
      }
    });
  }

  const max = Math.max(...dist);
  return dist.filter((num) => {
    return num === max;
  }).length;
};

function solution(n, edge) {
  let answer = 0;
  let adj = Array.from({ length: n + 1 }, () => []);

  // 인접 리스트 생성
  edge.forEach((route) => {
    adj[route[0]].push(route[1]);
    adj[route[1]].push(route[0]);
  });

  // 다익스트라
  answer = dijkstra(n, adj);
  return answer;
}

/** -------------------------------------------------------------- */ 

// 가중치 있는 Graph - 시작노드에서 각 노드까지의 최단거리
function solution(N, road, K) {
  let answer = 0;
  const dist = new Array(N + 1).fill(Infinity);
  const adj = Array.from({ length: N + 1 }, () => []);
  const priorityQueue = [];

  road.map((route) => {
    adj[route[0]].push({
      to: route[1],
      cost: route[2],
    });
    adj[route[1]].push({
      to: route[0],
      cost: route[2],
    });
  });

  priorityQueue.push({ to: 1, cost: 0 });
  dist[1] = 0; // 출발 노드

  while (priorityQueue.length !== 0) {
    // cost 기준 오름차순
    priorityQueue.sort((a, b) => {
      return a.cost - b.cost;
    });

    const { to, cost } = priorityQueue.shift();
    adj[to].forEach((nextNode) => {
      if (dist[nextNode.to] > dist[to] + nextNode.cost) {
        dist[nextNode.to] = dist[to] + nextNode.cost;
        priorityQueue.push(nextNode);
      }
    });
  }

  while (priorityQueue.length !== 0) {
    priorityQueue.sort((a, b) => {
      return a.cost - b.cost;
    })
  }

  answer = dist.filter((num) => num <= K).length;
  return answer;
}
