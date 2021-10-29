const profileButtons = document.querySelectorAll("button");

const profileAlert = event => {
    if(event.target.id == "color"){
        alert("My favorite colors are black and red");
    } else if(event.target.id == "place"){
        alert("My favorite place is where ever my bed is.")
    } else {
        alert("My favorite ritual is my bedtime routine.")
    }
}

profileButtons.forEach(element => element.addEventListener('click',profileAlert));

