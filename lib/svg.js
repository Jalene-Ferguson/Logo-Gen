const {circle, triangle, square} = require("./shape");

class svgPic {
    constructor(text, shape, textcolor, shapecolor) {

    if (shape === "square") {
        this.shape = new square(shapecolor);
    }else if (shape === "triangle") {
        this.shape = new triangle(shapecolor);
    }else if (shape === "circle") {
        this.shape = new circle(shapecolor);
    }else {
        throw new ErrorEvent("Shape type is incorrect.")
    }


    this.text = text;
    this.textcolor = textcolor;
}

getsvgPic() {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${this.shape.createsvgPic()}
    `
}
}