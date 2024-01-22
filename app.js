
let isRightImage = true;

function detectSide() {

    if (isRightImage) {
        document.querySelector('header').style.backgroundImage = 'url("./assets/light tower coastal left.png")';
        document.querySelector('.header__btns').style = 
        `position: absolute;
        top: 40%;
        left: 20%;
        height: 75px;
        background-color:#0f3252;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;`;
        
        document.querySelector('.header__desc').style = `
        position: absolute;
        top: 20%;
        right: 5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        `;

        document.querySelector('.header__desc--title').innerHTML = `<h1 class="header__desc--title">Clients</h1>`
        document.querySelector('.btn').innerHTML = `<a href="#" class="btn">Companies</a>`

    } else {
        document.querySelector('header').style.backgroundImage = 'url("./assets/light tower coastal right.png")';
        document.querySelector('.header__btns').style = 
        `position: absolute;
        top: 40%;
        right: 20%;
        height: 75px;
        background-color:#0f3252;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;`;

        document.querySelector('.header__desc').style = `
        position: absolute;
        top: 20%;
        left: 5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        `;

        document.querySelector('.header__desc--title').innerHTML = `<h1 class="header__desc--title">Companies</h1>`
        document.querySelector('.btn').innerHTML = `<a href="#" class="btn">Clients</a>`


    }
    isRightImage = !isRightImage;
}

