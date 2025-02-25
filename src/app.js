// Task 1: Implement the Color Picker

const paintCanvas = document.querySelector(".js-paint");
const colorPicker = document.querySelector(".js-color-picker");
const context = paintCanvas.getContext("2d");

// When the color changes, update the context.strokeStyle with the new color
colorPicker.addEventListener("change", event => {
  context.strokeStyle = event.target.value; // Update the stroke color
});

// Task 2: Implement the Line Width Adjuster

// Get the range input and label elements
const lineWidthRange = document.querySelector(".js-line-range");
const lineWidthLabel = document.querySelector(".js-range-value"); // Label for displaying value

// Set up an event listener on the range input to update the line width
lineWidthRange.addEventListener("input", event => {
    const width = event.target.value;
    context.lineWidth = width; // Update the line width for the canvas drawing
    lineWidthLabel.innerHTML = width; // Update the displayed value
});

// Task 3: Implement the Drawing Functionality

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
    
    context.beginPath(); // Begin the path
    context.moveTo(x, y); // Move to the starting point
    context.lineTo(newX, newY); // Draw the line to the new position
    context.stroke(); // Apply the stroke
    
    [x, y] = [newX, newY]; // Update the coordinates
  }
};

// Set up the mouse event listeners
paintCanvas.addEventListener("mousedown", startDrawing);
paintCanvas.addEventListener("mouseup", stopDrawing);
paintCanvas.addEventListener("mousemove", drawLine);

    // 5. Update the coordinates
  }
};

// Set up the mouse event listeners
//Hint: You need to call the correct functions (e.g., startDrawing, stopDrawing, drawLine) when the mouse events occur on the canvas.
