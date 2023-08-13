//Array Methods

const students = ["Mayank", "Amit", "Suraj", "satyam", "Devansh"];

//length method--> for finding the length of array
console.log(students.length);
// let num = "50"
//toString -> use for converting array to string
console.log(students);
console.log(students.toString())
const arrToString = students.toString();
console.log(typeof(arrToString));

//join method use for converting array to string with desired seperator

console.log(students.join("1"))
console.log(students.join(" <=> "))

// pop method use for removing last element of the array

console.log(students)
// students.pop();
// students.pop();
// students.pop();
for(let i=0; i<3; i++){
    students.pop();
}

console.log(students);

//push method use for adding element to the array
students.push("Abhishek");
students.push("Subhash");
console.log(students);

// shift method is used for removing array elements from starting
students.shift()
console.log(students)

//unshift method is used for 
students.unshift("Roshan");
console.log(students)