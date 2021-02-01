// create object that satisfies a DataReader interface
import {CsvFileReader} from "./CsvFileReader";
import {MatchReader} from "./MatchReader";
import {MatchResult} from "./MatchResult";
import {match} from "assert";

const csvFileReader = new CsvFileReader('football.csv')

// create an instance of a match reader and pass in something that is a DataReader interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load()



// console.log(matches)
const MAN_UNITED = 'Man United'
let wins = 0
let team = MAN_UNITED
for (let match of matchReader.matches) {
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

