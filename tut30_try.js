console.log("tut 30");

let proto = {
  slogan: function () {
    return `This is best company`;
  },

  changeName: function (newName) {
    this.name = newName;
  },
};

// This creates harry object
let harry = Object.create(proto);
harry.name = "Harry";
harry.role = "Programmer";
harry.changeName("Harry 2");
// console.log(harry);

// This also creates harry object
let harry1 = Object.create(proto, {
  name: { value: "Harry", writable: true },
  role: { value: "Programmer" },
});
harry1.changeName("Harry 2");
// console.log(harry1);

//Employee constructor
function Employee(name, salary, experience) {
  this.name = name;
  this.salary = salary;
  this.experience = experience;
}

//Slogan
Employee.prototype.slogan = function () {
  return `This is slogan from ${this.name} Employee`;
};

//creating object from this constructor

let harryObj = new Employee("Harry", 3000000, 10);

console.log(harryObj.slogan());

//programmer class constructor
function Programmer(name, salary, experience, language) {
  Employee.call(this, name, salary, experience);
  this.language = language;
}

// inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

//manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("Rohan", 30000000, 10, "Javascript");
console.log(rohan);
