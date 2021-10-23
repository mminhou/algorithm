function solution(a) {
    // let answer = Number.MAX_SAFE_INTEGER # 정수중 안전한 정수
    // let answer = Math.sqrt(16)
    // let answer = Math.min(...a)
    // let answer = Math.max(...a)
    // let answer = a.filter(e => e%2 == 1) // 홀수 구하기

    // for (let i of a) {
    //     if (String(i).indexOf('3')) {
    //         ans += 1
    //     }
    // }

    // forEach, map, filter, reduce
    a.filter(e => String(e).indexOf('3'))
    // a.forEach((v, i) => console.log(v, i))
    // let answer = a.map(e => String(e))
    // let answer = a.map(e => e*3)
    // let answer = a.reduce((res, e) => res+e)

    console.log(answer)
}
