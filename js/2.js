function solution(s) {
    s.replace('A', '#')
    // 자바스크립트 정규표현식 /패턴/, g를 붙이면 global하게
    console.log(s.replace(/A/g, '#'))
}

function solution2(s, r) {
    // let cnt = 0
    // for (let i of s) {
    //     if (i === r) cnt++
    // }
    // console.log(cnt)
    let answer = s.split(r)
    console.log(answer.length-1)
}

function solution3(s) {
    let cnt = 0;
    // 대문자 65 ~ 90, 소문자 97 ~ 122
    for (let i of s) {
        // let num = i.charCodeAt();
        // if (65 <= num && num <= 90) cnt++
        if (i === i.toUpperCase()) cnt++

    }
    console.log(cnt)
}

function solution4(s) {
    let answer = ''
    for (let x of s) {
        if (x === x.toLowerCase()) answer += x.toUpperCase()
        else answer += x
    }
    console.log(answer)
}

function solution5(s) {
    let answer = ''
    for (let x of s) {
        if (x === x.toUpperCase()) answer += x.toLowerCase()
        else answer += x.toUpperCase()
    }
    console.log(answer)
}

function solution6(arr) {
    let maxLen = Number.MIN_SAFE_INTEGER
    for (let a of arr) {
        if (a.length > maxLen) maxLen = a.length
    }
    console.log(maxLen)
}

function solution7(s) {
    // let test = Math.pow(2, 3)
    // let test = Math.round(3.2)
    // let test = Math.abs(-3)
    // let test = Math.ceil(3.2)
    // let test = Math.sqrt(25)
    // console.log(test)
    let mid = Math.floor(s.length/2)
    // if (s.length%2 === 1) {
    //     // mid ~ mid+1 까지
    //     console.log(s.substring(mid, mid+1))
    // } else {
    //     console.log(s.substring(mid-1, mid+1))
    // }
    // substr은 mid 부터 몇개를 뽑아낼지 결정
    if (s.length%2 === 1) console.log(s.substr(mid, 1))
    else console.log(s.substr(mid-1, 2))

    console.log(mid)
}

function solution8(s) {
    let a = new Set(s)
    // a.has(value), a.delete(value), a.size, a.add
    console.log(Array.from(a).join(''))
    // s.indexOf(찾고자하는 value, 몇번째부터 찾을지)

}

function solution9(arr) {
    // let answer = new Set(arr)
    // for (let x of Array.from(answer)) {
    //     console.log(x)
    // }
    let answer = arr.filter((v, i) =>{
        if (arr.indexOf(v) === i) return v
    })
    console.log(answer)

}

// solution('BANANA')
// solution2("COMPUTERPROGRAMMING", 'R')
// solution3("KoreaTimeGood")
// solution4("ItisTimeToStudy")
// solution5("StuDY")
// solution6(["teacher", "time", "student", "beautiful", "good"])
// solution7("study")

solution9(["good", "time", "good", "time", "student"])