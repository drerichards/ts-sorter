"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([56, -89, 23, 90, 33, -647]);
// const charCollection = new CharCollection('CharCollection');
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(50);
linkedList.add(-10);
linkedList.add(34);
linkedList.add(253);
// const numbSorter = new Sorter(numbersCollection);
// const charSorter = new Sorter(charCollection);
var linkSorter = new Sorter_1.Sorter(linkedList);
// numbSorter.sort();
// charSorter.sort();
linkSorter.sort();
// console.log(numbersCollection.data);
// console.log(charCollection.data);
linkedList.print();
