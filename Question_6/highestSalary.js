const employees =[
    {
        name:"John Doe",
        age:30,
        department:"HR",
        salary:50000
    },
    {
        name:"Jane Smith",
        age:28,
        department:"Finance",
        salary:60000
    },
    {
        name:"Alex Johnson",
        age:35,
        department:"IT",
        salary:80000
    },
];

// this is the function of findHighest salary 

function highestSalaryEmployee(employees){
    let maxSalaryEmployee=employees[0];
    for(let employee of employees){
        if (employee.salary > maxSalaryEmployee.salary){
             maxSalaryEmployee = employee;
    }
}
console.log(maxSalaryEmployee);
// outPut :
// { name: 'Alex Johnson', age: 35, department: 'IT', salary: 80000 }
}

highestSalaryEmployee(employees); 


// this function is the Swap function


function swap(employees){
    let n=employees.length;
    let temp = employees[0]
    employees[0] = employees[n-1]
    employees[n-1] = temp

    console.log(employees);
    // output:
    // [
    //     { name: 'Alex Johnson', age: 35, department: 'IT', salary: 80000 },   
    //     { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 },
    //     { name: 'John Doe', age: 30, department: 'HR', salary: 50000 }        
    //   ]

}
swap(employees);




