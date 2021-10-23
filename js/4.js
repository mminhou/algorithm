function solution(str) {
    str = str.toLowerCase()
    n = str.length-1
    m = Math.floor(str.length/2)
    check = true
    for(let i=0; i<n; i++) {
        if (str[i] != str[n-i]) {
            check = false
            break
        }
    }
    if (check) console.log("Yes")
    else console.log("No")
}

function solution2(str) {
    let answer = 'Yes'
    str = str.toLowerCase().replace(/[^a-z]/g, '')
    if (str.split('').reverse().join('') !== str) answer = "No"
    console.log(answer)
}

function solution3(str) {
    str = str.replace(/[^0-9]/g, '')
    console.log(Number(str))
}

function solution4(str, c) {
    let answer = []
    let p = 1000;
    for (let i=0; i<str.length; i++) {
        if (str[i] === c) {
            p = 0
            answer.push(p)
        }
        else {
            p++
            answer.push(p)
        }
    }
    for (let i=str.length-1; i>=0; i--) {
        if (str[i] === c) p = 0;
        else {
            p++
            answer[i] = Math.min(answer[i], p)
        }
    }
    console.log(answer)
}

function solution5(str) {
    // let answer = ''
    // let init = ''
    // let cnt = 0
    // for (let i=0; i<str.length; i++) {
    //     if (init) {
    //         if (init === str[i]) {
    //             cnt++
    //         } else {
    //             if (cnt === 1) {
    //                 answer += init
    //             } else {
    //                 answer += `${init}${cnt}`
    //             }
    //             init = str[i]
    //             cnt = 1
    //         }
    //     } else {
    //         init += str[i]
    //         cnt = 1
    //     }
    // }
    // if (cnt === 1) {
    //     answer += init
    // } else {
    //     answer += `${init}${cnt}`
    // }
    let answer="";
    let cnt=1;
    str=str+" ";
    for(let i=0; i<str.length-1; i++){
        if(str[i]===str[i+1]) cnt++;
        else{
            answer+=str[i];
            if(cnt>1) answer+=String(cnt);
            cnt=1;
        }
    }
    console.log(answer)
}

// solution("gooG")
// solution2("found7, time: study; Yduts; emit, 7Dnuof")
// solution3("g0en2T0s8eSoft")
// solution4("teachermode", 'e')
solution5("KKHSSSSSSSE")