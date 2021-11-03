const transpose = require('./matrix_transposition')

const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters).map(ts => ts.join(''));
    let hasWord = false;

    for (l of horizontalJoin) {
        if (l.includes(word))  {
            hasWord = true;
            return hasWord;
        } else {
            hasWord = false;
        } 
    }
    for (ele of verticalJoin) {
        if (ele.includes(word)) {
            hasWord = true;
            break;
        } else {
            hasWord = false;
        }
    }
    return hasWord;
}

module.exports = wordSearch