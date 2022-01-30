'use strict'
let employeeForm =document.getElementById("EmployeesForm")
let=document.getElementById("empls")
function Employee (empId, fullName, dept ,level,salary)
{
    this.employeeId = empId;
    this.fullName = fullName;
    this.dept = dept;
    this.level = level;
    this.imagePath = "./images/${this.name}.";
    this.salary=salary ;
}

Employee.prototype.render =function ()
{
    switch(this.level)
    { 
    case "senior":
        {
            this.salary = Math.floor(Math.random() * (2000 - 1500)) + 1500;
            break;
        }
        case ("Mid-senior"):
            {
                this.salary= Math.floor(Math.random() * (1500 - 1000)) + 1000;
                break;
            }
            case "junior":
                {
                    this.salary=  Math.floor(Math.random() * (1000 - 500)) + 500;
                    break;
                }

            } 
            this.generateId();
            this.netSalary();
            
            
}
Employee.prototype.netSalary =function ()
{
    let tax = this.salary *.075;
    
    this.salary = this.salary - tax;
    document.write( " Employee name :   ",this.fullName ,"<br>"," Net salary   ", this.salary ,"Id = ",this.employeeId);
     document.write("<br><br>");
}

Employee.prototype.generateId =function ()
{
    this.employeeId=  Math.floor(Math.random() * (9999 - 1000)) + 1000;

}


const emp1 = new Employee("1000","Ghazi Samer","Administration", "senior");
emp1.render();
console.log("hi assign values");
 const emp2 = new Employee(1001,"Lana Ali","Finance", "senior");
 emp2.render();
const emp3 = new Employee(1002,"Tamara Ayoub","Marketing", "senior");
emp3.render();
const emp4 = new Employee(1003,"Safi Waleed","Administration", "Mid-senior");
emp4.render();
const emp5 = new Employee(1004,"Omar Zaid","Development", "senior");
emp5.render();
const emp6 = new Employee(1005,"Rana Saleh","Development", "junior");
emp6.render();
const emp7 = new Employee(1006,"Hadi Ahmad","Finance", "Mid-senior");
emp7.render();
 
function handelsubmit()
{
    event.preventDefault();
    fullName=Event.target.fullName.value,
    Departement=Event.target.Departement.value,
    Administration=Event.target.level.value;
    consol.log('${this}');
}
employeeForm.addEventListener('submit',handelsubmit)