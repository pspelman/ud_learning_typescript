
// represent a drink with an object
const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40
}

const pepsi = ['brown', true, 40]  // Note: this isn't check-able

const coke: [string, boolean, number] = ['brown', true, 40]

type Drink = [string, boolean, number]  // this type definition allows us not to spell it out every time
const mrPibb: Drink = ['brown', true, 20]


// NOTE: it's more likely you'll use OBJECTS over tuples to represent objects as tuples
//  don't really give you any useful information about what you're working with
const carSpecs: [number, number] = [400, 3354]  // tuple

const carStats = {  // object
	horsepower: 400,
	weight: 3354
}