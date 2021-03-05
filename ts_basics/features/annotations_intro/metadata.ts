import 'reflect-metadata'

const plane = {
	color: 'red'
}

// Note: this will associate the metadata key-value with the object
Reflect.defineMetadata('note', 'hi there', plane)
console.log(`plane: `, plane)

// Note: this will get the 'note' property and associated value from the plane object
let note = Reflect.getMetadata('note', plane)
console.log(`note: `, note)

Reflect.defineMetadata('note', 'hi there blue', plane, 'color')
const colorNote = Reflect.getMetadata('note', plane, 'color')
console.log(`colorNote: `, colorNote)


// Now using metadata with a class
@printMetadata
class Plane {
	color: string = 'red'

	@markFunction('hi there (this is secret)')
	fly(): void {
		console.log(`vrrrrrr`)
	}
}

function markFunction(secretInfo: string){
	return function (target: Plane, key: string) {
		Reflect.defineMetadata('secret', secretInfo, target, key)
	}
}

function printMetadata(target: typeof Plane) {
	for (let key in target.prototype) {
		let currentSecret = Reflect.getMetadata('secret', target.prototype, key)
		console.log(currentSecret)
	}
}

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')
// console.log(`plane's secret: `, secret)

// take the same structure, and make it "express" like
@controller
class Router {
	color: string = 'red'

	@get('/login')
	fly(): void {
		console.log(`vrrrrrr`)
	}
}

function get(path: string){
	return function (target: Plane, key: string) {
		Reflect.defineMetadata('path', path, target, key)
	}
}

function controller(target: typeof Plane) {
	for (let key in target.prototype) {
		// Note: imagine we have an express router in here
		const path = Reflect.getMetadata('path', target.prototype, key)
		// Note: also have to associate middleware and validate and such
		const middleware = Reflect.getMetadata('middleware', target.prototype[key])
		router.get(path, middleware, target.prototype[key])
	}
}
