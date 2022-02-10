'use strict'
let num = 1;

let allEmployees = [];
checkLocalAndPush();

const form=document.getElementById('formid');
 const sec1=document.getElementById('firstsection')

function Employee (empId, name, dept ,level,salary,imagePath)
{
    this.empId =empId ;
    this.name = name;
    this.dept = dept;
    this.level = level;
    this.imagePath = imagePath;
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

    let imagePath= event.target.image.value;
     let salary = calcSalary(lvl);
     let newEmployee = new Employee(pad(),Ename,depte,lvl,salary,imagePath);


     allEmployees.push(newEmployee);
     let jsonArray = toJSON();
     saveToLocalS(jsonArray);
     render(readFromLocalS());

}

function render (emplsFromLS)
 {
    firstsection.innerHTML = ' ';
    for (let i = 0; i < emplsFromLS.length; i++) {

        let img = document.createElement('img');
        firstsection.appendChild(img);
       img.setAttribute('src' ,emplsFromLS[i].imagePath);
       img.setAttribute('alt' ,emplsFromLS[i].name);
       
        let p=document.createElement('p');
        p.textContent= "Name: "+emplsFromLS[i].name;
        firstsection.appendChild(p);

         emplsFromLS[i].id;
         let p6=document.createElement('p6');
         p6.textContent= "ID : " +emplsFromLS[i].id;
         console.log(emplsFromLS[i]);
               
        let p2=document.createElement('p2');
        p2.textContent=  "departement: " +emplsFromLS[i].dept;
        firstsection.appendChild(p2);
       
        let p3=document.createElement('p3');
        p3.textContent= "level: "+emplsFromLS[i].level+"\n";
        firstsection.appendChild(p3);

         let p4=document.createElement('p4');
        p4.textContent= "salary: "+ emplsFromLS[i].salary;
        firstsection.appendChild(p4); 


      
    }
        
 }
  function calcSalary(level)
 {let salary ;
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
            console.log("salary befor " + salary)
            let tax =salary *0.075;
           console.log("salary - tax" + (salary-tax));
            return (salary-tax);
}



    
function pad (){
    var string = "" + num;
    var pad = "1000";
    let n;
     n = pad.substring(0, pad.length - string.length) + string;
    num++;
    return n;
 }
        
 function checkLocalAndPush() {
    if (allEmployees.length == 0) {
        let arr = readFromLocalS();
        if (arr.length != 0) {
            allEmployees = arr;
        }
    }
}

function readFromLocalS(){
    let jsonArr = localStorage.getItem('employees');
    let arr = JSON.parse(jsonArr);
    if(arr !== null){
        return arr;
    }else{
        return [];
    }
   
}


function saveToLocalS(jsonArray){  

        localStorage.setItem('employees',jsonArray)
}

function toJSON (){
    let jsonArray = JSON.stringify(allEmployees);
    return jsonArray;
}



formid.addEventListener('submit',handelSubmit);