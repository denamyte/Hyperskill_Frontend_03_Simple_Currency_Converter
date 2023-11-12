function employeeAndCompany(employees) {
    employees.forEach(entry => {
        const {name, company} = entry;
        console.log(`Employee ${name} works for ${company}`);
    });
}
