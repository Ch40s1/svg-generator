const shapesGenerator = require('./shapes');
// this is a test to make sure the code works
describe('shapesGenerator', () => {
  // it should generate a square
  it('Should generate svg for a Square', () => {
    // these are some examples of typical answers for the svg generator
    const userText = 'SVG';
    const textColor = 'white';
    const userShape = 'square';
    const shapeColor = 'blue';
    // this is we eexpect the svg to be generated
    const expectedSvg = 
    `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="18.75em" height="18.75em" fill="${shapeColor}" />
        <text x="50%" y="50%" fill="${textColor}" font-size="5em" font-family="Times" text-anchor="middle" dy="0.35em">${userText}</text>
      </svg>`;
      // call the function and add the data as arguments
    const generatedSvg = shapesGenerator(userText, textColor, userShape, shapeColor);
    // we expect the generated svg to be the above svg
    expect(generatedSvg).toBe(expectedSvg);
  });
});
// the same idea goes to all the other tests

describe('shapesGenerator', () => {
  it('Should generate svg for a Triangle', () => {
    const userText = 'SVG';
    const textColor = 'white';
    const userShape = 'triangle';
    const shapeColor = 'blue';

    const expectedSvg = 
    `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,25 275,275 25,275" fill="${shapeColor}" />
        <text x="50%" y="50%" fill="${textColor}" font-size="3em" font-family="Times" text-anchor="middle" dy="1em">${userText}</text>
      </svg>`;
    const generatedSvg = shapesGenerator(userText, textColor, userShape, shapeColor);
    expect(generatedSvg).toBe(expectedSvg);
  });
});


describe('shapesGenerator', () => {
  it('Should generate svg for a Circle', () => {
    const userText = 'SVG';
    const textColor = 'white';
    const userShape = 'circle';
    const shapeColor = 'blue';

    const expectedSvg = 
    `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="150" r="137.5" fill="${shapeColor}" />
        <text x="50%" y="50%" fill="${textColor}" font-size="5em" font-family="Times" text-anchor="middle" dy="0.35em">${userText}</text>
      </svg>`;
    const generatedSvg = shapesGenerator(userText, textColor, userShape, shapeColor);
    expect(generatedSvg).toBe(expectedSvg);
  });
});