function solution(a, b) {
    let answer = a.concat(b)
    answer.sort((a, b) => a-b)
    console.log(answer)

}

function solution2(a, b) {
    let answer = []
    a.sort((x, y) => x-y)
    b.sort((x, y) => x-y)
    let p1 = 0
    let p2 = 0
    while (p1 < a.length && p2 < b.length) {
        if (a[p1] == b[p2]) {
            answer.push(a[p1++])
            p2++
        } else if (a[p1] < b[p2]) {
            p1++
        } else {
            p2++
        }
    }
    console.log(answer)
}

function solution3(arr, n) {
    let cnt = 0
    let left = 0
    let right = 0
    let init = arr[0]
    while (left <= right && right < arr.length) {
        if (init < n) {
            right++
            init += arr[right]
        } else if (init == n) {
            cnt++
            right++
            init += arr[right]
        } else if (init > n) {
            init -= arr[left]
            left++
        }
    }
    console.log(cnt)
}

function solution4(arr, n) {
    let ans = 0
    let left = 0, right = 0
    let init = arr[0]
    // let sum = a => a.reduce((x, y) => x+y)
    while (left <= right && left < arr.length) {
        if (init <= n) {
            ans++
            right++
            init += arr[right]
        } else {
            left++
            right = left
            init = arr[right]
        }
    }
    console.log(ans)
}

function solution5(arr, n) {
    let m = Number.MIN_SAFE_INTEGER
    let sum = a => a.reduce((a, b)=>a+b)
    for (let i=0; i<arr.length-3; i++) {
        let t = sum(arr.slice(i, i+3))
        if (t > m) m = t
    }
    console.log(m)
}

function solution6(str) {
    let s = new Set(str)
    let m = new Map()
    for (let i of s) {
        // 패턴을 변수처럼 쓰고싶을때는 RegExp 사용하고 flag는 글로벌 찾기 이런 플래그임
        const regex = new RegExp(`${i}`, 'g')
        let temp = str.match(regex)
        m.set(i, temp.length)
    }
    let max = Number.MIN_SAFE_INTEGER
    let answer;
    for (let [key, val] of m) {
        if (val > max) {
            max = val
            answer = key
        }
    }
    console.log(answer)
}

function solution7(a, b) {

}
// solution([1, 3, 5], [2, 3, 6, 7, 9])
// solution2([1, 3, 9, 5, 2], [3, 2, 5, 7, 8])
// solution3([1, 2, 1, 3, 1, 1, 1, 2], 6)
// solution4([1, 3, 1, 2, 3], 5)
// solution5([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3)
// solution6("BACBACCACCBDEDE")
solution7("AbaAeCe", "baeeACA")