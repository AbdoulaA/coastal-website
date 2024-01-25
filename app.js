// <div class="header__text-box">
//<h1 class="header__title">Coastal Medical Research</h1>
//<h2 class="header__subtitle">Only Getting Brighter.</h2>
//</div>
//<div class="header__btns">
// <a href="#" class="btn" onclick="detectSide()">Clients</a>
// </div>
// <div class="header__desc">
//     <h1 class="header__desc--title">Patients</h1>
//     <h2 class="header__desc--text">Lorem ipsum dolor sit amet,<br> consectetur adipisicing elit.<br>Voluptatibus accusantium<br>tempora exercitationemvoluptatem<br>explicabo. Fuga laboriosam iste odio<br>repellat. Accusamus?</h2>
// </div>




// let isRightImage = true;

// function detectSide() {
//     if (isRightImage) {
//         document.querySelector('header').style.backgroundImage = 'url("./assets/light tower coastal right.png")';
//         document.querySelector('.header__btns').style = 
//         `position: absolute;
//         top: 40%;
//         left: 20%;
//         height: 75px;
//         background-color:#0f3252;
//         border-radius: 15px;
//         display: flex;
//         justify-content: center;
//         align-items: center;`;
        
//         document.querySelector('.header__desc').style = `
//         position: absolute;
//         top: 20%;
//         right: 5%;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         `;

//         document.querySelector('.header__desc--title').innerHTML = `<h1 class="header__desc--title">Clients</h1>`
//         document.querySelector('.btn').innerHTML = `<a href="#" class="btn">Companies</a>`

//     } else {
//         document.querySelector('header').style.backgroundImage = 'url("./assets/light tower coastal left.png")';
//         document.querySelector('.header__btns').style = 
//         `position: absolute;
//         top: 40%;
//         right: 20%;
//         height: 75px;
//         background-color:#0f3252;
//         border-radius: 15px;
//         display: flex;
//         justify-content: center;
//         align-items: center;`;

//         document.querySelector('.header__desc').style = `
//         position: absolute;
//         top: 20%;
//         left: 5%;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         `;

//         document.querySelector('.header__desc--title').innerHTML = `<h1 class="header__desc--title">Companies</h1>`
//         document.querySelector('.btn').innerHTML = `<a href="#" class="btn">Clients</a>`
//     }
//     isRightImage = !isRightImage;
// }



function sideLight(event) {
    const headerPicks = document.querySelector('.header__picks');
    const header = document.querySelector('header');


    const screenWidth = window.innerWidth;

    

    const mouseX = event.clientX;
    

    if (mouseX < screenWidth / 2) {

        console.log("Hovered over the left side of the screen");
        header.style.backgroundImage = 'url("./assets/light tower coastal right.png")';

        
    } 
    else if (mouseX > screenWidth / 2) {
        console.log("Hovered over the right side of the screen");
        header.style.backgroundImage = 'url("./assets/light tower coastal left.png")';

        

    }

    headerPicks.addEventListener('mouseleave', () => {
        header.style.backgroundImage = 'url("./assets/light tower coastal.png")';
    });
   
}

function sideLightOut() {
    let headerPick = document.querySelector('.header__pick');

   
}