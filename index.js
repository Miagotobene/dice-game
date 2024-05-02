// create a new variable called randomNumber1 then set the value of this variable to a random number between 1 and 6. 

let randomNumber1 = Math.floor(Math.random() * 6)+1;
console.log(randomNumber1);

// Use the random number you created in the last step to pick out a random dice image between dice1.png to dice 6.png then place this image inside the left <img> element.

const imageArray = [
    "url(./images/dice1.png)",
    "url(./images/dice2.png)",
    "url(./images/dice3.png)",
    "url(./images/dice4.png)",
    "url(./images/dice5.png)",
    "url(./images/dice6.png)"
]


let randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
console.log(randomDiceImage);

// path to images 

let randomImageSource = 'images/' + randomDiceImage // images/dice1.png - images/dice6.png
console.log(randomImageSource);

if (typeof window !== "undefined") {
    // browser code
    let image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);

}
