const word1 = "abc";
const word2 = "xyz";

const list = [...word1, ...word2];
console.log(list);

//// 직사각형 만들기
class Shape {
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height
 }
}

let rec1 = new Shape(3,4)
console.log(rec1.getArea());

/// 클래스 상속
class Rectangle extends Shape {
    constructor(width,height){
        super(width,height)
    }

    getDiagonal(){
        Math.sqrt(this.width * this.width + this.height * this.height)
    }
}

class Triangle extends Shape {
    constructor(width,height){
        super(width,height)
    }

    getArea(){
        return (this.width * this.height) * 0.5
    }
}

class Circle extends Shape {
    constructor(width,height,radius){
        super(width,height)
        this.raduis = radius
    }

    getArea(){
        const PI = Math.PI
        let area = PI * this.radius * this.radius;
        return area;
    }
}

