// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한 달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Person {
    #name;
    #className;
    #time;
    constructor(name, className, time){
        this.#name = name;
        this.#className = className;
        this.#time = time;
    }

    increment = () => {
        let result = 0;
        result = (this.#time) * 10000;
    }
}

const person = new Person('정직원', '총무', 9);
person.increment(); //1
console.log(Person.result);

