import {Sorter} from "./Sorter";

const charVal = (char: string) => char.charCodeAt(0)
const lowerCharVal = (char: string) => char.toLowerCase().charCodeAt(0)
const compCharVals = (char1: string, char2: string): boolean => lowerCharVal(char1) < lowerCharVal(char2)

export class NumbersCollection extends Sorter{
	constructor(public data: number[]) {
		super()
	}

	get length(): number {
		return this.data.length
	}

	compare(leftIdx: number, rightIdx: number): boolean {
		return this.data[leftIdx] > this.data[rightIdx]  // is the left item greater than the right?
	}

	swap(leftIdx: number, rightIdx: number): void {
		const leftElement = this.data[leftIdx]
		this.data[leftIdx] = this.data[rightIdx]
		this.data[rightIdx] = leftElement
	}

}
