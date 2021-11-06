function solution(s) {
    let stk = []
    for (let i of s) {
        if (i == '(') stk.push('(')
        else {
            if (stk.length) {
                stk.pop()
            } else {
                console.log("NO")
                break
            }
        }
    }
    if (stk.length) console.log("NO")
    else console.log("YES")
}

function solution2(s) {
    // 정규표현식 이용한 거
    // while (s.match(/\(/)) {
    //     s = s.replace(/\([A-Z]+\)/g, '')
    // }
    // console.log(s)
    let stk = []
    for (let x of s) {
        if (x === ')') {
            while (stk.pop() !== '(');
        } else stk.push(x)
    }
    console.log(stk.join(''))
}

function solution3(a, b) {
    let stk = []
    let cnt = 0
    for (let i of b) {
        for (let r=0; r<a.length; r++) {
            if (a[r][i-1] !== 0) {
                if (stk[stk.length-1] === a[r][i-1]) {
                    stk.pop()
                    cnt += 2
                }
                else stk.push(a[r][i-1])
                a[r][i-1] = 0
                break
            }
        }
    }
    console.log(cnt)
}

function solution4(s) {
    let stk = []
    for (let x of s) {
        if (isNaN(x)) {
            let n2 = stk.pop()
            let n1 = stk.pop()
            stk.push(eval(n1+x+n2))
        }
        else stk.push(x)
    }
    console.log(stk[0])
}

function solution5(s) {
    let stk = []
    let answer = 0
    for (let i=0; i<s.length; i++) {
        if (s[i] === '(') stk.push('(')
        else {
            stk.pop()
            if (s[i-1] === '(') answer += stk.length
            else answer++
        }
    }
    console.log(answer)
}

function solution6(n, m) {
    let arr = []
    // v => 유사배열의 value (초기엔 undefined로 설정) i 는 인덱스 번호
    let q = Array.from({length: n}, (v, i) => i+1)
    while (q.length != 1) {
        for (let i=1; i<m; i++) q.push(q.shift())
        q.shift()
    }
    console.log(q[0])
}

function solution7(a, b) {
    let answer = true
    let q = a.split('')
    for (let s of b) {
        if (q.includes(s)) {
            if (q.shift() != s) {
                answer = false
            }
        }
    }
    if (q.length > 0) answer = false
    console.log(answer)
}

// solution("(()(()))()")
// solution2("(A(BC)D)EF(G(H)(IJ)K)LM(N)")
// solution3([[0,0,0,0,0], [0,0,1,0,3], [0,2,5,0,1], [4,2,4,4,2], [3,5,1,3,1]], [1, 5, 3, 5, 1, 2, 1, 4])
// solution4("352+*9-")
// solution5("()(((()())(())()))(())")
// solution6(8, 3)
solution7("CBA", "CBDAGE")