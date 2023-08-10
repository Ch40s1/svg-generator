const shapesGenerator = require('./shapes');

describe('shapesGenerator', () => {
  it('Should generate svg for a Square', () => {
    const userText = 'SVG';
    const textColor = 'white';
    const userShape = 'square';
    const shapeColor = 'blue';

    const expectedSvg = 
    `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="18.75em" height="18.75em" fill="${shapeColor}" />
        <text x="50%" y="50%" fill="${textColor}" font-size="5em" font-family="Times" text-anchor="middle" dy="0.35em">${userText}</text>
      </svg>`;
    const generatedSvg = shapesGenerator(userText, textColor, userShape, shapeColor);
    expect(generatedSvg).toBe(expectedSvg);
  });
});


describe('shapesGenerator', () => {
  it('Should generate svg for a Triangle', () => {
    const userText = 'SVG';
    const textColor = 'white';
    const userShape = 'triangle';
    const shapeColor = 'blue';

    const expectedSvg = 
    `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,25 275,275 25,275" fill="${shapeColor}" />
        <text x="50%" y="50%" fill="${textColor}" font-size="5em" font-family="Times" text-anchor="middle" dy="0.35em">${userText}</text>
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