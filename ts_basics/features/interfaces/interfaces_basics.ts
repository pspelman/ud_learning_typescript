const oldCivic = {
	name: 'civic',
	year: 2000,
	broken: true
}

const printVehicle = (vehicle: {name: string, year: number, broken: boolean}): void => {
	console.log(`Name: ${vehicle.name}`, )
	console.log(`year: ${vehicle.year}`, )
	console.log(`broken: ${vehicle.broken}`, )
}

printVehicle(oldCivic)

// add an interface
interface Vehicle {
	name: string
	year: number
	broken: boolean
	summary(): string
}

const printRealVehicle = (vehicle: Vehicle): void => {
	console.log(`Name: ${vehicle.name}`, )
	console.log(`year: ${vehicle.year}`, )
	console.log(`broken: ${vehicle.broken}`, )
}

printRealVehicle(oldCivic)
