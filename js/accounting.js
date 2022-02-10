'use strict'

const tableCell = document.getElementById('emptable');
let arr = [];

console.log(readFromLocalS());
function readFromLocalS() {
    let jsonArr = localStorage.getItem('employees');
    arr = JSON.parse(jsonArr);
    if (arr !== null) {
        return arr;
    } else {
        return [];
    }

}

function render() {
    numOfEmployees(readFromLocalS());

    const AdmRow = document.getElementById("adminstrationRaw");
    let row2 = document.createElement('td');
    AdmRow.appendChild(row2);
    row2.textContent = numOfEmployees(arr).adminsCount;

    let row2totalSalary = document.createElement('td');
    AdmRow.appendChild(row2totalSalary);
    row2totalSalary.textContent = totalSalary(arr).adminsTotalSalary;

    let row2AvglSalary = document.createElement('td');
    AdmRow.appendChild(row2AvglSalary);
    row2AvglSalary.textContent = avgSalary(arr).adminsAvgSalary;

    const markRow = document.getElementById("makitingRow");
    let row3 = document.createElement('td');
    markRow.appendChild(row3);
    row3.textContent = numOfEmployees(arr).marketCount;


    let row3totalSalary = document.createElement('td');
    markRow.appendChild(row3totalSalary);
    row3totalSalary.textContent = totalSalary(arr).marketTotalSalary;

    let row3AvgSalary = document.createElement('td');
    markRow.appendChild(row3AvgSalary);
    row3AvgSalary.textContent = avgSalary(arr).marketAvgSalary;

    const devRow = document.getElementById("developmentRow");
    let row4 = document.createElement('td');
    devRow.appendChild(row4);
    row4.textContent = numOfEmployees(arr).develCount;

    let row4totalSalary = document.createElement('td');
    devRow.appendChild(row4totalSalary);
    row4totalSalary.textContent = totalSalary(arr).develTotalSalary;

    let row4AvgSalary = document.createElement('td');
    devRow.appendChild(row4AvgSalary);
    row4AvgSalary.textContent = avgSalary(arr).develAvgSalary;

    const finRow = document.getElementById("financeRow");
    let row5 = document.createElement('td');
    finRow.appendChild(row5);
    row5.textContent = numOfEmployees(arr).financeCount;

    let row5totalSalary = document.createElement('td');
    finRow.appendChild(row5totalSalary);
    row5totalSalary.textContent = totalSalary(arr).financeTotalSalary;

    let row5AvgSalary = document.createElement('td');
    finRow.appendChild(row5AvgSalary);
    row5AvgSalary.textContent = avgSalary(arr).financeAvgSalary;

    const totalRow = document.getElementById("total");
    let row6 = document.createElement('td');
    totalRow.appendChild(row6);
    row6.textContent = "all Employees Number = " + numOfEmployees(arr).allEmpNum;

    let row6totalSalary = document.createElement('td');
    totalRow.appendChild(row6totalSalary);
    row6totalSalary.textContent = totalSalary(arr).allEmpTotalSalary;


    let row6AvgSalary = document.createElement('td');
    totalRow.appendChild(row6AvgSalary);
    row6AvgSalary.textContent = avgSalary(arr).allEmpAvgSalary;
}


function numOfEmployees(arr) {
    let adminsCount = 0;
    let marketCount = 0;
    let develCount = 0;
    let financeCount = 0;
    let allEmpNum = 0;
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i].dept) {

            case "administration":
                {
                    adminsCount++;
                    allEmpNum++;
                    break;

                }
            case "Marketing":
                {
                    marketCount++;
                    allEmpNum++;
                    break;

                }
            case "Development":
                {
                    develCount++;
                    allEmpNum++;
                    break;

                }
            case "Finance":
                {
                    financeCount++;
                    allEmpNum++;
                    break;

                }
        }
    }
    return {
        adminsCount,
        marketCount,
        develCount,
        financeCount,
        allEmpNum,
    }
}



function totalSalary(arr) {
    let adminsTotalSalary = 0;
    let marketTotalSalary = 0;
    let develTotalSalary = 0;
    let financeTotalSalary = 0;
    let allEmpTotalSalary = 0;
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i].dept) {

            case "administration":
                {
                    adminsTotalSalary = adminsTotalSalary + arr[i].salary;
                    allEmpTotalSalary = allEmpTotalSalary + arr[i].salary;
                    break;

                }
            case "Marketing":
                {
                    marketTotalSalary = marketTotalSalary + arr[i].salary;
                    allEmpTotalSalary = allEmpTotalSalary + arr[i].salary;
                    break;

                }
            case "Development":
                {
                    develTotalSalary = develTotalSalary + arr[i].salary;
                    allEmpTotalSalary = allEmpTotalSalary + arr[i].salary;
                    break;

                }
            case "Finance":
                {
                    financeTotalSalary = financeTotalSalary + arr[i].salary;
                    allEmpTotalSalary = allEmpTotalSalary + arr[i].salary;
                    break;

                }
        }
    }
    return {
        adminsTotalSalary,
        marketTotalSalary,
        develTotalSalary,
        financeTotalSalary,
        allEmpTotalSalary
    }
}

function avgSalary(arr) {
    let adminsTotalSalary = 0;
    let marketTotalSalary = 0;
    let develTotalSalary = 0;
    let financeTotalSalary = 0;
    let allEmpTotalSalary = 0;
    let adminsAvgSalary = 0;
    let marketAvgSalary = 0;
    let develAvgSalary = 0;
    let financeAvgSalary = 0;
    let allEmpAvgSalary = 0;

    let adminsCount = 0;
    let marketCount = 0;
    let develCount = 0;
    let financeCount = 0;
    let allEmpNum = 0;
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i].dept) {

            case "administration":
                {
                    adminsTotalSalary = adminsTotalSalary + arr[i].salary;
                    allEmpTotalSalary = allEmpTotalSalary + arr[i].salary;
                    adminsCount++;
                    allEmpNum++;
                    break;

                }
            case "Marketing":
                {
                    marketTotalSalary = marketTotalSalary + arr[i].salary;
                    allEmpTotalSalary = allEmpTotalSalary + arr[i].salary;
                    marketCount++;
                    allEmpNum++;
                    break;

                }
            case "Development":
                {
                    develTotalSalary = develTotalSalary + arr[i].salary;
                    allEmpTotalSalary = allEmpTotalSalary + arr[i].salary;
                    develCount++;
                    allEmpNum++;
                    break;

                }
            case "Finance":
                {
                    financeTotalSalary = financeTotalSalary + arr[i].salary;
                    allEmpTotalSalary = allEmpTotalSalary + arr[i].salary;
                    financeCount++;
                    allEmpNum++;
                    break;

                }
        }
    }

    adminsAvgSalary = adminsTotalSalary / adminsCount;
    marketAvgSalary = marketTotalSalary / marketCount;
    develAvgSalary = develTotalSalary / develCount;
    financeAvgSalary = financeTotalSalary / financeCount;
    allEmpAvgSalary = allEmpTotalSalary / allEmpNum;
    return {
        adminsAvgSalary,
        marketAvgSalary,
        develAvgSalary,
        financeAvgSalary,
        allEmpAvgSalary
    }


}
render();
