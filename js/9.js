function solution(n) {
    function dfs(k) {
        if (k == 0) return
        dfs(k-1)
        console.log(k)
    }
    dfs(3)
}

function solution2(num) {
    let answer = ''
    function dfs(n) {
        if (n == 0) return
        dfs(parseInt(n/2))
        answer += String(n%2)
    }
    dfs(num)
    console.log(answer)
}

function solution3(num) {
    let answer = ''
    function dfs(n) {
        if (n>7) return
        answer += n
        dfs(2*n)
        dfs(2*n+1)
    }
    dfs(1)
    console.log(answer)
}

function solution4(n, m) {
    let arr = Array.from({length: n}, (v, i)=>i+1)
    let temp = Array(m).fill(0)
    let cnt = 0
    function go(index, n, m) {
        if (index == m) {
            cnt++
            console.log(temp)
            return
        }
        for (let i=0; i<n; i++) {
            temp[index] = arr[i]
            go(index+1, n, m)
        }
    }
    go(0, n, m)
    console.log(cnt)
}

function solution5(arr, m) {
    let answer = []
    let n = arr.length
    let check = Array(n).fill(false)
    let temp = Array(m).fill(0)
    function go(index, n, m) {
        if (index == m) {
            answer.push(temp.slice())
            return
        }
        for (let i=0; i<n; i++) {
            if (check[i]) continue
            check[i] = true
            temp[index] = arr[i]
            go(index+1, n, m)
            check[i] = false
        }
    }
    go(0, n, m)
    console.log(answer)
}

function solution6(n) {
    function factorial(n) {
        if (n==1) return 1
        return n*factorial(n-1)
    }
    console.log(factorial(n))
}

function solution7(arr, m) {
    let n = arr.length
    let temp = Array(m).fill(0)
    let answer =[]
    function go(index, n, m, src) {
        if (index == m) {
            answer.push(temp.slice())
            return
        }
        for (let i=src; i<n; i++) {
            temp[index] = arr[i]
            go(index+1, n, m, i+1)
        }
    }
    go(0, n, m, 0)
    console.log(answer)

}

function solution8(arr, m, k) {
    let n = arr.length
    let temp = Array(m).fill(0)
    let cnt = 0
    function go(index, n, m, src) {
        if (index == m) {
            console.log(temp)
            if (temp.reduce((a, b)=>a+b) % k == 0) cnt++
            return
        }
        for (let i=src; i<n; i++) {
            temp[index] = arr[i]
            go(index+1, n, m, i+1)
        }
    }
    go(0, n, m, 0)
    console.log(cnt)
}

function solution9(arr) {
    let answer = []
    let n = arr.length
    for (let i=1; i<=arr.length; i++) {
        let temp = Array(i).fill(0)
        function go(index, n, m, src) {
            if (index == m) {
                answer.push(temp.slice())
                return
            }
            for (let j=src; j<n; j++) {
                temp[index] = arr[j]
                go(index+1, n, m, j+1)
            }
        }
        go(0, n, i, 0)
    }
    console.log(answer)
}

function solution10(arr) {
    let sum = arr.reduce((a, b) => a+b)
    let answer = "NO"
    function go(index, s) {
        if (index == arr.length) {
            if (s == sum) {
                answer = "YES"
            }
            return
        }
        go(index+1, s+arr[index])
        go(index+1, s)
    }
    go(0, 0)
    console.log(answer)
}

function solution11(arr, k) {
    let answer = Number.MIN_SAFE_INTEGER
    function go(index, s) {
        if (index == arr.length) {
            if (s <= k && answer < s) answer = s
            return
        }
        go(index+1, s+arr[index])
        go(index+1, s)
    }
    go(0, 0)
    console.log(answer)
}

function solution12(k, arr) {
    let score = Number.MIN_SAFE_INTEGER
    function go(index, s, t) {
        if (index == arr.length) {
            if (score < s) {
                score = s
            }
            return
        }
        go(index+1, s, t)
        if (t-arr[index][1] >= 0)
            go(index+1, s+arr[index][0], t-arr[index][1])
    }
    go(0, 0, k)
    console.log(score)
}

function solution13(arr, n) {
    let answer = 0
    arr = arr.reverse()
    function go(index, cnt, s) {
        if (index == arr.length) {
            answer = cnt
            return
        }
        while (s >= arr[index]) {
            cnt++
            s -= arr[index]
        }
        go(index+1, cnt, s)
    }
    go(0, 0, 15)
    console.log(answer)
}

function solution14(a, b) {
    function count(n, r) {
        if (n == r) {
            return 1
        }
        if (r == 1) {
            return n
        }
        return count(n-1, r-1) + count(n-1, r)
    }
    console.log(count(33, 19))

}

function solution15(n, m) {
    function go(depth) {
        if (depth == m) {
            return
        }
        
    }
}

// solution(3)
// solution2(11)
// solution3(1)
// solution4(3, 2)
// solution5([3, 6, 9], 2)
// solution6(5)
// solution7([1, 2, 3, 4], 2)
// solution8([2, 4, 5, 8, 12], 3, 6)
// solution9([1, 2, 3])
// solution10([1, 3, 5, 6, 7, 10])
// solution11([81, 58, 42, 33, 61], 259)
// solution12(20, [[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]])
// solution13([1, 2, 5], 15)
// solution14(33, 19)
solution15(4, 16)