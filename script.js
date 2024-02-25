const date = new Date();

let currDay = date.getDate();
let currMonth = date.getMonth() + 1;
let currYear = date.getFullYear();

let Days = document.querySelector(".userDay");
let Months = document.querySelector(".userMonth");
let Years = document.querySelector(".userYear");
let btn = document.querySelector(".icon");
let userD = document.querySelector(".numOfday");
let userM = document.querySelector(".numOfmonth");
let userY = document.querySelector(".numOfyear");



btn.addEventListener("click", (event) => {
    event.preventDefault();

    let Day = Days.value;
    let Month = Months.value;
    let Year = Years.value;

    const daysInMonth = new Date(Year, Month, 0).getDate();

    if ((Month < 1 || Month > 12) || (isNaN(Year) || Year.toString().length !== 4) || (currYear < Year) || (Day < 1 || Day > daysInMonth)) {
        alert("Enter valid Date");
        userY.innerText = "__";
        userM.innerText = "__";
        userD.innerText = "__";

    } else {

        let d3, m3, y3;

        if (currYear > Year) {
            y3 = currYear - Year;
        }

        if (currMonth > Month) {
            m3 = currMonth - Month;
        }
        else {
            y3--;
            m3 = 12 + currMonth - Month
        }
        if (currDay > Day) {
            d3 = currDay - Day;
        }
        else {
            m3--;
            d3 = currDay - Day + getDaysInMonth(Year, Month);
        }
        if (m3 < 0) {
            m3 = 11;
            y3--;
        }

        userY.innerText = y3;
        userM.innerText = m3;
        userD.innerText = d3;
    }

});

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}








