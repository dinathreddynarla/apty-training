class DynamicStack{
    constructor(){
        this.stack = [] //array to hold stack elements
    }

    push(value){
        this.stack.push(value);
        return `${value} added to stack successfully`
    }

    pop(){
        if(this.isEmpty()){
            return 'stack is empty, no elements to remove'
        }
        return `element ${this.stack.pop()} removed successfully`
    }

    peek(){
        if(this.isEmpty()){
            return 'stack is empty , no top element'
        }
        return `The Top element is ${this.stack[this.stack.length-1]}`
    }

    isEmpty(){
        return this.stack.length == 0
    }

    printStack(){
        if(this.isEmpty()){
            return 'stack is empty'
        }
        return `The Stack is ${JSON.stringify(this.stack)}`
    }
}

const stack = new DynamicStack()

let resultElement = document.getElementById('result')

//Push Operation
document.getElementById('push').addEventListener('click' , ()=>{
    let input = document.getElementById('push-input').value.trim()
    if(input.length == 0){
      return resultElement.innerText = `input should not be empty for push operation`
    }
    resultElement.innerText = stack.push(input)
})

//Pop Operation
document.getElementById('pop').addEventListener('click' , ()=>{
    resultElement.innerText = stack.pop()
})

//Peek Operation
document.getElementById('peek').addEventListener('click' , ()=>{
    resultElement.innerText = tack.peek()
})

//isEmpty Operation
document.getElementById('is-empty').addEventListener('click' , ()=>{
    resultElement.innerText = `The Stack is ${stack.isEmpty()?'Empty' : 'Not Empty'}`
})

//Print Stack Operation
document.getElementById('print-stack').addEventListener('click' , ()=>{
    resultElement.innerText = stack.printStack()
})
