//  Spread & Rest Operator

//task 1
const mGArr = [...[10,20], ...[30,40], 50];
console.log(mGArr);

//task 2
const original = [1,2,3];
const clone = [...original];
clone.push(4);
console.log(original, clone);

//task 3
const A = {salary: 20000};
const B = {salary: 50000};
const mergedObj = {...A, ...B};
console.log(mergedObj); // obj2 overrides

// task 4
function sumAll(...nums){
  return nums.reduce((a,b)=>a+b,0);
}
console.log(sumAll(1,2,3,4));

// task 5
function restexample(a,b,...rest){
  console.log(rest);
}
restexample(1,2,3,4,5);

// Destructuring

//task  6
const [first,,,last] = [5,10,15,20];
console.log(first,last);

// task 7
let x = 5, y = 10;
[x,y] = [y,x];
console.log(x,y);

// task 8
const nested = [1,[2,[3,[4]]]];
const value4 = nested[1][1][1][0];
console.log(value4);

//task 9
const {name:userName, age} = {name:"Sai", age:25};
console.log(userName);

//task 10
const {city="Bangalore"} = {};
console.log(city);

// 🔹 Basic Array Operations

let arr = [1,2,3,4,5];

//task 11
arr.push(6,7);
console.log(arr);

//task 12
const lastE = arr.pop();
console.log(lastE);

//task 13
arr.shift();
console.log(arr);

//task 14
arr.unshift(0);
console.log(arr);

//task 15
let midArr = [1,2,3,4,5,6];
midArr.splice(2,2);
console.log(midArr);

// Slice / Splice / Flat

//task 16
let salary = [1000,2000,3000,4000,5000,6000];
console.log(salary.slice(3));

//task 17
let replaceArr = [1,2,3,4,5];
replaceArr.splice(1,2,"A","B");
console.log(replaceArr);

//task 18
console.log([1,[2,[3,[4]]]].flat(Infinity));

//task 19
console.log([1,[2,[3]]].flat(1));

//task 20
let insertArr = [1,2,5];
insertArr.splice(2,0,3,4);
console.log(insertArr);

//  Searching & Checking

let checkArr = [1,2,3,5,5];

//task 21
console.log(checkArr.includes(100));

//task 22
console.log(checkArr.indexOf(3,2));

//task 23
console.log(checkArr.lastIndexOf(5));

//task 24
console.log([1,2,3].every(n=>n>0));

//task 25
console.log([10,60,30].some(n=>n>50));

//  Sorting

//task 26
console.log([10,5,100,1].sort((a,b)=>a-b));

//task 27
console.log([10,5,100,1].sort((a,b)=>b-a));

//task 28
let employees = [
  {name:"ABC",salary:200000},
  {name:"DEF",salary:500000}
];
employees.sort((a,b)=>a.salary-b.salary);
console.log(employees);

//task 29
console.log([1,2,3].reverse());

//task 30
console.log("Default sort converts numbers to strings");

//  Higher Order Functions

//task 31 forEach
[1,2,3].forEach(el=>console.log(el));

//task 32
let result = [1,2,3].forEach(el=>el*2);
console.log(result); // undefined

//task 33 map
console.log([1,2,3].map(n=>n*2));

//task 34
console.log(["Sai","Raghava"].map(n=>n.toUpperCase()));

//task 35
console.log(employees.map(emp=>emp.salary));

//task 36 filter
console.log(employees.filter(emp=>emp.salary>300000));

//task 37
console.log([1,2,3,4].filter(n=>n%2===0));

//task 38
console.log(["hello","world","JS"].filter(s=>s.length>5));

//task 39 find
console.log([10,60,30].find(n=>n>50));

//task 40
console.log(employees.find(emp=>emp.salary<200000));

//  Reduce

//task 41
console.log([10,20,30].reduce((a,b)=>a+b));

//task 42
console.log([10,50,20].reduce((a,b)=>a>b?a:b));

//task 43
console.log([1,2,3].reduce(count=>count+1,0));

//task 44
const objFromArr = ["a","b"].reduce((acc,cur)=>{
  acc[cur]=cur;
  return acc;
},{});
console.log(objFromArr);

//task 45
console.log(employees.reduce((sum,emp)=>sum+emp.salary,0));

//  Conversion

//task 46
console.log([1,2,3].toString());

//task 47
console.log([1,2,3].join(" - "));

//task 48
console.log("1,2,3".split(","));

//task 49
console.log([1,[2,3]].flat().join(","));

//task 50
console.log(["I","love","JS"].map(w=>w).join(" "));

//  Bonus

//task 51 Cart total
const cart = [{price:100},{price:200}];
console.log(cart.reduce((sum,i)=>sum+i.price,0));

//task 52 Filter under 500
const products = [{price:300},{price:600}];
console.log(products.filter(p=>p.price<500));

//task 53 Search
const items = ["apple","banana","grape"];
console.log(items.filter(i=>i.includes("ap")));

//task 54 Remove duplicates
console.log([...new Set([1,2,2,3])]);

//task 55 Group by salary
const grouped = employees.reduce((acc,emp)=>{
  let key = emp.salary > 300000 ? "high" : "low";
  acc[key] = acc[key] || [];
  acc[key].push(emp);
  return acc;
},{});
console.log(grouped);