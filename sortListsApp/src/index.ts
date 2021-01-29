import {Sorter} from "./Sorter";
import {NumbersCollection} from "./NumbersCollection";
import {CharacterCollection} from "./CharacterCollection";

let numList = [10, 3, -5, 0];
const numCollection = new NumbersCollection(numList)
const sorter = new Sorter(numCollection)
sorter.sort()

let charList = Array.from("somethings")
let testChars = "zyxbansmoke"
let testCharCollection = new CharacterCollection(testChars)
new Sorter(testCharCollection).sort()





// class Sorter {
// 	constructor(public collection: any[]) {
// 	}
//
// 	compVals(idx1: number, idx2: number): boolean {
// 		const comp1 = typeof this.collection[idx1] === "string" ?
// 			lowerCharVal(this.collection[idx1]) :
// 			this.collection[idx1]
// 		const comp2 = typeof this.collection[idx2] === "string" ?
// 			lowerCharVal(this.collection[idx2]) :
// 			this.collection[idx2]
// 		// if it refers to a string, use the string compval
// 		// if it refers to a number, use the number comp
//
// 		console.log(`${comp1} > ${comp2} ? ${comp1 > comp2}`, )
// 		return comp1 > comp2
// 	}
//
// 	sort(): void {
// 		// get the length
// 		const {length} = this.collection
// 		console.log(`Un sorted: `, this.collection)
// 		for (let i = 0; i < length; i++) {
// 			for (let j = 0; j < length - i - 1; j++) {
// 				// look at j and j+1
// 				if (this.compVals(j, j + 1)) {
// 					// if (this.collection[j] > this.collection[j + 1]) {
// 						const leftElement = this.collection[j]
// 						this.collection[j] = this.collection[j + 1]
// 						this.collection[j + 1] = leftElement
// 					// }
// 				}
// 			}
// 		}
// 		console.log(`Sorted: `, this.collection)
// 	}
// }
