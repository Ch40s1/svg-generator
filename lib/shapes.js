

function shapesGenerator(userText, textColor, userShape, shapeColor){
  let shapes = 
    {
      'square': `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="18.75em" height="18.75em" fill="${shapeColor}" />
        <text x="50%" y="50%" fill="${textColor}" font-size="5em" font-family="Times" text-anchor="middle" dy="0.35em">${userText}</text>
      </svg>`,

      'triangle': `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,25 275,275 25,275" fill="${shapeColor}" />
        <text x="50%" y="50%" fill="${textColor}" font-size="5em" font-family="Times" text-anchor="middle" dy="0.35em">${userText}</text>
      </svg>`,
    
      'circle': `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="150" r="137.5" fill="${shapeColor}" />
        <text x="50%" y="50%" fill="${textColor}" font-size="5em" font-family="Times" text-anchor="middle" dy="0.35em">${userText}</text>
      </svg>`,
    };

  // if the data is a swaure then look for the square in the object and return its value
  if(shapes.hasOwnProperty(userShape)){
    const chosenShape = shapes[userShape];
    return chosenShape;
  }else{
    return '';
  }
}

module.exports = shapesGenerator;
