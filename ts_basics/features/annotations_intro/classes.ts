class Vehicle {
	constructor(public color: string) {
	}

	private honk(): void {
		console.log(`Honk honk!`)
	}

	protected jonk(): void {
		console.log(`Honk honk!`)
	}
}

class Car extends Vehicle {
	constructor(public wheels: number, color: string) {
		super(color);
	}

	private drive(): void {
		console.log(`Vroom!`)
	}

	startDrivingProcess(): void {
		this.drive()
		this.honk()
		this.jonk()
	}
}

const car = new Car(4, 'green')
car.honk()
car.jonk()
car.drive()
car.startDrivingProcess()

