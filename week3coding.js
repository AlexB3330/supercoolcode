//Question 1

let ages = [3, 9,10, 23, 64, 2, 8, 28, 93]
let subtraction = ages[ages.length - 1] - (ages[0])
console.log(subtraction)

function average(ages) {
    var sum = 0;
    for(var i = 0; i < ages.length;i++){
        sum += ages[i];
    }
    return sum / ages.length;
}
console.log(average(ages))

//Question 2

let names =['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
var ourTotal=0
for (var i =0; i< names.length; i++) {ourTotal += names[i].length;}
let ourAverage= ourTotal/names.length
console.log(ourAverage)

let nameString=' '
for (var i =0; i<names.length; i++){nameString = names.join(' ')}
console.log(nameString)

//Question 5

let namesLength=[]
for (var i = 0; i < names.length; i++) {
    namesLength.push(names[i].length);
  }
  console.log(namesLength)

// Question 6
  
let sum2 = 0;

for (let i = 0; i < namesLength.length; i++) {
    sum2 += namesLength[i];
}
console.log(sum2);

//Question 7

wordMultiplier=function wordMultiplier(word,n){ if(typeof(n) == "undefined") { n =1;}
  return n < 1 ? '' : new Array(n + 1).join(word);}
console.log(wordMultiplier('Hello',3))

//Question 8

function fullName1(firstName,lastName) {return firstName + " " + lastName;}
console.log(fullName1('Alexander','Baca'))

//Question 9
let greaterArray=[100,2]
let sum3 =0
function greaterThan100() {for (let i = 0; i < greaterArray.length; i++) {
    sum3 += greaterArray[i];} if (sum3>100) {return 'true'} return 'false'}
    console.log(greaterThan100())

//Question 10

let arrayAverage = [6,7,8,9]
function averageArray() {var sum4 = 0;
    for(var i = 0; i < arrayAverage.length;i++){
        sum4 += arrayAverage[i];
    }
    return sum4 / arrayAverage.length;}
    console.log(averageArray())

//Question 11

let superArray1= [3,4,5,6]
let superArray2= [1,2,3,4]
let sum5=0
let sum6=0
function averageCompare() {
for(var i = 0; i < superArray1.length;i++){
sum5 += superArray1[i];
sum5 / superArray1.length;} 
for(var i = 0; i < superArray2.length;i++){
sum6 += superArray2[i];
sum6 / superArray2.length;} if (sum5>sum6) return 'true'; return 'false'}
console.log(averageCompare()) 

//Question 12

function willBuyDrink(isHotOutside, moneyInPocket) {
if (isHotOutside=true && moneyInPocket>10.5) {return 'true';} else return 'I will not buy a drink'}
console.log(willBuyDrink(true,11))

//Question 13

function doneWithThis(questionsCompleted) {if (questionsCompleted>12) {return 'I have coded my way to the end for days '}}
console.log(doneWithThis(13))

//This assignment took me the better part of a week to complete in addition to the other learning modules and materials 
//I created this function to celebrate the fact that I finally finished the assignment, as som of these problems took me multiple hours 
//to gather the theory and complete, I actually had a really good time, I just wish that I had had more time to complete the assignment.
//Cheers!
