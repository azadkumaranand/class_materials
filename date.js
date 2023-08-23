let date = new Date();
// console.log(typeof(date.toString()));
// console.log(date.toString());

//getFullYear method use for getting year of time

const year = date.getFullYear();
const Month = date.getMonth();
const Today1Date = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const Day = date.getDay();
// console.log(Day);
let Today1;
if(Day === 0){
    Today1 = "Sunday"
    console.log("Sunday");
}else if(Day === 1){
    Today1 = "Monday"
    console.log("Monday");
}else if(Day === 2){
    Today1 = "Tuesday"
    console.log("Tuesday")
}else if(Day === 3){
    console.log("Wednesday")
}else if(Day === 4){
    console.log("Thruday")
}else if(Day === 5){
    console.log("Friday")
}else if(Day === 6){
    console.log("Saturday")
}
console.log(`Today1 Date is : ${Today1}/${Month+1}/${year}`);
console.log(`Time: ${hours}:${minutes}`);

//19/8/2023
//8/19/2023