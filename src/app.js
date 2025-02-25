// Task 1: Implement the Color Picker

const paintCanvas=document.querySelector(".js-paint")
const colorPicker = document.querySelector(".js-color-picker");
const context=paintCanvas.getContext("2d")

// When the color changes, update the context.strokeStyle with the new color
colorPicker.addEventListener("change", event => {
  const newColor = event.target.value;
  context.strokestyle = event.target.value;
  context.fillStyle = newColor;
  // Update the stroke color
});


// Task 2: Implement the Line Width Adjuster

// Get the range input and label elements
const lineWidthRange=document.querySelector(".js-line-range");
const lineWidthLabel1 =document.querySelector(".js-range-range");


// Set up an event listener on the range input to update the line width
if (lineWidthLabel1){
  lineWidthRange.addEventListener("input", event => {
    const width=event.target.value;
    context.lineWidth = width;
    lineWidthLabel1.innerHTML = width;
  // Update the lineWidthLabel to display the selected width
  // Update the line width for the canvas drawing
});
}



// Task 3: Implement the Drawing Functionality

// Get the canvas element and its 2D context


// Variables to keep track of the mouse state and position
let isMouseDown = false;
let x = 0, y = 0;

// Helper function to stop drawing
const stopDrawing = () => {
  isMouseDown = false;
};

// Helper function to start drawing
const startDrawing = event => {
  isMouseDown = true;
  [x, y] = [event.offsetX, event.offsetY]; // Set starting coordinates
};

// Helper function to draw lines
const drawLine = event => {
  if (isMouseDown) {
    const newX = event.offsetX;
    const newY = event.offsetY;

    // Write your code here to draw a line
    context.beginPath();//Begin the path
    context.moveTo(x,y);//Move to the starting point
    context.lineTo(newX, newY);//Draw the line to the new position
    context.stroke();//Update the stroke
    
    [x, y] = [newX, newY];//Update the coordinates
  }
};

// Set up the mouse event listeners
paintCanvas.addEventListener("mousedown",startDrawing);
paintCanvas.addEventListener("mouseup",stopDrawing);
paintCanvas.addEventListener("mousemove",drawLine);
//Hint: You need to call the correct functions (e.g., startDrawing, stopDrawing, drawLine) when the mouse events occur on the canvas.
