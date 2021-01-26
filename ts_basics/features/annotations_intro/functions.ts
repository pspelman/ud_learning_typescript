const add = (a: number, b: number): number => {
	return a + b
}

// Note: important to keep the return type --> we intended to have this function return a-b
//  but we messed up --> without a return type annotation, this error isn't caught
const subtract = (a: number, b:number) => {
	a - b
}

function divide(a: number, b: number): number {
	return a / b
}

const multiply = function(a: number, b:number): number {
	return a * b
}

// NOTE: special cases using void and never
//    logger isn't MEANT to return anything, so add VOID
const logger = (message: string): void => {
	console.log(message)
}
logger('stuff')

// Note: destructuring into a function
const forecast = {
	date: new Date(),
	weather: 'sunny'
}

// we could rewrite the following
const logWeather = (theWeather) => {
	console.log(theWeather.date)
	console.log(theWeather.weather)
}

// into this:
const logDestructuredWeather = ({date, weather}: {date: Date, weather: string}): void => {
	console.log(date)
	console.log(weather)
}

