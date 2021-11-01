const pickOne = document.querySelector("#pickOne");

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const restaurants = ['Bon Temps Grill','Judice Inn','Deano\'s Pizza', 'Cafe Habana City','Cafe\' Vermilionville','Johnson\'s Boucaniere']

pickOne.addEventListener('click', () => {
    let randomNum = getRandomNum(0,6)
    const result = document.querySelector('.result')
    result.textContent = restaurants[randomNum];
});

