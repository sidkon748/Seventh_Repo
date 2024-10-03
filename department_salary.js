// Task 1
// Create a Department Structure
const company = {
    departments: [
        {
            departmentName: 'Engineering',
            employees: [
                {
                    name: 'Alice',
                    salary: 100000,
                    subordinates: [
                        {
                            name: 'Bob',
                            salary: 80000,
                            subordinates: [
                                {
                                    name: 'Charlie',
                                    salary: 60000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'David',
                    salary: 90000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'Sales',
            employees: [
                {
                    name: 'Eve',
                    salary: 85000,
                    subordinates: [
                        {
                            name: 'Frank',
                            salary: 70000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Grace',
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
};

// Task 2
// Create a Recursive Function to Calculate Total Salary for a Department
function calculateDepartmentSalary(employees) {
    let total = 0;

    employees.forEach(employee => {
        total += employee.salary; // Add salary of employee to total
        if (employee.subordinates && employee.subordinates.length > 0) {
            total += calculateDepartmentSalary(employee.subordinates); // Recursively add subordinates' salaries
        }
    });

    return total;
}

// Total salaries for Engineering & Sales departments
const totalSalariesEngineering = calculateDepartmentSalary(company.departments[0].employees);
console.log(`Engineering Department Total Salaries: $${totalSalariesEngineering}`);// Logs total salary for engineering department

const totalSalariesSales = calculateDepartmentSalary(company.departments[1].employees);
console.log(`Sales Department Total Salaries: $${totalSalariesSales}`);// Logs total salary for sales department