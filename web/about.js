console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form sumbitted successfully!")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let catpic = document.querySelector('img');

function compliment(evt){
	console.log(evt);
	alert("Nice Moves!");
}

catpic.addEventListener('mouseover',compliment)