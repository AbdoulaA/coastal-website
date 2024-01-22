// function to detect which side of the screen the cursor is on

function detectCursorSide() {
    window.addEventListener('mousemove', function(event) {
        if (event.clientX < window.innerWidth / 2) {
            document.querySelector('header').style.backgroundImage = 'url("./assets/light tower coastal right.png")';
        } else {
            document.querySelector('header').style.backgroundImage = 'url("./assets/light tower coastal left.png")';
        }
    });
}
