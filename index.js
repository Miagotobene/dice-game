// create a new variable called randomNumber1 then set the value of this variable to a random number between 1 and 6. 

let randomNumber1 = Math.floor(Math.random() * 6)+1;
console.log(randomNumber1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

// Use the random number you created in the last step to pick out a random dice image between dice1.png to dice 6.png then place this image inside the left <img> element.
let randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
console.log(randomDiceImage);

// path to images 
let randomImageSource = 'images/' + randomDiceImage // images/dice1.png - images/dice6.png
console.log(randomImageSource);

let randomImageSource2 = "images/dice" + randomNumber2 + ".png";
console.log(randomImageSource2);

// 
if (typeof window !== "undefined") {
    // browser code for left image
    let image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);

     // browser code for right image
     let image2 = document.querySelectorAll("img")[1];
     image2.setAttribute("src", randomImageSource2);

     // Change the text in the h1, (which currently says Refresh Me) to show which user won or if there was a draw depending on the dice values of player 1 (left) and player 2 (right).
     if (randomNumber1> randomNumber2) {
        document.querySelector('h1').textContent = "🚩 Play 1 Wins!";
     } else if (randomNumber2 > randomNumber1) {
        document.querySelector('h1').textContent = "🚩 Play 2 Wins!";
     } else {
        document.querySelector('h1').textContent = "Draw!";
     }

}
