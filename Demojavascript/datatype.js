/**
 * Created by Administrator on 29/09/2016.
 */
"use strict";
var age = 10;
const pi = 3.14;
console.log(typeof pi);
if (parseInt(age)) {
    console.log('Age a number');
}
var myage = 'AAA';
var myage2 = parseInt(myage);
var nodejs_slow = false;
var iojs_fast = true;
if (nodejs_slow) {
    console.log("Node.js is slow");
} else {
    console.log("Node.js is fast");
}

if (!nodejs_slow) {
    console.log("Node.js is not slow");
}

if (!nodejs_slow && iojs_fast) {
    console.log("Both Node.js and iojs are fast");
}
//String
var best_film = "Gone with the wind";
var best_hero = 'Bat man';
var best_player = 'Bjork\'ka';
console.log(best_player);
var my_folder = "/Volumes/MacBackup/Data/";
console.log(my_folder);
//Object
var Trung = {firstname: "Nguyen", lastname: "Trung"};
var book = {name: "Java Cookbook", author: Trung};
console.log(book.name);
console.log(book.price);
book.price = 100;
console.log(book.price);
Trung.firstname = "Nguyễn";
console.log(book.author);
console.log(book.author.firstname);