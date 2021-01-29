class Node {
	next: Node | null = null

	constructor(public data: number) {

	}
}

export class LinkedList {
	constructor(public head: Node | null) {
	}

	add(data: number): void {
		const node = new Node(data)
		if (!this.head) {
			this.head = node
		}
		let tail = this.head
		while (tail.next) {
			tail = tail.next
		}
		tail.next = node
	}

	get length(): number {
		if (!this.head) {
			return 0
		}
		let pointer = this.head
		let count = 0
		while (pointer.next) {
			pointer = pointer.next
			count += 1
		}
		console.log(`there are `, count, ' nodes in the list')
		return count
	}

}

const listItems = [1, 6, 34, 2, 78, 4, 8]
const myList = new LinkedList()