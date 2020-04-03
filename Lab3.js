 /*
 a) Define a function ( expression) ​ greet ​returning the value ​'Haydo!'​. 
 b) Declare a variable ​salutation​. 
 Call the function ​greet ​and ​assign the result ​of the call to the variable ​salutation​
 */

 function greet (){
    return 'Haydo'
};
var salutation = greet ();
console.log(salutation);
/*
 Write a function ​echo​ that has a parameter called ​sound ​
and return that passed parameter. 
*/

function echo(sound){
return sound 
}
console.log(echo('sound'))

/*
Write a function​ greet ​having a parameter called ​name​. 
Return ​'Hello <parameter> !' where the parameter variable
 is concatenated with the ‘Hello’ and ‘!’ strings. */

 function greet (name){
     return 'Hello ' + name + '!';
 }
console.log(greet('Xiomara'))

//6. Which value does x have after execution of the following code?
var whereIs = function (name){
    return 'Where is ' + name + '?';
};
var x = whereIs('Jacky');
console.log(x);

//7. Which value does x have after execution of the following code?
var hi = function (name) {
    return 'Hi' + name + '!';
};
var h1 = hi('Selva');
var h2 = hi('Pola');
var x = h1 + ' ' + h2;
console.log(x);

/*
Write a function ​shout​ that takes a ​string​ and returns 
this string ​duplicated​.In addition, the return should be ​logged​. 
 The call shout('Fire') should return 'FireFire' and should 
 log 'FireFire' for example. */

 
 function shout(name){
     return name + name;
 }
console.log(shout('Fire'))
/*
Write a function called ​doSomething​ with a parameter called ​name​,
 ​return​ the name parameter. 
On the next line call the function with a ​value for the name​ 
( can be any name you like ). */


 function doSomething (name){
     return name ;
 }
 doSomething('Xiomara');
 console.log(doSomething('Xiomara'))
/*
 Define a function called​ multiplyFive​ which accepts a ​number​ 
and ​returns ​that number multiplied by 5​. */

function multiplyFive(number){
 return number * 5
}
console.log(multiplyFive(10))
/*
Define a function called ​myFunction ​that uses the ​alert()
 ​method​ ​with a string value “Hello World!”​ inside. ​
Call​ myFunction on the next line. 

function myFunction(){
    alert('Hello World');
}
myFunction();

Define a variable called ​isAnswerRight​ and give it a ​
true ​value. Use the ​ternary 
operator​ to console.log the ​‘The answer is right!’ ​ 
if the value is true and 
​‘The answer is wrong!’ ​ if the value is false. 
*/

var isAnswerRight = true;
console.log(isAnswerRight?'The answer is right!':"the answer is wrong!")

/*
Write a function named ​tellFortune​ that: takes ​4 arguments​:
number of children, partner's name, geographic location, 
job title. Output your fortune to the screen like so:​
 "You will be a X in Y, and married to Z with N kids." ​
Call that function 3 times with 3 different values for the arguments */

function tellFourtune (numberOFChildren, partnersName, geographicLocation, jobTittle){
return 'You will be a '+ jobTittle + ' in ' + geographicLocation
 +' and married to ' 
+partnersName +' with '+ numberOFChildren +' kids';

}
console.log(tellFourtune(3, 'Rar', 'Dublin', 'nurse'));
console.log(tellFourtune(15, 'Daniel', 'Mexico', 'Doctor' ));
console.log(tellFourtune(6, 'Erick', 'Australia', 'Teacher'));