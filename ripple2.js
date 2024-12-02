// // script.js

// // Select the glass surface
// const glassSurface = document.getElementById("glassSurface");

// // Function to create crack lines
// function createCrackLines(x, y) {
//     const numberOfLines = Math.random() * 6 + 4; // Random number of cracks (4–10)
    
//     for (let i = 0; i < numberOfLines; i++) {
//         const crackLine = document.createElement("div");
//         crackLine.classList.add("crack-line");

//         // Randomize crack length and rotation
//         const angle = Math.random() * 360; // Random angle
//         const length = Math.random() * 80 + 50; // Random length between 50 and 130px
//         crackLine.style.height = `${length}px`;

//         // Position crack at the click location
//         crackLine.style.left = `${x}px`;
//         crackLine.style.top = `${y}px`;
//         crackLine.style.transform = `rotate(${angle}deg)`;

//         // Add the crack to the glass surface
//         glassSurface.appendChild(crackLine);

//         // Remove the crack after the animation ends
//         setTimeout(() => {
//             crackLine.remove();
//         }, 2000);
//     }
// }

// // Event listener for user clicks
// glassSurface.addEventListener("click", (e) => {
//     const { clientX, clientY } = e;
//     createCrackLines(clientX, clientY);
// });

// script.js



/////////////////////////////////////



// // Select the glass surface
// const glassSurface = document.getElementById("glassSurface");

// // Function to create fractured cracks that look like a broken mirror
// function createShatteredCracks(x, y) {
//     const numberOfLines = Math.floor(Math.random() * 10 + 8); // More lines for a shattered effect
    
//     for (let i = 0; i < numberOfLines; i++) {
//         const crackLine = document.createElement("div");
//         crackLine.classList.add("crack-line");

//         // Randomize angle, line length, and jaggedness
//         const angle = Math.random() * 360; // Random angle for the crack
//         const length = Math.random() * 200 + 10; // Random length between 50px and 150px
//         const jaggedness = Math.random() * 10 - 15; // Jaggedness for fractured effect
//         const offsetX = Math.random() * 120 - .5; // Small horizontal offset
//         const offsetY = Math.random() * 115 - 105; // Small vertical offset
        
//         crackLine.style.height = `${length}px`;
//         crackLine.style.left = `${x + offsetX}px`;
//         crackLine.style.top = `${y + offsetY}px`;

//         // Apply rotation for each crack with jaggedness
//         crackLine.style.transform = `rotate(${angle}deg) translate(${offsetX}px, ${offsetY}px)`;
        
//         // Adding a bit of sharpness by adjusting background transparency
//         crackLine.style.background = `linear-gradient(to bottom, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.8) 100%)`;
        
//         // Apply animation
//         crackLine.style.animation = `crack-expand 1s ease-out forwards`;

//         // Add the crack to the glass surface
//         glassSurface.appendChild(crackLine);

//         // Remove the crack after the animation ends
//         setTimeout(() => {
//             crackLine.remove();
//         }, 1500);
//     }
// }

// // Event listener for user clicks
// glassSurface.addEventListener("click", (e) => {
//     const { clientX, clientY } = e;
//     createShatteredCracks(clientX, clientY);
// });


//////////////////////////

// // Select the glass surface
// const glassSurface = document.getElementById("glassSurface");

// // Function to create fractured cracks that look like a broken mirror
// function createShatteredCracks(x, y) {
//     const numberOfLines = Math.floor(Math.random() * 15 + 10); // Increase the number of cracks for a shattered effect
    
//     for (let i = 0; i < numberOfLines; i++) {
//         const crackLine = document.createElement("div");
//         crackLine.classList.add("crack-line");

//         // Randomize angle, line length, and jaggedness for more chaotic cracks
//         const angle = Math.random() * 360; // Random angle for the crack
//         const length = Math.random() * 500 + 80; // Longer cracks
//         const jaggedness = Math.random() * 15 - 7; // Jaggedness for a fractured effect
//         const offsetX = Math.random() * 50 - 5; // Small horizontal offset for more randomness
//         const offsetY = Math.random() * 50 - 25; // Small vertical offset for randomness
        
//         crackLine.style.height = `${length}px`;
//         crackLine.style.left = `${x + offsetX}px`;
//         crackLine.style.top = `${y + offsetY}px`;

//         // Apply rotation and jagged effect
//         crackLine.style.transform = `rotate(${angle}deg) translate(${offsetX}px, ${offsetY}px)`;
        
//         // Sharp look with gradient to simulate the crack
//         crackLine.style.background = `linear-gradient(to bottom, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.8) 100%)`;
        
//         // Add the crack to the glass surface without removing it (for a more persistent effect)
//         glassSurface.appendChild(crackLine);
//     }
// }

// // Event listener for user clicks
// glassSurface.addEventListener("click", (e) => {
//     const { clientX, clientY } = e;
//     createShatteredCracks(clientX, clientY);
// });




const glassSurface = document.getElementById("glassSurface");


function createShatteredCracks(x, y) {
    const numberOfLines = Math.floor(Math.random() * 65 - 10); 
    
    for (let i = 0; i < numberOfLines; i++) {
        const crackLine = document.createElement("div");
        crackLine.classList.add("crack-line");

        const angle = Math.random() * 360; 
        const length = Math.random() * 700 - 80; 
        const offsetX = Math.random() * 30 - 15; 
        const offsetY = Math.random() * 30 + 5; 

       
        crackLine.style.height = `${length}px`;
        crackLine.style.left = `${x + offsetX}px`;
        crackLine.style.top = `${y + offsetY}px`;

        crackLine.style.transform = `rotate(${angle}deg)`;

        const curve = document.createElement("div");
        curve.style.position = "absolute";
        curve.style.width = "10%";
        curve.style.height = "20%";
        curve.style.background = `linear-gradient(to bottom, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.8) 100%)`;
        curve.style.transition = "transform 0.5s ease-out";


        curve.style.transform = `skewY(${Math.random() * 15 - 7}deg)`;
        crackLine.appendChild(curve);
        glassSurface.appendChild(crackLine);
    }

    const numberOfPieces = Math.floor(Math.random() * 2 + 5);

    for (let i = 0; i < numberOfPieces; i++) {
        const piece = document.createElement("div");
        piece.classList.add("shattered-piece");
        const pieceWidth = Math.random() * 50 + 20; 
        const pieceHeight = Math.random() * 150 + 50; 
        const pieceX = Math.random() * (window.innerWidth - pieceWidth);
        const pieceY = Math.random() * (window.innerHeight - pieceHeight);

        piece.style.width = `${pieceWidth}px`;
        piece.style.height = `${pieceHeight}px`;
        piece.style.left = `${pieceX}px`;
        piece.style.top = `${pieceY}px`;

        const clipX1 = Math.random() * 10;
        const clipY1 = Math.random() * 2;
        const clipX2 = Math.random() * 5;
        const clipY2 = Math.random() * 7;
        
        piece.style.clipPath = `polygon(${clipX1}% ${clipY1}%, ${100 - clipX1}% ${clipY1}%, ${100 - clipX2}% ${100 - clipY2}%, ${clipX2}% ${100 - clipY2}%)`;

        glassSurface.appendChild(piece);
    }
}

glassSurface.addEventListener("click", (e) => {
    const { clientX, clientY } = e;
    createShatteredCracks(clientX, clientY);
});

setInterval(() => {
    piece.style.left = `${Math.random() * window.innerWidth}px`;
    piece.style.top = `${Math.random() * window.innerHeight}px`;
}, 3000);
