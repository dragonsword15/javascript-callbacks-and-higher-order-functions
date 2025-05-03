// Exercise #1: For Each Function

function forEach(array, operation) {
  for (let i = 0; i < array.length; i++) {
    newEmployeeSalaries.push(operation(array[i]))
  }
  return newEmployeeSalaries
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here
function addEmployeeBy5000(array) {
  return array + 5000
};

forEach(employeeSalaries, addEmployeeBy5000)
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
