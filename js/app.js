'use strict'
let num = 1;


const form=document.getElementById('formid');
 const sec1=document.getElementById('firstsection')



function Employee (empId, name, dept ,level,salary)
{
    this.empId = empId;
    this.name = name;
    this.dept = dept;
    this.level = level;
    this.imagePath = `./assets/${this.name}.png`;
    this.salary=salary;
    
}

const handelSubmit= (event)  => {
    event.preventDefault();
    let Ename= event.target.Ename.value;
   
    let depte= event.target.depte.value;
    let lvl= event.target.lvl.value;
    
     console.log(`${Ename}`);
     console.log(`${depte}`);
     console.log(`${lvl}`);

     let id = pad(); 
     let salary = calcSalary(lvl);
    console.log(salary);
     let newEmployee = new Employee(id,Ename,depte,lvl,salary);
     newEmployee.render();
    
    
     

}

 Employee.prototype.render =function ()
 {
    
    let img = document.createElement('img');
         sec1.appendChild(img);
       img.setAttribute('src' ,this.imagePath);
       img.setAttribute('alt' ,this.name);


        let p=document.createElement('p');
        p.textContent= this.name;
        sec1.appendChild(p);
         console.log (`hi i am employee: ${this.name } `);
        
        let p2=document.createElement('p2');
        p2.textContent= this.dept;
        sec1.appendChild(p2);
         console.log (`dept is : ${this.dept } `);
       
        let p3=document.createElement('p3');
        p3.textContent= this.level;
        sec1.appendChild(p3);
        console.log (`level is : ${this.level } `);

      
         let p4=document.createElement('p4');
        p4.textContent=  this.salary;
         sec1.appendChild(p4);
        console.log ("salary is :" + this.salary);

    

        let p6=document.createElement('p6');
       p6.textContent= this.id;
        sec1.appendChild(p6);
        
 }
  function calcSalary(level)
 {let salary ;
    console.log(level);
     switch(level)
    { 
     case "Senior":
        {console.log("case seniore");
             salary = Math.floor(Math.random() * (2000 - 1500)) + 1500;
             break;
        }
       case ("Mid-senior"):
            {
                salary= Math.floor(Math.random() * (1500 - 1000)) + 1000;
                break;
            }
            case "Junior":
                {
                    salary=  Math.floor(Math.random() * (1000 - 500)) + 500;
                    break;
                }

            } 
            let tax =salary *0.075;
           console.log("salary - tax" + salary-tax);
            return (salary-tax);
}



    
 function pad(){
    var string = "" + num;
    var pad = "1000";
    let n;
     n = pad.substring(0, pad.length - string.length) + string;
    num++;
   console.log(n);
     return n;
 }
        





 





form.addEventListener('submit',handelSubmit);