const fs = require('fs');
const inquirer = require('inquirer');
const shapesGenerator = require('./lib/shapes')

// Ask the questions 
const questions = [
  {
    // question asks user for the text they want
    type: "input",
    name: "userText",
    message: 'What text would you like?'   
  },
  {
    // question asks user for the text color they want
    type: "input",
    name: "textColor",
    message: 'What text color would you like ex:(blue or #F0FFFF)?'   
  },
  {
    // prompts a list of shapes
    type: "list",
    name: "userShape",
    message: "What shape would you like??",
    choices: ['Square', 'Triangle', 'circle']
  },
  {
    // question asks user for the shape color they want
    type: "input",
    name: "shapeColor",
    message: 'What shape color would you like ex:(blue or #F0FFFF)?'   
  },
];
inquirer
.prompt(questions)
.then((data) =>{
  console.log(JSON.stringify(data));
  // let userText = data.userText;
  // let textColor = data.textColor;
  // let userShape = data.userShape;
  // let shapeColor = data.shapeColor; 
  let svg = shapesGenerator(data.userText, data.textColor, data.userShape.toLowerCase(), data.shapeColor);
  // console.log(userText + textColor + userShape + shapeColor);
  console.log('this is svg:'+ svg);
  fs.writeFile('./lib/logo.svg', svg, (err) => {
    if (err) throw err;
    console.log('SVG updated!');
  });
});
