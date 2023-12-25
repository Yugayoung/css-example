// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한 달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employee {
    constructor(name, department, hoursPerMonth, payRate) {
        this.name = name;
        this.department = department;
        this.hoursPerMonth = hoursPerMonth;
        this.payRate = payRate;
    }
    calculatePay() {
        return this.hoursPerMonth * this.payRate;
    }
}

class FullTimeEmployee extends Employee {
    constructor(name, department, hoursPerMonth) {
        super(name, department, hoursPerMonth, 10000);
    }
}

class PartTimeEmployee extends Employee {
    constructor(name, department, hoursPerMonth) {
        super(name, department, hoursPerMonth, 8000);
    }
}

const ellie = new FullTimeEmployee('엘리', 's/w', 30);
const gayoung = new PartTimeEmployee('가영', 's/w', 20);
console.log(ellie.calculatePay());
console.log(bob.calculatePay());



