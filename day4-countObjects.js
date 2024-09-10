function getCount(objects) {
    let counter = 0;
    objects.forEach(ele => {
        if(ele.x === ele.y) {
            counter++
        }
    })
    return counter;
}

console.log(getCount([{x:3,y:4},{x:7,y:7}]))