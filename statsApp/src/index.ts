import {CsvFileReader} from "./CsvFileReader";

const fileReader = new CsvFileReader('football.csv')
fileReader.read()
let matches = fileReader.data


enum MatchResult {
	HomeWin = 'H',
	AwayWin = 'A',
	Draw = 'D'
}
// console.log(matches)
const MAN_UNITED = 'Man United'
let wins = 0
let team = MAN_UNITED
for (let match of matches) {
	// they were they home team, and the home team won or they were the away team and the away team won
	if ((match[1] === team && match[5] === MatchResult.HomeWin) ||
		(match[2] === team && match[5] === MatchResult.AwayWin)) {
		wins ++
	}
}
console.log(`${team} wins: `, wins)

// if (match[1] === MAN_UNITED && match[5] === "H")
// {
// 	wins++
// } else if (match[2] === MAN_UNITED && match[5] === "A")
// {
// 	wins++
// }

