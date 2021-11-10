const btn = document.querySelector('#btn');
const color = document.querySelector('.color');
const hex = [1, 2, 3, 4, 5, 6, 7, 8 ,"a", "b", "c", "d", "e", "f", "g"];

btn.addEventListener('click', () => {
    let randomColor = '#';
    for (i = 0; i < 6; i++){
        randomColor += hex[randomNumber()];
    }
    color.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
})
const randomNumber = () => {
    return Math.floor(Math.random() * hex.length);
}
randomNumber();