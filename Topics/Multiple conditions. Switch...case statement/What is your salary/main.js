const salaries = {
    "Bootstrap": 15,
    "Chrome Extension": 20,
    "React": 30,
};
const others = 25;

const getSalary = value => console.log(
    `$${salaries[value] || others} per hour`
);
