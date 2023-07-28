const inquirer = require("inquirer");
const fs = require("fs");

const confirmAnswerValidator = async (input) => {
    if (input.length > 3) {
    return 'Incorrect asnwer';
    }
    return true;
}
const questions = [
    {
        type: "input",
        name: "shapeColor",
        message: "Input a color for your shape.",
    },

    {
        type: "input",
        name: "textColor",
        message: "Input a color for the text.",
    },

    {
        type: "list",
        name: "shape",
        message: "Choose a shape type.",
        choices: ["triangle", "circle", "square"]
    },

    {
        type: "input",
        name: "text",
        message: "Input 3 letters for your logo.",
        validate: confirmAnswerValidator
    },
]

function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log(responses)
        // fs.writeFile("logo.svg", "shape content", (err) =>
        // err ? console.log(err) : console.log("Logo created")
        // )
    })
}


init()