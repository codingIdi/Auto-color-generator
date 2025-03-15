// Function to generate a random RGB color
function generateRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    
    return `rgb(${red}, ${green}, ${blue})`;
}



//function to change the background color of the body
function changeBodyColor(){
    let body = document.getElementById("budy");
    let newColor = generateRandomColor();
    body.style.backgroundColor = newColor;
}


function changeButtonColor() {
    let button = document.getElementById("rgb");
    let newColor = generateRandomColor(); // Generate a new random color

    button.style.backgroundColor = newColor;
    button.innerText = newColor;
    
    // Check if the background color is already light blue
    if (button.style.backgroundColor === "rgb(173, 216, 230)") {
        console.log("Color is already light blue");
    } else {
        button.style.backgroundColor = newColor; // Change button background color
        button.innerText = newColor; // Update button text to show the RGB color
    }
}

// Loop function to change the body's background color automatically
async function StartColorLoop() {
    while(true){
        changeBodyColor();
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
}

document.addEventListener("DOMContentLoaded", StartColorLoop);