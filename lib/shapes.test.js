const shapesGenerator = require('./shapes');

describe('shapesGenerator', () => {
  it('Should generate svg for a square', () => {
    const userText = 'SVG';
    const textColor = 'white';
    const userShape = 'square';
    const shapeColor = 'blue';

    const expectedSvg = 
    `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect width="18.75em" height="18.75em" fill="${shapeColor}" />
    <text x="50%" y="50%" fill="${textColor}" font-size="5em" font-family="Arial, sans-serif" text-anchor="middle" dy="0.35em">${userText}</text>
    </svg>`;
    const generatedSvg = shapesGenerator(userText, textColor, userShape, shapeColor);
    expect(generatedSvg).toBe(expectedSvg);
  });
});