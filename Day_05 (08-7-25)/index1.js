let a=50;
if(a>=40 & a<90){  // &, && gives same result in this case 1&1 results in 1
    console.log("a is between 40 and 90");
}
else{
    console.log("Failed");
}

//Array
let arr = [1, 2, 3, 4, 5];
console.log(arr[0]);
console.log(arr[1]);

//Array Methods
let arr1=["Apple", "Banana", "Cherry"];
console.log("Original Array:", arr1);
console.log("After push:",arr1, arr1.push("Mango")); // Adds "Mango" to the end
console.log("After pop:",arr1, arr1.pop()); // Removes the last element ("Mango")
console.log("After shift:", arr1, arr1.shift()); // Removes the first element ("Apple")
console.log("After unshift:", arr1, arr1.unshift("Orange")); // Adds "Orange" to the beginning
console.log('Length of array:', arr1.length);
var ind=arr1.indexOf("Banana"); // Finds the index of "Banana"
console.log("Index of 'Banana':", ind);
console.log("Includes 'Cherry':", arr1.includes("Cherry")); // Checks if "Cherry" is in the array returns true or false
console.log("Slice from index 1 to 3:", arr1.slice(1)); // Slices the array from index 1 to 3
arr1.splice(1, 0, "Grapes");
console.log("After splice (add):", arr1); // ["Apple", "Grapes", "Banana", "Cherry"]

let fruits = ["Apple", "Banana", "Cherry", "Mango"];
fruits.splice(1, 2); 
console.log(fruits); // ["Apple", "Mango"]
// Removed "Banana" and "Cherry"


let tasks = ["Buy groceries", "Clean room", "Read a book"];

tasks.forEach((task, i) => {    // tasks -> element, i -> index
  console.log(`Task ${i + 1}: ${task}`); //template literal
});




//objects
const person = {
  name: "Alice",
  age: 30,
  isStudent: false
};
//Accessing object properties
console.log("Name:", person.name); // Dot notation
console.log("Age:", person["age"]); // Bracket notation
console.log("Age:", person.age); // dot notation

//Adding a new property
person.location ='Nagercoil';
console.log("Location:", person.location);

//Modifying an existing property
person.location = 'Nagercoil, Tamil Nadu';
console.log("Updated Location:", person.location);

//Deleting a property
delete person.isStudent;
console.log("Is Student:", person.isStudent); // undefined
console.log("Updated Person Object:", person);

for (let val in person) {
  console.log(val, person[val]);
}

//object methods
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));


//Preventing object modification
Object.freeze(person); // Makes the object immutable
console.log(person.age = 35); // This will not change the age, will not cause any error
console.log("Age after freeze:", person.age); // Still 30


//Object constructor
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
console.log(Person);  // Function constructor, returns the function definition
// Creating an object using the constructor
let myFather = new Person("John", "Doe", 50, "blue");
let myMother = new Person("Jane", "Doe", 48, "green");
console.log(`My father name is ${myFather.firstName} and my mother name is ${myMother.firstName}.`);

Array
let arr2=["Apple", "Banana", "Cherry"];
console.log("Original Array:", arr2);
console.log("Last elemet:",arr2[arr2.length - 1]); // Accessing the last element

//Switch case
let fruit = ["apple", "banana", "cherry"];
for(let fruits of fruit) {

switch (fruits) {
  case "apple":
    console.log("Apples are red or green.");
    break;
  case "banana":
    case "cherry":   // Multiple cases can share the same block
    console.log("Bananas are yellow.");
    break;
  default:
    console.log("Unknown fruit.");
}
}


//Difference between of and in
let obj={one:"Rohini",two:"Amrita",three:"Xaviers",four:"Stella"};
for(let key in obj){
    console.log(key);
    console.log(obj[key]); // Accessing the value using the key
}

for (let val of Object.values(obj)) {
    console.log(val);
}

let arr3 = [1, 2, 3, 4, 5];
for (let val in arr3) {
    console.log(val);
}


//Examples for me  to try
let ab=1;
while(ab < 10) {
    console.log(ab);
    ab++;
    console.log("Current value of a:", ab++);
}


let b=1;
do{
    console.log(b++);
    --b;
    ++b;
    console.log("Current value of b:", b);
}while(b < 10);


let c=5;
while(c < 10) {
    console.log(--c);
    console.log(c);
    c++;
    console.log(++c);
    c--;
    console.log(c);
    c++;
    console.log("Next iteration")
}

//tricky for loop to return 0,1,2 var-> let
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 3,3,3
}