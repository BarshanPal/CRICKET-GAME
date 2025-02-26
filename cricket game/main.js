const colors = ['bat', 'ball', 'wicket'];

let randomColor = colors[Math.floor(Math.random() * colors.length)];
console.log(randomColor);

document.querySelector('#may').innerText = 'Choose one button to start the game';

document.getElementById('ballButton').onclick = function() {
    if (randomColor === 'ball') {
        document.querySelector('#may').innerText = 'THE GAME IS DRAW';
    } else if (randomColor === 'wicket') {
        document.querySelector('#may').innerText = 'YOU WON THE GAME';
    } else {
        document.querySelector('#may').innerText = 'YOU LOSE THE GAME';
    }
    setTimeout(function() {
        location.reload();  }, 100); 
};

document.getElementById('batButton').onclick = function() {
    if (randomColor === 'ball') {
        document.querySelector('#may').innerText = 'YOU WON THE GAME';
    } else if (randomColor === 'wicket') {
        document.querySelector('#may').innerText = 'YOU LOSE THE GAME';
    } else {
        document.querySelector('#may').innerText = 'THE GAME IS DRAW';
    }
    setTimeout(function() {
        location.reload(); // Refresh the page after 2 seconds
    }, 2000); // 2000ms = 2 seconds
};

document.getElementById('wicketButton').onclick = function() {
    if (randomColor === 'ball') {
        document.querySelector('#may').innerText = 'YOU LOSE THE GAME';
    } else if (randomColor === 'wicket') {
        document.querySelector('#may').innerText = 'THE GAME IS DRAW';
    } else {
        document.querySelector('#may').innerText = 'YOU WON THE GAME';
    }
    setTimeout(function() {
        location.reload(); // Refresh the page after 2 seconds
    }, 2000); // 2000ms = 2 seconds
};



