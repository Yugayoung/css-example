// 접근자 프로퍼티(Accessor Property)
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

    }
    get fullName() {
        return `${this.lastName} ${this.firstName}`;
    }
}

const Student = new Student('수지', '김');
student.firstName = '안나';
console.log(student.firstName);
console.log(student.fullName);