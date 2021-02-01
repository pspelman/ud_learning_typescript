import {CsvFileReader} from "./CsvFileReader";
import {MatchReader} from "./MatchReader";
import {MatchResult} from "./MatchResult";
import {match} from "assert";
import {ConsoleReport} from "./reportTargets/ConsoleReport";
import {WinsAnalysis} from "./WinsAnalysis";
import {Summary} from "./Summary";
import {HtmlReport} from "./reportTargets/HtmlReport";

// create object that satisfies a DataReader interface
// create an instance of a match reader and pass in something that is a DataReader interface
const csvFileReader = new CsvFileReader('football.csv')
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const easyMatchReader = MatchReader.fromCsv('football.csv')






// console.log(matches)
const MAN_UNITED = 'Man United'
// const summary = new Summary(new WinsAnalysis(MAN_UNITED), new ConsoleReport())
// const summary = new Summary(new WinsAnalysis(MAN_UNITED), new HtmlReport())
// summary.buildAndPrintReport(matchReader.matches)

// const easyHtmlSummary = Summary.winsAnalysisWithHtmlReport(MAN_UNITED)
// easyHtmlSummary.buildAndPrintReport(matchReader.matches)

const easySummary = Summary.winsAnalysisWithConsoleReport(MAN_UNITED)
// easySummary.buildAndPrintReport(matchReader.matches)
easySummary.buildAndPrintReport(easyMatchReader.matches)

// new analysis
// new report
// new summary

