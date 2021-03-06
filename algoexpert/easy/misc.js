//O(nlog(n)) T (due to .sort()) | O(1) S;
function minimumWaitingTime(queries) {
    queries.sort((a,b)=>(a-b))
	
	let sum = 0;
	queries.forEach((query,idx)=> {
		sum += (queries.length-(idx+1)) * query
	})
	return sum									
}


//O(n) T | O(1) S (where n is # of nodes in linked list)
function removeDuplicatesFromLinkedList(linkedList) {
    let curNode = linkedList
	while (curNode) {
        let nextNode = curNode.next;
		while (nextNode && curNode.value === nextNode.value) {
            nextNode = nextNode.next
		}
		curNode.next = nextNode
		curNode = curNode.next
	}
	
	return linkedList
}

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//O(nlog(n)) time | O(1) S
function classPhotos(redShirtHeights, blueShirtHeights) {
	redShirtHeights.sort((a,b)=>a-b);
	blueShirtHeights.sort((a,b)=>a-b);
	let back;
	let front;
	if (redShirtHeights[0] > blueShirtHeights[0]) {
		back = redShirtHeights;
		front = blueShirtHeights;
	} else if (blueShirtHeights[0] > redShirtHeights[0]) {
		back = blueShirtHeights;
		front = redShirtHeights;
	} else return false;
	
  	for (let i = 0; i < redShirtHeights.length; i++) {
		if (back[i] <= front[i]) return false;
	}
	
  	return true;
}