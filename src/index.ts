import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharCollection } from './CharCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([56, -89, 23, 90, 33, -647]);
const charCollection = new CharCollection('CharCollection');
const linkedList = new LinkedList();
linkedList.add(50);
linkedList.add(-10);
linkedList.add(34);
linkedList.add(253);

numbersCollection.sort();
charCollection.sort();
// linkedList;

console.log(numbersCollection.data);
console.log(charCollection.data);
// linkedList.print();
