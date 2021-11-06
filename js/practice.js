const arr = ['a', 'b', 'c']
// array의 첫요소와 마지막 요소 ------------------------------
// console.log(arr[0])
// console.log(arr[arr.length-1])

// loop -------------------------------------------------
// for (let i=0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for (let a of arr) {
//     console.log(a)
// }

// arr.forEach((e, index) => console.log(e, index))

// Push  -------------------------------------------------
arr.push('d', 'e', 'f')
arr.pop()
// 앞부분부터 추가, 삭제  -------------------------------------------------
arr.unshift('hi')
arr.shift()

// 특정위치 요소 삭제 -> number 지정 안하면 전체삭제, option은 요소 삭제 후 추가할 수 있음 -------------------------------------------------
// arr.splice(1, number, option)

// combine two array
// arr.concat(['a'])

// 검색

// array 요소 문자열로 합치기
console.log(arr)
console.log(arr.includes('f'))
const res = arr.join('')
console.log(res)


//