class Student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "kolimunnesa school";
    }
}

const student1 = new Student(12, "Shuvo");
const student2 = new Student (22, "Mahia");
const student3 = new Student (29, "bappi");
console.log(student3);

// class name always starts with upperclass

class Parent {
    constructor(){
        this.fatherName = "Schwerznegger"
    }
}
class Child extends Parent {
    constructor (name) {
        super();
        this.name = name;
    }
    getFullName(){
        return this.name +" " + this.fatherName;
    }
}

const baby = new Child("Arnold");
const baby2 = new Child("tom");
console.log(baby.getFullName());
console.log(baby2.getFullName());