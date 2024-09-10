function Rectangle(a, b) {
    let rectangle = new Object
    rectangle.length = a;
    rectangle.width = b;
    rectangle.perimeter = 2 * (a+b);
    rectangle.area = a*b
    return rectangle;
}

console.log(Rectangle(4,5));