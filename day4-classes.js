class Polygon{
    constructor(arr) {
        this.arr= arr;
    }

    perimeter() {
        return this.arr.reduce((acc,ele) => acc+ele,0)
    }
}

const Rectangle = new Polygon([1,2,3,4])
console.log(Rectangle.arr)