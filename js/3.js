function solution(arr) {
    // for (let i=0; i<arr.length; i++) {
    //     if (i === 0) {
    //         console.log(arr[i])
    //         continue
    //     }
    //     if (arr[i] > arr[i-1]) console.log(arr[i])
    // }
    let answer = [];
    answer.push(arr[0])
    for (let i=1; i<arr.length; i++) {
        if (arr[i] > arr[i-1]) answer.push(arr[i])
    }
    console.log(answer)
}

function solution2(arr) {
    // let answer = [arr.shift()]
    let cnt = 1
    let maxVal = arr.shift()
    for (let a of arr) {
        // if (answer[answer.length-1] >= a) continue
        if (maxVal >= a) continue
        else {
            maxVal = a
            cnt++
        }
    }
    // console.log(answer.length)
    console.log(cnt)
}

function solution3(a, b) {
    let answer = ''
    // 1 가위 2 바위 3 보
    for (let i=0; i<a.length; i++) {
        if (a[i] == b[i]) answer += 'D'
        else if (a[i] === 1 & b[i] === 3) answer += 'A'
        else if (a[i] === 2 & b[i] === 1) answer += 'A'
        else if (a[i] === 3 & b[i] === 2) answer += 'A'
        else answer += 'B'
    }
    console.log(answer)
}

function solution4(arr) {
    let answer = 0;
    let cnt = 0;
    for (let a of arr) {
        if (a === 1) {
            cnt++
            answer += cnt
        } else {
            cnt = 0
        }
    }
    console.log(answer)
}

function solution5(arr) {
    let n = arr.length;
    let answer=Array.from({length:n}, ()=>1);
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            if (arr[j]>arr[i]) answer[i]++
        }
    }
    console.log(answer)
}

function solution6(arr) {
    let n = arr.length
    let rs = Array.from({length: n}, () => 0)
    let cs = Array.from({length: n}, () => 0)
    let ds = Array.from({length: 2}, () => 0)
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            rs[i] += arr[i][j]
            cs[j] += arr[i][j]
            if (i === j) {
                ds[0] += arr[i][j]
            }
            if (i+j === n-1) {
                ds[1] += arr[i][j]
            }
        }
    }
    console.log(Math.max(Math.max(...rs), Math.max(...cs), Math.max(...ds)))
}

function solution7(arr) {
    let n = arr.length
    let m = arr[0].length
    let cnt = 0
    let dx = [1, -1, 0, 0]
    let dy = [0, 0, 1, -1]
    for (let r=0; r<n; r++) {
        for (let c=0; c<m; c++) {
            let check = true
            for (let i=0; i<4; i++) {
                let ay = r+dy[i]
                let ax = c+dx[i]
                if (0<=ay & ay<n & 0<=ax & ax<m) {
                    if (arr[r][c] <= arr[ay][ax]) {
                        check = false
                        break
                    }
                }
            }
            if (check) {
                cnt++
            }
        }
    }
    console.log(cnt)
}

// solution([7, 3, 9, 5, 6, 12])
// solution2([130, 135, 148, 140, 145, 150, 150, 153])
// solution3([2, 3, 3, 1, 3], [1, 1, 2, 2, 3])
// solution4([1, 0, 1, 1, 1, 0, 0, 1, 1, 0])
// solution5([87, 89, 92, 100, 76])
// solution6([[10, 13, 10, 12, 15], [12, 39, 30, 23, 11], [11, 25, 50, 53, 15], [19, 27, 29, 37, 27], [19, 13, 30, 13, 19]])
solution7([[5, 3, 7, 2, 3], [3, 7, 1, 6, 1], [7, 2, 5, 3, 4], [4, 3, 6, 4, 1], [8, 7, 3, 5, 2]])