def solution(n, k, cmd):
    node = {i: [i - 1, i + 1] for i in range(n)}
    node[0][0] = None
    node[n - 1][1] = None
    stk = []
    for c in cmd:
        if c == 'C':
            stk.append([k, node[k][0], node[k][1]])
            if node[k][1] is None:
                k = node[k][0]
                node[k][1] = None
            else:
                if node[k][0] is not None:
                    node[node[k][0]][1] = node[k][1]
                node[node[k][1]][0] = node[k][0]
                k = node[k][1]
        elif c == 'Z':
            idx, left, right = stk.pop()
            if left is not None:
                node[left][1] = idx
            if right is not None:
                node[right][0] = idx
            node[idx] = [left, right]
        else:
            action, param = c.split()
            if action == 'U':
                for _ in range(int(param)):
                    k = node[k][0]
            else:
                for _ in range(int(param)):
                    k = node[k][1]

    answer = ['O'] * n
    for idx, _, _ in stk:
        answer[idx] = 'X'
    return ''.join(answer)