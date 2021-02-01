import fs from 'fs'
import {OutputTarget} from "../Summary";
import path from "path";

export class HtmlReport implements OutputTarget {
	print(report: string): void {
		// generate HTML snippet
		// write it to a file
		const html = `
		<div>
			<h1>Analysis Report</h1>
			<div>${report}</div>
		</div>
		`
		fs.writeFileSync(path.join(__dirname, 'winsReport.html'), html)
	}
}