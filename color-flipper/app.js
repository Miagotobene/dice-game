const colors = ['green', 'red', 'blue', 'yellow', 'pink', 'rgba(133,122,200)', "#f15025"];

if (typeof window !== "undefined"){

    const btn = document.getElementById('btn');
    console.log(btn);

    const color = document.querySelector('.color');
    console.log(color)

    btn.addEventListener('click', function(){
    // get random colors from the colors array
    const randomNumber = getRandomNumber()
    console.log(randomNumber);


    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

})
}


function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}