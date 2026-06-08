@@ -0,0 +1,178 @@
// Q1 Get Names of All Students

let students1 = [
  {name: "Rahul", marks: 80},
  {name: "Aman", marks: 65},
  {name: "Priya", marks: 90}
];

let names = students1.map(s => s.name);

console.log(names);

// Q2 Add GST to Product Prices

let products1 = [
  {name: "Laptop", price: 50000},
  {name: "Mouse", price: 1000},
  {name: "Keyboard", price: 2000}
];

let gst = products1.map(p => ({
  name: p.name,
  price: p.price + (p.price * 18 / 100)
}));

console.log(gst);

// Q3 Filter Passed Students

let students2 = [
  {name: "Rahul", marks: 35},
  {name: "Aman", marks: 75},
  {name: "Priya", marks: 90},
  {name: "Karan", marks: 20}
];

let passed = students2.filter(s => s.marks >= 40);

console.log(passed);


// Q4 Filter Available Products

let products2 = [
  {name: "Phone", inStock: true},
  {name: "Laptop", inStock: false},
  {name: "Tablet", inStock: true}
];

let available = products2.filter(p => p.inStock);

console.log(available);

// Q5 Total Salary of Employees

let employees1 = [
  {name: "A", salary: 25000},
  {name: "B", salary: 30000},
  {name: "C", salary: 40000}
];

let totalSalary = employees1.reduce((sum, e) => sum + e.salary, 0);

console.log(totalSalary);

// Q6 Find Highest Marks

let students3 = [
  {name: "Rahul", marks: 85},
  {name: "Aman", marks: 92},
  {name: "Priya", marks: 78}
];

let topStudent = students3.reduce((a, b) =>
  a.marks > b.marks ? a : b
);

console.log(topStudent);

// Q7 Count Active Users

let users1 = [
  {name: "Aman", active: true},
  {name: "Rahul", active: false},
  {name: "Priya", active: true}
];

let activeUsers = users1.reduce((count, u) =>
  u.active ? count + 1 : count
, 0);

console.log(activeUsers);

// Q8 Create Usernames

let users2 = [
  {name: "Rahul Sharma"},
  {name: "Aman Verma"},
  {name: "Priya Singh"}
];

let usernames = users2.map(u =>
  u.name.toLowerCase().replace(" ", "")
);

console.log(usernames);

// Q9 Total Price of Cart

let cart = [
  {item: "Phone", price: 20000, qty: 2},
  {item: "Mouse", price: 500, qty: 3},
  {item: "Keyboard", price: 1500, qty: 1}
];

let totalCart = cart.reduce((sum, c) =>
  sum + (c.price * c.qty)
, 0);

console.log(totalCart);

// Q10 Filter Adults

let users3 = [
  {name: "Rahul", age: 17},
  {name: "Aman", age: 22},
  {name: "Priya", age: 19}
];

let adults = users3.filter(u => u.age >= 18);

console.log(adults);

// Q11 Find Average Salary

let employees2 = [
  {name: "A", salary: 20000},
  {name: "B", salary: 30000},
  {name: "C", salary: 50000}
];

let total = employees2.reduce((sum, e) =>
  sum + e.salary
, 0);

let average = total / employees2.length;

console.log(average);

// Q12 

let products3 = [
  {name: "Phone", price: 20000},
  {name: "Mouse", price: 500},
  {name: "Laptop", price: 70000}
];
        
let expensive = products3
  .filter(p => p.price > 10000)
  .map(p => p.name);

console.log(expensive);



// Q13 Total Marks

let students4 = [
  {name: "Rahul", marks: 80},
  {name: "Aman", marks: 20},
  {name: "Priya", marks: 70}
];

let totalMarks = students4
  .filter(s => s.marks > 40)
  .reduce((sum, s) => sum + s.marks, 0);

console.log(totalMarks);
