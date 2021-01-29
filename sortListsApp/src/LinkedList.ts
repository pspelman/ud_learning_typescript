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
			return node
		}
		let pointer = 0;
		while (node.next) {
			node = node.next;
			pointer++
			if (pointer === search_idx) {
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

		rightPointer = this.head
		leftPointer = rightPointer
		lagNode = this.head
		while (count < rightIdx && rightPointer.next) {
			count++
			lagNode = leftPointer
			leftPointer = rightPointer
			rightPointer = rightPointer.next
		}
		this.print()
		leftPointer.next = rightPointer.next
		rightPointer.next = leftPointer
		lagNode.next = rightPointer
		this.print()

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
		}
	}


}

