class DynamicQueue{
    constructor(){
        this.queue = [] //array to hold stack elements
    }

    enqueue(value) {
		this.queue.unshift(value);
        return `${value} added to queue successfully`
	}

	dequeue() {
        if(this.isEmpty()){
            return 'queue is empty, no elements to remove'
        }
        return `element ${this.queue.shift()} removed successfully`
	}

	peek() {
        if(this.isEmpty()){
            return 'queue is empty , no next element'
        }
		return `the next element is ${this.queue[0]}`
	}

	size() {
		return `the size of queue is ${this.queue.length}`;
	}

	isEmpty() {
		return this.queue.length === 0;
	}
}

const queue = new DynamicQueue()

let resultElement = document.getElementById('result')

//Enqueue Operation
document.getElementById('enqueue').addEventListener('click' , ()=>{
    let input = document.getElementById('push-input').value.trim()
    if(input.length == 0){
      return resultElement.innerText = `input should not be empty for enqueue operation`
    }
    resultElement.innerText = queue.enqueue(input)
})

//Dequeue Operation
document.getElementById('dequeue').addEventListener('click' , ()=>{
    resultElement.innerText = queue.dequeue()
})

//Peek Operation
document.getElementById('peek').addEventListener('click' , ()=>{
    resultElement.innerText = queue.peek()
})

//size Operation
document.getElementById('size').addEventListener('click' , ()=>{
    resultElement.innerText = queue.size()
})


