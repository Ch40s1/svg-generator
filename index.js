const fs = require('fs');
const inquirer = require('inquirer');

// Ask the questions 
const questions = [
  {
    // question asks user for the text they want
    type: "input",
    name: "unserText",
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
});


// get user answers
// import data 
// based on answers we call a function that generates a shape
// this calls another function that applies the css
// write file and generate svg
