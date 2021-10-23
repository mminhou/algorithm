function solution(n, arr) {
    let answer = Number.MIN_SAFE_INTEGER

    function sorting(a, b) {
        al = a.toString().split('').reduce((a,b)=> Number(a)+Number(b))
        bl = b.toString().split('').reduce((a, b)=> Number(a)+Number(b))
        if (al > bl) return 1
        else if (al === bl) {
            if ( a > b ) return 1
            else if ( a == b ) return 0
            else return -1
        } else return -1
    }

    arr.sort((a, b) => sorting(a, b))
    // console.log(arr[arr.length-1])
    console.log(arr.reverse()[0])
}

function solution2(arr) {
    let answer = [];
    function isPrime(n) {
        if (n===0 | n===1) return false
        if (n===2) return true
        for (let i=2; i<parseInt(Math.sqrt(n))+1; i++) {
            if (n%i === 0) return false
        }
        return true
    }
    for (let a of arr) {
        a = Number(a.toString().split('').reverse().join(''))
        if (isPrime(a)) answer.push(a)
    }
    console.log(answer)
}


// 다시 ############################################################################
function solution3(arr) {
    let n = arr.length
    let m = arr[0].length
}

function solution4(arr, budget) {
    let answer = Number.MIN_SAFE_INTEGER
    let sum = (x) => x.reduce((a, b) => a+b)
    arr.sort((a, b) => sum(a)-sum(b))
    for (let i=0; i<arr.length; i++) {
        let money = budget - arr[i][0]/2 - arr[i][1]
        let cnt = 1
        for (let j=0; j<arr.length; j++) {
            if (i === j) continue
            if (sum(arr[j]) > money) continue
            else {
                money -= sum(arr[j])
                cnt++
            }
        }
        answer = Math.max(answer, cnt)
    }
    console.log(answer)
}

function solution5(arr, k) {
    let answer = new Set()
    for (let i=0; i<arr.length-2; i++) {
        for (let j=i+1; j<arr.length-1; j++) {
            for (let t=j+1; t<arr.length; t++) {
                let sum = arr[i] + arr[j] + arr[t]
                answer.add(sum)
            }
        }
    }
    answer = Array.from(answer).sort((a, b) => b-a)
    console.log(answer[k-1])
}

// solution(7, [128, 460, 603, 40, 521, 137, 123])
// solution2([32, 55, 62, 20, 250, 370, 200, 30, 100])
// solution3([[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]])
// solution4([[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]], 28)
solution5([13, 15, 34, 23, 45, 65, 33, 11, 26, 42], 3)