import fs from 'fs'

const matches = fs.readFileSync('football.csv', {
	encoding: 'utf-8'
}).split("\n")
	.map(record => {
		return record.split(",")
	})

console.log(matches)
const MAN_UNITED = 'Man United'
let wins = 0
for (let match of matches) {
	// they were they home team, and the home team won or they were the away team and the away team won
	if ((match[1] === MAN_UNITED && match[5] === "H") ||
		(match[2] === MAN_UNITED && match[5] === "A")) {
		wins ++
	}
}
console.log(`${MAN_UNITED} wins: `, wins)

// if (match[1] === MAN_UNITED && match[5] === "H")
// {
// 	wins++
// } else if (match[2] === MAN_UNITED && match[5] === "A")
// {
// 	wins++
// }

