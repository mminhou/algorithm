function solution(required, plan) {
  while (plan.length > 0) {
    const target = plan.shift();
    if (required.includes(target)) {

    }
  }
}

// "6 10 21" 과 같이 주어졌을때, 조합으로 가장 큰수를 찾기
function solution2(numbers) {
  numbers.sort((num1, num2) => {
    (num2.toString() + num1.toString()) - (num1.toString() + num2.toString())
  });

  return numbers[0] === 0 ? "0" : numbers.join("");
}

// 문자열 압축
// ababcdcdababcdcd
function solution3(str) {

  for (let i=1; i<str.length/2; i+=1) {
    
  }

}

solution3("ababcdcdababcdcd");