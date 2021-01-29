
export class CharacterCollection {
	sorted: string[] = []
	constructor(public data: string) {}
	get length(): number {
		return this.data.length
	}
	compare(leftIdx: number, rightIdx: number): boolean {
		return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase()
	}
	swap(leftIdx: number, rightIdx: number) {
		const characters = this.data.split('')
		const leftElement = characters[leftIdx]
		characters[leftIdx] = characters[rightIdx]
		characters[rightIdx] = leftElement
		this.data = characters.join('')
	}

}