import fs from 'fs'
import {dateStringToDate} from "./utils";
import {MatchResult} from "./MatchResult";
type MatchData = [Date, string, string, number, number, MatchResult, string]
export class CsvFileReader {
	data: MatchData[] = []
	constructor(public filename: string) {}
	read(): void{
		this.data = fs.readFileSync(this.filename, {
			encoding: 'utf-8'
		}).split("\n")
			.map(record => {
				return record.split(",")
			})
			.map((row: string[]): MatchData => {
				// take the row of strings, go through it and do some processing
				// element[0] is the date
				return [
					dateStringToDate(row[0]),
					row[1],
					row[2],
					parseInt(row[3]),
					parseInt(row[4]),
					row[5] as MatchResult,
					row[6]
				]
			})
	}
}