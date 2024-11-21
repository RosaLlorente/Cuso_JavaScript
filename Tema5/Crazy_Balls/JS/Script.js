//DECLARATION OF GLOBAL VARIABLES
let Counter, DesiredBalls;
//--------------------------------------------------------------------------------------/ᐠ - ˕ -マ
//PROGRAM
window.onload = () => 
{
    //VARIABLE DECLARATION
    const svgParent = document.querySelector("svg");
    const limitX = 1000;
    const limitY = 500;
    DesiredBalls = parseInt(prompt("Enter the number of balls"));
    Counter = document.getElementById("counter");
    
    Counter.innerHTML = DesiredBalls;
    for (let i = 0; i < DesiredBalls; i++) //Creating bubbles
    {
        var speedX = Math.random() * 10; 
        var speedY = Math.random() * 10;
        var radius = Math.random() * 50 + 1;
        var posX = Math.random() * (limitX - 50) + radius; 
        var posY = Math.random() * (limitY - 50) + radius; 

        var Ball = new BallClass(posX, posY, speedX, speedY, limitX, limitY, radius, DesiredBalls, svgParent);
        
        Ball.move();
    }
}

//--------------------------------------------------------------------------------------/ᐠ - ˕ -マ
//CLASSES
//Declaration of the BallClass class
class BallClass 
{
    constructor(positionX, positionY, speedX, speedY, limitX, limitY, radius, DesiredBalls, svgParent) 
    {
        this.positionX = positionX;
        this.positionY = positionY;
        this.speedX = speedX;
        this.speedY = speedY;
        this.limitX = limitX;
        this.limitY = limitY;
        this.radius = radius; 
        this.DesiredBalls = DesiredBalls;
        this.createTag(svgParent);
    }

    createTag(svgParent) 
    {
        this.ball = document.createElementNS("http://www.w3.org/2000/svg", "circle"); //Create a circle element
        this.ball.setAttribute("cx", this.positionX);
        this.ball.setAttribute("cy", this.positionY);
        this.ball.setAttribute("r", this.radius);
        this.ball.setAttribute("stroke", "black");
        this.ball.setAttribute("stroke-width", 1);
        this.ball.setAttribute("fill", color()); 
        svgParent.appendChild(this.ball); //Add the element to the parent SVG

        this.ball.addEventListener("click",() => //Add an event on click
        {
            playSound()
            this.ball.style.opacity = "0" //The bubble disappears
            this.ball.style.transition = "opacity 0.5s";
            
            while (this.speedX > 0 && this.speedY > 0) //Slow down
            {
                this.speedX--;
                this.speedY--;
            }            
            this.speedY = 0;
            updateScore();
        });
    }

    //Method for moving bubbles
    move() 
    {
        setInterval(() => 
        {
            this.positionX += this.speedX;
            this.ball.setAttribute("cx", this.positionX);
            if ((this.positionX + this.radius) > this.limitX || (this.positionX - this.radius) < 0) 
            {
                this.speedX *= -1; //Change of direction
            }

            this.positionY += this.speedY;
            this.ball.setAttribute("cy", this.positionY);
            if ((this.positionY + this.radius) > this.limitY || (this.positionY - this.radius) < 0) 
            {
                this.speedY *= -1; //Change of direction
            }
        }, 20); 
    }
}

//--------------------------------------------------------------------------------------/ᐠ - ˕ -マ
//FUNCTIONS
//Function that returns a random color
function color()
{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return "rgb("+r+","+g+","+b+")";
}

//Function that updates the score
function updateScore()
{
    DesiredBalls--;
    if (DesiredBalls > 0) 
    {
        Counter.innerHTML = DesiredBalls;
    }
    else
    {
        Counter.innerHTML = "0! You have eliminated them all!";
        Counter.style.color = "rgb(255, 255, 153)";
    }
}

//Function that starts the sound
function playSound() 
{
    var KeySound = new Audio('Sounds/bubblepop-01-255624 (mp3cut.net).mp3');
    KeySound.play();
    KeySound.volume = 1.0;
}