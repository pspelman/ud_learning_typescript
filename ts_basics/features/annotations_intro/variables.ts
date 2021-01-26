const apples: number = 5
let speed1: string = "10"
let speed2: string = 10

let hasName: boolean = true

let nothingMuch: null = null
let nothing: undefined = undefined

// built in objects
let now: Date = new Date()

// Note: Array with STRINGS in it
let colors: string[] = ['red','green','blue', 42]

// or numbers
let myNumbers: number[] = [1,2,3, 'stuff']

// or booleans
let truths: boolean[] = [true, false, true, 0]

// or classes!
class Car {
}

let car: Car = new Car()
let truck: Car = {stuff: 'and things'}  // note: not sure why this works

// Object literal
let point: {x: number, y: number, g: string} = {
	x:10,
	y: 20,
	g: 15
}

// Note: FUNCTIONS - a little nasty but very important
const logNumber: (i: number) => void = (i: number) => {
	console.log(i)
}
// we care about what args go into the function and what values it will return


// Note: WHEN TO USE ANNOTATIONS
//  1) Function that returns 'any' type
const json = '{"x":10, "y": 20}'
const anyCoordinates = JSON.parse(json)
// TS doesn't know how to check for errors b/c this is an ANY type
// tip: we add type annotation
const coordinates: {x: number, y:number} = JSON.parse(json)
console.log(coordinates)

// Note: 2) when we declare a variable on ONE line and initialize it later
let words = ['red','green','blue']
let foundWord

for (let i = 0; i < words.length; i++) {
	if (words[i] === 'green') {
		foundWord = true
	}
}


// Note: 3) When we have a variable whose type cannot be inferred
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false
// but if we ever find a number above 0, we need to assign the number to numberAboveZero
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) {
		numberAboveZero = numbers[i]
	}
}



