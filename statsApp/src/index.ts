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


