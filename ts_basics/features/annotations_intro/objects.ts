// annotations with objects

const profile = {
	name: 'alex',
	age: 20,
	coords: {
		lat: 0,
		lng: 15
	},
	setAge(age: number): void {  // we have a void return type b/c we don't expect any return
		this.age = age
	}
}

// now try destructuring out the age
const {age}: { age: number } = profile

// you might think that you only have to refer to age
//  Note: NOT SO --> if you want to use destructuring you need to say what the data types are that are expected
// if you wanted to do regular JS destructuring for lat/lng (w/out annotation)
// const {coords: {lat, lng}} = profile

// if we need annotation:
const {
	coords: {lat, lng}
}: {
	coords:
		{ lat: number, lng: number }
} = profile

