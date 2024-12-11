// Function to create animated hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Call createHeart function every 500ms
setInterval(createHeart, 500);

// Add event listener to the button
document.getElementById('surprise-btn').addEventListener('click', () => {
    alert("Would you like to go to a coffee date after classes on Monday?");
});
