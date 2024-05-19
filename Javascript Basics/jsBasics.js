                                // Javascript Basics req for "REACT"

// Number(value) - Number function is used to convert the data stored in value variable into Number data-type.

//object creation
const persons = [
  {
    id: 1,
    name: "aaron",
    department: "computer science",
    salary: 20000,
    hobbies: ["cycling", "gaming"],
  },
  {
    id: 2,
    name: "ganesh",
    department: "computer science",
    salary: 30000,
    hobbies: ["riding", "swimming"],
  },
  {
    id: 3,
    name: "avinash",
    department: "computer science",
    salary: 40000,
    hobbies: ["singing", "sketching"],
  },
];

//by this function will get entire data
function getPersons(id) {
  return persons.find((d) => d.id === id);
}
//   console.log(getPersons(2))

const Data = getPersons(2);

// let dept=Data.department;
// let id=Data.id;
// let Name=Data.name;

const { id, name, department, hobbies, ...other } = Data; // Destructuring Syntax    -----  IMPORTANT   &  ... rest operator to get rest element

console.log(id, name, department, other);

const Hobbiess = [...hobbies, "dancing"]; // ... spread operator used for adding existing elem and new elem
console.log(Hobbiess);



const summary = `my name is ${name} and department is ${department}`; //template literal
console.log(summary);



const res = id < 5 ? "less than 5" : "more than 5"; //ternary operator
console.log("the id number is " + res);




//Arrow Functions
const add = (a, b) => {
  return a + b;
};

const mul = (x, y) => x * y;

console.log("Addition of 2 number is: " + add(5, 6));
console.log("Multiplication of 2 number is: " + mul(5, 2));



// map method  --->  returns an new array by applying func to each elem of a previous array.
Namee=persons.map((person)=>person.name);
console.log(Namee);



// filter method  --->  returns an array which contains the filtered data based on the condition
const nums=[11,12,45,67,45,89,43];
const result=nums.filter((n)=>n>20);
console.log(result);



//sort method --> returns a sorted array based on condn in asc/desc order

//to sort in a ascending order
const even=[20,84,2,24,44,8];
const asc=even.slice().sort((a,b)=>a-b); //syntax for sorting in ascending order
// slice to make a copy of the original array
console.log(asc);


//to sort in a descending order
const odd=[17,3,1,21,23,77];
const desc=odd.slice().sort((a,b)=>b-a); //syntax for sorting in ascending order
// slice to make a copy of the original array
console.log(desc);



//  Promises :
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => console.log(data))

console.log("promise 1 fullfilled"); // here this is printed first because it takes time to fullfill the promise from server



// Async-Await Promises :
async function getData(){
  const respo=await fetch("https://jsonplaceholder.typicode.com/todos/2");
  const data=await respo.json();
  console.log(data);
}
getData();
console.log("Promise 2 fullfilled");

