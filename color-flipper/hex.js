const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

if (typeof window !== "undefined"){
    const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    // generate random hex color from the hex array
    let hexColor = '#';
    // set up a loop that runs six time to get a random value from hex array and add it to the hexColor array
    
    for (let i = 0; i < 6; i++){
        const randomNumber = getRandomNumber();
        hexColor += hex[randomNumber]
    }

    console.log(hexColor)

    // target body and text content
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor

})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}

}
