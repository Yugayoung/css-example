// 퀴즈!
let num = 2;
// num의 숫자가 짝수이면 👍🏻, 홀수라면 👎🏻을 출력하도록
// if
// ternary (삼항연산자)
if(num % 2 == 0) {
    console.log('👍🏻');
} else {
    console.log('👎🏻');
}

num  == (num % 2 == 0) ? console.log('👍🏻') : console.log('👎🏻');