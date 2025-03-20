function Person() {
	this.name = "Dinath";
	this.age = 20;

	this.setName = (name) => {
		this.name = name;
		return this;
	};
	this.setAge = (age) => {
		this.age = age;
		return this;
	};
	this.greet = () => {
		document.getElementById("output").innerText = `Hello, I am ${this.name}, ${this.age} years old.`;
        document.getElementById('output').style.color = "green";
		return this;
	};
}



document.getElementById('greet').addEventListener('click',()=>{
    let name = document.getElementById('name').value.trim();
    let age = parseFloat(document.getElementById('age').value.trim());

    if(name === "" || age <= 0){
        document.getElementById('output').innerText = 'enter proper inputs , name should not be empty and age should be greater than 0';
        document.getElementById('output').style.color = "red";
        return;
    }
    
    let person = new Person().setName(name).setAge(age).greet();
})