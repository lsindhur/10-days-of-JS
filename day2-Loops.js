function vowelsAndConsonants(s) {
    let vowels = '';
    let consonants = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u' || 
            s[i] === 'A' || s[i] === 'E' || s[i] === 'I' || s[i] === 'O' || s[i] === 'U') {
            vowels += s[i];
        } else {
            consonants += s[i];
        }
    }

    for (let i = 0; i < vowels.length; i++) {
        console.log(vowels[i]);
    }

    for (let i = 0; i < consonants.length; i++) {
        console.log(consonants[i]);
    }
}
