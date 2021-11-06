function solution(arr, m) {
    let answer = []
    let temp = Array(m).fill(0)
    function permutations(index, n, m) {
        if (index == m) {
            answer.push(temp.slice())
            return
        }
        for (let i=0; i<n; i++) {
            temp[index] = arr[i]
            permutations(index+1, n, m)
        }
    }
    permutations(0, arr.length, m)
    console.log(answer)
}

function solution2(arr, m) {
    let answer = []
    let n = arr.length
    let temp = Array(m).fill(0)
    function combinations(index, n, m, src) {
        if (index == m) {
            answer.push(temp.slice())
            return
        }
        for (let i=src; i<n; i++) {
            temp[index] = arr[i]
            combinations(index+1, n, m, i+1)
        }
    }
    combinations(0, n, m, 0)
    console.log(answer)
}

function solution3(arr, m) {
    arr.sort((x, y)=>x-y)
    let answer = []
    let n = arr.length
    let temp = Array(m).fill(0)
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

function solution4(arr, m) {
    arr = Array.from(new Set(arr))
    arr.sort((x,y)=>x-y)
    let n = arr.length
    let answer = []
    let temp = Array(m).fill(0)
    function go(index, n, m) {
        if (index == m) {
            answer.push(temp.slice())
            return
        }
        for (let i=0; i<n; i++) {
            temp[index] = arr[i]
            go(index+1, n, m)
        }
    }
    go(0, n, m)
    console.log(answer)
}

function solution5(arr, m) {
    arr.sort((x, y)=>x-y)
    let n = arr.length
    let answer = []
    let temp = Array(m).fill(m)
    let check = Array(n).fill(false)
    function go(index, n, m, src) {
        if (index == m) {
            answer.push(temp.slice())
            return
        }
        for (let i=src; i<n; i++) {
            if (check[i]) continue
            check[i] = true
            temp[index] = arr[i]
            go(index+1, n, m, i+1)
            check[i] = false
        }
    }
    go(0, n, m, 0)
    console.log(answer)

}

// solution([3, 6, 9], 2)
// solution2([9, 8, 7, 1], 3)
// solution3([9, 7, 9, 1], 2)
// solution4([1, 1, 2, 2], 4)
solution5([9, 8, 7, 1], 2)