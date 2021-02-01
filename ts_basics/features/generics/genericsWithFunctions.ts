// generics with functions

function printStrings(arr: string[]){
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i])
	}
}

function printNumbers(arr: number[]) {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i])
	}
}

// Use a GENERIC!
function printAnything<T>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i])
	}
}

printAnything<string>(['a','b','c']) // tip: no bracket means just 1D array
printAnything<string[]>([['a','b'], ['c']])  // tip: <string[]> means a TWO dimensional array [[]]


// Generic Constraints

class Car {
	print() {
		console.log("I am a car")
	}
}

class House {
	print() {
		console.log("I am a house")
	}
}

interface Printable {
	print(): void
}

function printHouseOrCars<T extends Printable>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		arr[i].print()
	}
}

printHouseOrCars([1,2,3,4])
printHouseOrCars<House>([new House(), new House(), new House()])
printHouseOrCars<Car>([new Car(), new Car(), new Car()])


