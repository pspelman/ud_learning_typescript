import {MatchResult} from "./MatchResult";
import {dateStringToDate} from "./utils";
import {CsvFileReader, DataReader} from "./CsvFileReader";
import {MatchData} from "./MatchData";


export class MatchReader {
	static fromCsv(filename: string): MatchReader {
		let reader = new MatchReader(new CsvFileReader(filename))
		reader.load()
		return reader
	}

	matches: MatchData[] = []

	constructor(public reader: DataReader) {
	}

	load(): void {
		this.reader.read()
		this.matches = this.reader.data.map((row: string[]): MatchData => {
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