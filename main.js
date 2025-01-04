let ar1 = [1, 2, 3, 4, 5];
document.write(ar1.length);
document.write("<br>");
// ########################################
//   task 2
let cars = [1, 2, 3, 4, 5];
for (let x of cars) {
    document.write(x);
}
document.write("<br>");
// ########################################
//   task 3
let cars1 = [1, 2, 3, 4, 5];
for (let x of cars1) {
    document.write(x);
}
document.write("<br>");
// ########################################
//   task 4
let cars2 = [1, 2, 3, 4, 5];
document.write(Array.isArray (cars2));
document.write("<br>");
// ########################################
//   task 5
let cars3 = {0: "a", 1: "b", 2: "c", length: 3};
document.write(Array.from (cars3));
document.write("<br>");
// ########################################
//   task 6
let cars4 = [1, 2, 3, 4, 5];
cars4.forEach(function (cars4) {
  document.write(cars4);
});
document.write(cars4.push(6));
document.write("<br>");
// ########################################
//   task 7
const cars5 = [1, 2, 3];
const cars6 = [4, 5, 6];
document.write((cars5.concat(cars6)));
document.write("<br>");
// ########################################
//   task 8
let cars7 = [1, 2, 3, 4, 5];
document.write(cars7.indexOf(1) + 1,
    cars7.indexOf(2) + 1,
    cars7.indexOf(3) + 1,
    cars7.indexOf(4) + 1,
    cars7.indexOf(5) + 1);
document.write("<br>");
// ########################################
//   task 9
let cars8 = [1, 2, 3, 4, 5, 6];
let cars10 = cars8.slice(0,2);
let cars9 = cars8.slice(4);
let cars11 = cars10.concat(cars9);
document.write(cars11);
document.write("<br>");
// ########################################
//   task 10
let cars12 = [1, 2, 3, 4];
let cars13 = cars12.splice(2, 2, 6 ,7);
document.write(cars12); 
document.write("<br>");
// ########################################
//   task 11
let cars14 = [1, 2, 3, 4, 5]; 
let cars15 = cars14.join("");
document.write(cars15); 

document.write("<br>");
// ########################################
//   task 12
let cars16 = "1,2,3,4,5"; 
let cars17 = cars16.split(",");
document.write(cars17);
document.write("<br>");
// ########################################
//   task 13
let cars18 = Array.of(1, 2, 3);
document.write(cars18);
document.write("<br>");
// ########################################
//   task 14
let cars19 = [1, 2, 3, 4, 5];
cars19.fill(0, 0, 3);
document.write(cars19);
document.write("<br>");
// ########################################
//   task 15
let cars20 = [1, 2, 3, 4, 5];
document.write(cars20.copyWithin(1,0,1));
document.write("<br>");
// ########################################
//   task 16
let cars21 = ["apple", "cherry", "banana"];;
cars21.sort();
document.write(cars21);
document.write("<br>");
// ########################################
//   task 17
let cars22 = ["apple", "banana", "cherry"];
cars22.reverse();
document.write(cars22);
document.write("<br>");
// ########################################
//   task 18
let cars23 = [1, 2, 3, 4, 5];
let cars24 = cars23.map(myfunction);
function myfunction(value , index, array  ) {
    return value * 2;
}
document.write(cars24);
document.write("<br>");
// ########################################
//   task 19
let cars25 = [1, 2, 3, 4, 5];
let cars26 = cars25.filter(myfunction1);
function myfunction1(value, index, array) {
    return value%2==0;
}
document.write(cars26);
document.write("<br>");
// ########################################
//   task 20
let cars27 = [1, 2, 3, 4, 5];
let cars28 = cars27.reduce(myfunction2);
function myfunction2(total, value, index, array) {
    return total + value;
}
document.write(cars28);