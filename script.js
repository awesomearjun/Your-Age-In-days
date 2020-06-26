const resetButton = document.querySelector('#reset');
const startButton = document.querySelector('#start');

startButton.addEventListener('click', () => {
    const year = prompt('Enter The Current Year:');
    const birthYear = prompt('Enter The Year You Were Born:');
    const daysOld = (year - birthYear) * 365;
    const content = document.createTextNode(`You would be ${daysOld} days old if you were born on that year`);
    const div = document.querySelector('#return');
    div.appendChild(content);
});

resetButton.addEventListener('click', () => {
    const acc = document.querySelector('#return');
    acc.innerHTML = '';
});