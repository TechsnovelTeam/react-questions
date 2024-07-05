// Is there anything wrong with this code? Why? refactor the code.

class Point {
    constructor(public x: number, public y: number) {}
}

function myFunction(p1: any): void {
    console.log('the number is:', p1.x);
}

// First usage
const obj1 = { x: 5, y: 3 };
myFunction(obj1);

// Second usage
const obj2 = { y: 55 };
myFunction(obj2);

// Third usage
const obj3: Point = new Point(77, 88);
myFunction(obj3);