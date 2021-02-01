import {Analyzer} from "./Summary";
import {MatchData} from "./MatchData";
import {MatchResult} from "./MatchResult";

export class WinsAnalysis implements Analyzer {
	// take in the name of a team and find the number of times the team won
	constructor(public team: string) {}

	run(matches: MatchData[]): string {
		let wins = 0
		for (let match of matches) {
			// they were they home team, and the home team won or they were the away team and the away team won
			if ((match[1] === this.team && match[5] === MatchResult.HomeWin) ||
				(match[2] === this.team && match[5] === MatchResult.AwayWin)) {
				wins ++
			}
		}
		let results = `Team ${this.team} has ${wins} wins`;
		return results
	}
}