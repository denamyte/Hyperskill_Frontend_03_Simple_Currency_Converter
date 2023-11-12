// You can experiment here, it won’t be checked

let employee = {
    'name': 'Bruce Reese',
    'email': 'diam.sed@augue.org',
    'company': 'Velit Pellentesque Institute'
};

const employeeKeys = Object.keys(employee);
console.log(employeeKeys) // [ 'name', 'email', 'company' ]

employeeKeys.forEach((key) => console.log(key));

const employeeEntries = Object.entries(employee);

console.log(employeeEntries);
