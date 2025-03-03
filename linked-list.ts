// Linked List Implementation
class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: ListNode | null;

  constructor() {
    this.head = null;
  }

  // EASY: Append a value to the end of the list
  append(value: number): void {
    if (!this.head) {
      this.head = new ListNode(value);
      return;
    }

    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = new ListNode(value);
  }

  // EASY: Find a value in the list
  find(value: number): boolean {
    let node = this.head;
    while (node && node.next !== null) {
      node = node.next;
      if (node.value === value) {
        return true;
      }
    }
    return false;
  }

  // MEDIUM: Reverse the linked list
  reverse(): void {
    let prev: ListNode | null = null;
    let current: ListNode | null = this.head;

    while (current) {
      const nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
    this.head = prev;
  }

  // MEDIUM: Remove a node by value
  remove(value: number): void {
    while (this.head !== null && this.head.value === value) {
      this.head = this.head.next;
    }
    let node = this.head;
    while (node && node.next !== null) {
      if (node.next.value === value) {
        node.next = node.next.next;
      } else {
        node = node.next;
      }
    }
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

console.log("Linked List Find 3:", linkedList.find(3)); // Expected: true
linkedList.reverse();
console.log("Linked List Reversed Find 3:", linkedList.find(3)); // Expected: true
linkedList.remove(3);
console.log("Linked List Find 3 After Removal:", linkedList.find(3)); // Expected: false
