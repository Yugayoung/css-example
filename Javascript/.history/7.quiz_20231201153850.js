// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배 값을 다 출력하고 싶음
// function iterate(max, action)

const add = (a) => {
    num = 0;
    for(let i=0; i<=a; i++) {
        num++;
        console.log(num);
    }
}

const double = (a) => {
    num = 0;

    for(let i=0; i<=a; i++) {
        num = num + 2;
        console.log(num);
    }
}

function iterate(max, action) {
    let result = action(a);
    return result;
}

iterate(5, add);
