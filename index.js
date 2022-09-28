const employee = {
    name: 'John',
    streetAddress: '10th St',
}

function updateEmployeeWithKeyAndValue(employee,name,Sam){
    const updatedEmployee = {...employee}
    updatedEmployee[name] = Sam
    return updatedEmployee
}

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

function destructivelyUpdateEmployeeWithKeyAndValue(employee,name,Sam){
    employee[name] = Sam
    return employee
}

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

  function deleteFromEmployeeByKey(employee,name,Sam){
    const newEmployee = {...employee}
    newEmployee[name] = Sam
    delete newEmployee.name
    return newEmployee
  }

  beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

function destructivelyDeleteFromEmployeeByKey(employee,name,Sam){
    delete employee.name
    return employee
}