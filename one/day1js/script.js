// 
function calculation() {
    return this.length * this.breadth;
    }

    const rectangle = {
        length: 10,
        breadth:5,
        area: calculation
};
const square = {
    length:10,
    breadth:10,
    area: calculation
};
console.log(rectangle.area());
console.log(square.area());
