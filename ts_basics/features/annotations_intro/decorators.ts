@classDecorator
class Boat {
	color: string = 'red'

	get formattedColor(): string {
		return `a ${this.color} boat`
	}

	@logError('OOPS! Boat was sunk in the O-CHIN')
	pilot(
		@parameterDecorator speed: string,
		@parameterDecorator generateWake: boolean
	): void {
		// throw new Error()
		if (speed === 'fast') {
			console.log(`wooooshhhh`, )
		} else {
			console.log(`.....`, )
		}
	}
}

function classDecorator(constructor: typeof Boat) {
	console.log(`constructor: `, constructor)
}

function parameterDecorator(target: any, key: string, index: number) {
	console.log('key:', key, '| arg index: ', index)
}

// Note: this is the decorator to use somewhere in the class
function logError(errorMessage: string) {
	return function testDecorator(target: any, key: string, desc: PropertyDescriptor): void {
		// console.log(`Target: `, target)
		// console.log(`Key`, key)
		const method = desc.value
		desc.value = function() {
			try{
				method()
			} catch (e){
				console.log(errorMessage)
			}
		}
	}
}

// new Boat().pilot()
new Boat().pilot('fast', true)
