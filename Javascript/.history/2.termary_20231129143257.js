// 삼항 조건 연산자 Tenary Operator
// 조건식 ? 참인 경우 : 거짓인 경우
let fruit = 'orange';
if(fruit === 'apple') {
    console.log('🍎');
    let a = 1;
    console.log(a);
}  else {
    console.log('🥰');
}

fruit === 'apple' ? console.log('🍎') : console.log('🥰');

let emoji = fruit === 'apple' ? '🍎' : '🥰';
console.log(emoji);