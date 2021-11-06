function solution(n, arr) {
    let g = Array.from({length: n+1}, ()=>[])
    for (let [src, dst] of arr) {
        g[src].push(dst)
    }
    let check = Array.from({length: n+1}, ()=>false)
    let ans = 0
    function go(index, route) {
        if (index === 5) {
            ans++
            return
        }
        for (let i of g[index]) {
            if (!check[i]) {
                check[i] = true
                go(i, route+[i])
                check[i] = false
            }
        }
    }
    check[1] = true
    go(1, [1])
    console.log(ans)
}

function solution2(arr) {
    let n = arr.length
    let m = arr[0].length
    let ans = 0
    let dx = [1, -1, 0, 0]
    let dy = [0, 0, 1, -1]
    let check = Array.from({length: n}, ()=>Array(m).fill(false))
    check[0][0] = true
    function go(y, x, py, px) {
        if (y == n-1 && x == m-1) {
            ans++
            return
        }
        for (let i=0; i<4; i++) {
            let ay = y+dy[i]
            let ax = x+dx[i]
            if (0<=ax && ax<m && 0<=ay && ay<n) {
                if (y == ay && x == ax) continue
                if (arr[ay][ax] == 0 && check[ay][ax] == false) {
                    check[ay][ax] = true
                    go(ay, ax, y, x)
                    check[ay][ax] = false
                }
            }
        }
    }
    go(0, 0, -1, -1)
    console.log(ans)
}

function solution3(arr) {
    let n = arr.length
    let m = arr[0].length
    let check = Array.from({length: n}, ()=>Array(m).fill(false))
    let cnt = 0
    let q = []
    let dx = [1, -1, 0, 0]
    let dy = [0, 0, 1, -1]
    for (let r=0; r<n; r++) {
        for (let c=0; c<m; c++) {
            if (arr[r][c] == 1 && check[r][c] == false) {
                check[r][c] = true
                cnt++
                q.push([r, c])
                while (q.length) {
                    let [y, x] = q.shift()
                    for (let i=0; i<4; i++) {
                        let ay = y+dy[i]
                        let ax = x+dx[i]
                        if (0<=ax && ax<m && 0<=ay && ay<n) {
                            if (arr[ay][ax] == 1 && check[ay][ax] == false) {
                                check[ay][ax] = true
                                q.push([ay, ax])
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(cnt)
}

function solution4(arr) {
    let n = arr.length
    let m = arr[0].length
    let check = Array.from({length: n}, ()=>Array(m).fill(false))
    let dx = [0, 0, 1, -1]
    let dy = [1, -1, 0, 0]
    let cnt = 0
    let q = []
    function go(y, x) {
        for (let i=0; i<4; i++) {
            let ay = y+dy[i]
            let ax = x+dx[i]
            if (0<=ax && ax<m && 0<=ay && ay<n) {
                if (arr[ay][ax] == 1 && check[ay][ax] == false) {
                    check[ay][ax] = true
                    go(ay, ax)
                }
            }
        }
    }
    for (let r=0; r<n; r++) {
        for (let c=0; c<m; c++) {
            if(arr[r][c] == 1 && check[r][c] == false) {
                check[r][c] = true
                cnt++
                go(r, c)
            }
        }
    }
    console.log(cnt)
}

function solution5(n, m) {
    let check = Array.from({length: 10001}, ()=>false)
    let answer;
    let move = [-1, 1, 5]
    let q = []
    q.push([n, 0])
    while (q.length) {
        let [x, cnt] = q.shift()
        if (x == m) {
            answer = cnt
            break
        }
        for (let i=0; i<move.length; i++) {
            let nxt = x+move[i]
            if (1<=nxt && nxt<=10000 && check[nxt] == false) {
                check[nxt] = true
                q.push([nxt, cnt+1])
            }
        }
    }
    console.log(answer)
}

// solution(5, [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]])
// solution2([[0, 0, 0, 0, 0, 0, 0],
//                      [0, 1, 1, 1, 1, 1, 0],
//                      [0, 0, 0, 1, 0, 0, 0],
//                      [1, 1, 0, 1, 0, 1, 1],
//                      [1, 1, 0, 0, 0, 0, 1],
//                      [1, 1, 0, 1, 1, 0, 0],
//                      [1, 0, 0, 0, 0, 0, 0]])

// solution3([[1, 1, 0, 0, 0, 1, 0],
//                      [0, 1, 1, 0, 1, 1, 0],
//                      [0, 1, 0, 0, 0, 0, 0],
//                      [0, 0, 0, 1, 0, 1, 1],
//                      [1, 1, 0, 1, 1, 0, 0],
//                      [1, 0, 0, 0, 1, 0, 0],
//                      [1, 0, 1, 0, 1, 0, 0]])

// solution4([[1, 1, 0, 0, 0, 1, 0],
//                      [0, 1, 1, 0, 1, 1, 0],
//                      [0, 1, 0, 0, 0, 0, 0],
//                      [0, 0, 0, 1, 0, 1, 1],
//                      [1, 1, 0, 1, 1, 0, 0],
//                      [1, 0, 0, 0, 1, 0, 0],
//                      [1, 0, 1, 0, 1, 0, 0]])

solution5(5, 14)