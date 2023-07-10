const employees = new Array();
let isManager;
const offices = new Array();
let office;
let addEmp;
let officeName;
let search;
let list;
let x = 1;

// *******************************************DEFINE CLASSES*******************************************

// DEFINE SHARED METHODS BETWWEN Person & Employee Classes
const sharedMethods = {
  sleep(hours) {
    if (hours === 7) {
      prompt("happy");
    } else if (hours < 7) {
      prompt("tired");
    } else {
      prompt("lazy");
    }
  },
  eat(meals) {
    if (meals === 3) {
      prompt(`${100 * (this.healthRate / 100)} Health Rate`);
    } else if (meals === 2) {
      prompt(`${75 * (this.healthRate / 100)} Health Rate`);
    } else if (meals === 1) {
      prompt(`${50 * (this.healthRate / 100)} Health Rate`);
    }
  },
  buy(items) {
    this.money -= items * 10;
    prompt(` ITEM BUYED = ${items}, Money Left = ${this.money - 10}`);
  },
};

// DEFINING PERSON CLASS
class Person {
  constructor(fullName, money, sleepMode, healthRate) {
    this.fullName = fullName.toLowerCase();
    this.money = !money ? 0 : money;
    this.sleepMode =
      sleepMode === "happy" || sleepMode === "tired" || sleepMode === "lazy"
        ? sleepMode
        : "happy";
    this.healthRate = healthRate >= 0 && healthRate <= 100 ? healthRate : 100;
  }
}

Object.assign(Person.prototype, sharedMethods);

// DEFINING EMPLOYEE CLASS
class Employee extends Person {
  #salary;

  constructor(fullName, age, isManager, officeName, department) {
    super(fullName);
    this.id = Math.floor(Math.random() * 1000000000 + 3);
    this.workMood = "happy";
    this.#salary = 1000;
    this.isManager =
      isManager === true || isManager === false ? isManager : false;
    this.age = age;
    this.officeName = officeName.toLowerCase();
    this.department = department.toLowerCase();
    this.email = `${this.officeName}@${this.fullName}.com`;
  }
  get salary() {
    return this.#salary;
  }

  set salary(value) {
    this.#salary = value;
    if (value < 1000) return (this.#salary = 1000);
  }

  work(hours) {
    if (hours === 8) {
      prompt("happy");
    } else if (hours < 8) {
      prompt("tired");
    } else {
      prompt("lazy");
    }
  }
}

// DEFINING OFFICE CLASS
class Office {
  constructor(name, employees) {
    this.name = name.toLowerCase();
    this.employees = employees;
  }

  fire(empID) {
    employees.find((emp) => {
      if (emp.id === empID) {
        let firedEmp = employees.indexOf(emp);
        employees.splice(firedEmp, 1);
        document.write(`Employee Id: ${emp.id} is fired`);
      }
    });
  }

  getEmployee(empEmail) {
    employees.find((emp) => {
      if (emp.email === empEmail) {
        if (!emp.isManager) {
          document.write(
            `<h1>${this.name.toUpperCase()} </h1><p>Employee Name:${
              emp.fullName
            } <br> Salary :${emp.salary}<br>Employee Department:${
              emp.department
            }<br> Employee Id:${emp.id}<br>Employee Email:${
              emp.email
            }</p><button id='fire'>Fire employee byId</button>`
          );
          let fire = document.querySelectorAll("#fire");
          fire.forEach((b) => {
            b.addEventListener("click", (event) => this.fire(emp.id));
          });
        } else {
          document.write(
            `<h1>${this.name.toUpperCase()} </h1><p>Employee Name:${
              emp.fullName
            } <br>Employee Department:${emp.department}<br> Employee Id:${
              emp.id
            }<br>Employee Email:${
              emp.email
            }</p><button id='fire'>Fire employee byId</button>`
          );
          let fire = document.querySelectorAll("#fire");
          fire.forEach((b) => {
            b.addEventListener("click", (event) => this.fire(emp.id));
          });
        }
      }
    });
  }

  getAllEmployees() {
    employees.filter((emp) => {
      if (emp.officeName === this.name) {
        document.write(
          `<h1>${this.name.toUpperCase()} </h1><p>Employee Name:${
            emp.fullName
          } <br> is Manager:${
            emp.isManager === true ? true : false
          }<br>Employee Department:${emp.department}<br> Employee Id:${
            emp.id
          }<br>Employee Email:${
            emp.email
          }<br><button id='details'>Search byEmail</button></p> `
        );
        let details = document.querySelectorAll("#details");
        details.forEach((b) => {
          b.addEventListener("click", (event) => this.getEmployee(emp.email));
        });
      }
    });
  }

  getAllEmployeesByOfficeNAME(officename) {
    employees.filter((emp) => {
      if (emp.officeName === officename) {
        document.write(
          `<p>Employee Name:${emp.fullName} <br> is Manager:${
            emp.isManager === true ? true : false
          }<br>Employee Department:${emp.department}<br> Employee Id:${
            emp.id
          }<br>Employee Email:${
            emp.email
          }<br><button id='details'>Search byEmail</button></p> `
        );
        let details = document.querySelectorAll("#details");
        details.forEach((b) => {
          b.addEventListener("click", (event) => this.getEmployee(emp.email));
        });
      }
    });
  }
}

// *******************************************DEFINE FUNCTIONS*******************************************

function add() {
  addEmp = prompt("Do you want to add new employee press add?");
  if (addEmp === "add") {
    isManager = prompt("If he is a manager press mngr");
    if (isManager === "mngr") {
      isManager = true;
    } else {
      isManager = false;
    }
    let name = prompt("Enter Employee's Name").toLowerCase();
    let age = parseInt(prompt("Enter Employee's Age"));
    let officeName = prompt("Enter Employee's Office Name").toLowerCase();
    let department = prompt("Enter Employee's department Name").toLowerCase();
    const employee = new Employee(name, age, isManager, officeName, department);
    employees.push(employee);
    if (!office) {
      office = new Office(
        officeName,
        employees.filter((emp) => emp.officeName === officeName)
      );
      offices.push(office);
    } else if (office.name !== employee.officeName) {
      office = new Office(
        officeName,
        employees.filter((emp) => emp.officeName === officeName)
      );
      offices.push(office);
    } else {
      office.employees = employees.filter(
        (emp) => emp.officeName === officeName
      );
    }
  }
}

function searchAllEmployees() {
  for (const office of offices) {
    office.getAllEmployees();
  }
}

function searchAllEmployeesByOfficeName(officename) {
  for (const office of offices) {
    if (office.name === officename) {
      office.getAllEmployeesByOfficeNAME(officename);
    } else{
      console.log("notfound")
    }
  }
}

// *******************************************RUN PROGRAM*******************************************

do {
  add();
  if (!addEmp || addEmp.toLowerCase() === "q") break;
  search = confirm("search all employees?");
  if (search) {
    searchAllEmployees();
    break;
  } else {
    search = confirm("search employees by office name?");
    if (search) {
      let userOfficeName = prompt("Enter office name?").toLowerCase();
      searchAllEmployeesByOfficeName(userOfficeName);
      break;
    }
  }
} while (x);
