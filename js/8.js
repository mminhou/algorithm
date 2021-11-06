function solution(arr) {
    // 선택정렬
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    console.log(arr)
}

function solution2(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    console.log(arr)
}

function solution3(arr) {
    arr.sort()
    console.log(arr)
}

function solution4(n, m, arr) {
    let q = Array(n).fill(0)
    for (let i = 0; i < arr.length; i++) {
        if (q.includes(arr[i])) {
            q.splice(arr.indexOf(arr[i]), 1)
            q.unshift(arr[i])
        } else {
            q.pop()
            q.unshift(arr[i])
        }
    }
    console.log(q)
}

function solution5(arr) {
    let answer = []
    let sortArr = arr.slice()
    sortArr.sort((x, y) => x - y)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != sortArr[i]) answer.push(i + 1)
    }
    console.log(answer)
    // let left = undefined
    // let right = undefined
    // for (let i=1; i<arr.length-1; i++) {
    //     if (arr[i-1] > arr[i] || arr[i] >= arr[i+1]) {
    //         if (!left) {
    //             left = i
    //         } else {
    //             right = i
    //         }
    //     }
    // }
    // console.log(left+1, right+1)
}

function solution6(arr) {
    function sorting(a, b) {
        if (a[0] === b[0]) return a[1] - b[1]
        else return a[0] - b[0]
    }

    arr.sort((a, b) => sorting(a, b))
    console.log(arr)
}

function solution7(meeting) {
    let answer = 0;
    meeting.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        else return a[1] - b[1];
    })
    let et = 0;
    for (let x of meeting) {
        if (x[0] >= et) {
            answer++;
            et = x[1];
        }
    }
    return answer;
}

function solution8(arr) {
    // 와 이렇게 푸는거구나 시발..........ㅁㄴㅇ럼ㄴ이라ㅓㅁ니ㅏ러ㅣ마너리ㅏㅓㄴ미ㅏ러ㅣㅏ
    let res = Number.MIN_SAFE_INTEGER
    let answer = []
    for (let [s, e] of arr) {
        answer.push([s, 's'])
        answer.push([e, 'e'])
    }
    function sorting(a, b) {
        if (a[0] === b[0]) return a[1].charCodeAt()-b[1].charCodeAt()
         else return a[0]-b[0]
    }
    answer.sort((x, y)=>sorting(x, y))
    let cnt = 0
    for (let [i, j] of answer) {
        if (j === 's') cnt++
        else cnt--
        res = Math.max(res, cnt)
    }
    console.log(res)
}

function solution9(n, arr) {
    let answer;
    arr.sort((x,y)=> x-y)
    let lt = 0, rt = arr.length-1
    while (lt <= rt) {
        let mid = parseInt((lt+rt)/2)
        if (arr[mid] == n) {
            answer = mid+1
            break
        }
        else if (arr[mid] > n) rt = mid-1
        else lt = mid+1
    }
    console.log(answer)
}

function solution10(arr, n) {
    let answer = Number.MAX_SAFE_INTEGER
    let lt = Math.max(...arr), rt = arr.reduce((a, b) => a+b)
    while (lt <= rt) {
        let mid = parseInt((lt+rt)/2)
        let temp = 0
        let cnt = 1
        for (let a of arr) {
            if (temp+a <= mid) temp += a
            else {
                temp = a
                cnt += 1
            }
        }
        if (cnt <= n) {
            answer = mid
            rt = mid-1
        } else {
            lt = mid+1
        }
    }
    console.log(answer)
}

// solution([13, 5, 11, 7, 23, 15])
// solution2([13, 5, 11, 7, 23, 15])
// solution3([1, 2, 3, -3, -2, 5, 6, -6])
// solution4(5, 9, [1, 2, 3, 2, 6, 2, 3, 5, 7])
// solution5([120, 125, 152, 130, 135, 135, 143, 127, 160])
// solution5([120, 130, 150, 150, 130, 150])
// solution6([[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]])
// solution7([[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]])
// solution8([[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]])
// solution9(32, [23, 87, 65, 12, 57, 32, 99, 81])
solution10([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)