class Node {
	next: Node | null = null

	constructor(public data: number) {

	}
}

export class LinkedList {
	head: Node | null = null

	constructor() {
	}

	add(data: number): void {
		const node = new Node(data)
		if (!this.head) {
			this.head = node
		} else {
			let tail = this.head
			while (tail.next) {
				tail = tail.next
			}
			tail.next = node
		}
	}

	get length(): number {
		if (!this.head) {
			return 0
		}
		let pointer = this.head
		let count = 1
		while (pointer.next) {
			pointer = pointer.next
			count += 1
		}
		return count
	}

	at(search_idx: number): Node {
		if (!this.head) {
			throw new Error("empty list")
		}
		let node = this.head
		if (search_idx === 0) {
			console.log(`[pos: 0 | searchIdx: ${search_idx}] --> ${node.data}`, )
			return node
		}
		let pointer = 0;
		while (node.next) {
			node = node.next;
			pointer++
			if (pointer === search_idx) {
				console.log(`[pos: ${pointer} | searchIdx: ${search_idx}] --> ${node.data}`, )
				this.print()
				return node
			}
		}
		throw new Error('Index out of bounds');
	}

	compare(leftIdx: number, rightIdx: number): boolean {
		if (!this.head) {
			throw new Error('empty list')
		}
		return this.at(leftIdx).data > this.at(rightIdx).data
	}

	swap(leftIdx: number, rightIdx: number): void {
		if (!this.head) {
			throw new Error('empty list')
		}

		let leftPointer, rightPointer, lagNode: Node
		let count = 0
		console.log(`trying to swap ${this.at(leftIdx).data} => ${this.at(rightIdx).data}`, )

		let temp: Node
		if (leftIdx === 0 && this.head.next) {
			console.log(`going to swap ${this.at(leftIdx).data} -> ${this.at(rightIdx).data}`,)
			temp = this.head
			this.head = this.head.next
			temp.next = this.head.next
			this.head.next = temp
		} else {
			rightPointer = this.head;
			leftPointer = rightPointer
			lagNode = this.head
			while (count < rightIdx && rightPointer.next) {
				count++
				lagNode = leftPointer
				leftPointer = rightPointer
				rightPointer = rightPointer.next
			}
			console.log(`going to swap ${leftPointer.data} -> ${rightPointer.data}`,)
			this.print()
			leftPointer.next = rightPointer.next
			rightPointer.next = leftPointer
			lagNode.next = rightPointer
		}
		this.print()
		console.log(`\n`)
		// console.log(`current idx ${count} = rightIdx: ${rightIdx}`,)

	}

	print(): void {
		if (!this.head) {
			throw new Error('empty list')
		}
		let printStr = [this.head.data]
		let runner = this.head
		while (runner.next) {
			runner = runner.next
			printStr.push(runner.data)
			// console.log(runner.data)
		}
		console.log(printStr.join(" -- "))
	}


}

