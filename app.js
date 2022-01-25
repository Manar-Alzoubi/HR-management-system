
console.log("hi");
function Employee (empId, fullName, dept ,level)
{
    this.employeeId = empId;
    this.fullName = fullName;
    this.dept = dept;
    this.level = level;
    this.image = "";
    let salary ;

    console.log("hi constructor" +this.fullName);
    // console.log (this.name +"  "+ calcSalary())
    // document.write(this.fullName + "<br>");
    
    if (this.level == "senior")
    console.log(salary =Math.floor(Math.random() * (2000 - 1500)) + 1500);
    if (this.level == "Mid-senior")
    console.log(salary= Math.floor(Math.random() * (1500 - 1000)) + 1000);
    if (this.level == "junior")
    console.log(salary =Math.floor(Math.random() * (1000 - 500)) + 500);

    
    let tax = salary *7.5 / 100;
    salary = salary - tax;
    document.write("<p> Employee Name : " +this.fullName   + "</p> ");
    document.write("<p> Employee Salary"  +  salary  + "</p> ");
    // document.write(" salary after tax =       "+ salary ++"</p>" "<br>");
}

    // switch(this.level)
    // {
    // case "senior":
    //     {
    //         salary = Math.floor(Math.random() * (2000 - 1500)) + 1500;
    
    //     console.log("random sal   senior " + salary);
    //     break;
    // }
    // case ("Mid-senior"):
    //     {
    //         salary= Math.floor(Math.random() * (1500 - 1000)) + 1000;
    //         console.log("random sal      midsenior" + salary);
    //         break;
    //     }
    //     case "junior":
    //         {
    //             salary=  Math.floor(Math.random() * (1000 - 500)) + 500;
    //             console.log("random sal      junior" + salary);
    //             break;
    //         }

    //     } 
    //     break;
    // }
   

    



const emp1 = new Employee("1000","Ghazi Samer","Administration", "senior");
// emp1.calcSalary();
// this.calcSalary();
console.log("hi assign values");
// Employee.calcSalary();
 const emp2 = new Employee(1001,"Lana Ali","Finance", "senior");
// emp2.calcSalary();
const emp3 = new Employee(1002,"Tamara Ayoub","Marketing", "senior");
// emp3.calcSalary();
const emp4 = new Employee(1003,"Safi Waleed","Administration", "Mid-senior");
// emp4.calcSalary();
const emp5 = new Employee(1004,"Omar Zaid","Development", "senior");
// emp5.calcSalary();
const emp6 = new Employee(1005,"Rana Saleh","Development", "junior");
// emp6.calcSalary();
const emp7 = new Employee(1006,"Hadi Ahmad","Finance", "Mid-senior");
// emp7.calcSalary();

Employee.prototype.calcSalary = function ()
{
    console.log("hi calcsalary");
    switch(this.level)
    {
    case "senior":
        {
            salary = Math.floor(Math.random() * (2000 - 1500)) + 1500;
    
        console.log("random sal   senior ");
            break;
        }
        case ("Mid-senior"):
            {
                salary= Math.floor(Math.random() * (1500 - 1000)) + 1000;
                console.log("random sal      midsenior");
                break;
            }
            case "junior":
                {
                    salary=  Math.floor(Math.random() * (1000 - 500)) + 500;
                    console.log("random sal      junior");
                    break;
                }

            } 

            


}


