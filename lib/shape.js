class Shape {
    constructor(color) {
        this.color = color;
    }
}

class triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182 " fill="${this.color}" />`;
    }
}

class circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
    }
}

class square extends Shape {
    render() {
        return `<rect width="150" height="150" x="50" y="20" fill="${this.color}" />`;
    }
}


module.exports = {Shape, square, triangle, circle};


