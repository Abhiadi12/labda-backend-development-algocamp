class Student {
  constructor(name, age, school) {
    this.name = name;
    this.age = age;
    this.school = school;
  }

  //overloading
  // SyntaxError: A class may only have one constructor
  // constructor() {

  // }

  display() {
    console.log("current object", this);
  }
}

const student1 = new Student("abhisek", 24, "PZS");
student1.display();

const student2 = new Student("pranjal", 25, "PZS");
student2.display();
