// 퀴즈!
// 1. 문자열의 모든 캐릭터를 하나씩 출력하라
const text = 'Hello World!';
for(let i = 0; i <= 12; i++) {
    console.log(text[i]);
}
/**
 * H
 * e
 * l
 * l
 * ..
 * !
 */

// 2. 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
const ids = 'user1, user2, user3, user4';
// ['user2', 'user2', 'user3', 'user4']

// 3. 1초에 한번씩 시계를 (날짜포함) 출력해보자
setInterval(function() {
    console.log(Date.parse('2022-12-17T03:24:00'));
  }, 1000);