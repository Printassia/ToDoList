//Wed, Feb 5 2019
function dates(){
    //Date
const date = new Date();
//Days of Week
const todaysDay = ["Mon", "Tue", "Wed", "Thu",
"Fri", "Sat", "Sun"];
//Get todays date
const day = date.getDay();

//Months
const months = ["Jan", "Feb", "Mar", "Apr", 
"May", "Jun", "Jul", "Aug", "Sep", "Oct", 
"Nov", "Dec"];
//Get months
const monthOfYear = date.getMonth();

//Number Day of Month 1-31
const dayOfMonth = date.getDate();

//Full Year
const year = date.getFullYear();
//Full Date
const printDate = todaysDay[day] + " " + months[monthOfYear] + " " + dayOfMonth + " " + year;
//DOM
document.getElementById('date').innerHTML = printDate;
console.log(printDate);
}
dates();


//Add text to activity input
document.getElementById('add-btn').addEventListener('click', function(){
const value = document.getElementById('activity').value;
if(value){
    console.log()
}
});

