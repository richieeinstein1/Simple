class User {
	constructor(name) {
		this.name = name;
	}

	sayHi() {
		alert(`Hello, ${this.name}`);
	}
}


let user = User("World");
user.sayHi()