function reverseString(s) {
try{
    s = s.split('').reverse().join('');
} catch(er) {
    console.log(er.message);
} finally {
    console.log(s);
}
}

reverseString(Number(1234));

// why does the program stop when I call reverseString(Sindhu); Isn't it supposed to give an output of the error message?


