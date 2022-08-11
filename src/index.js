const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};
//10 === .
//11 === -

decode = (expr) => {
    let startArr = expr.split('');
    let arr = [];
    let result = '';

    for (i = 0; i < startArr.length; i += 10) {
        arr.push(startArr.slice(i, i + 10));
    }

    for (i = 0; i < arr.length; i++) {
        if (arr[i].includes('*')) {
            result += ' ';
            continue;
        }

        let morse = '';

        for (j = 0; j < arr[i].length; j += 2) {
            if (arr[i][j] === '1' && arr[i][j + 1] === '0') {
                morse += '.';
            } else if (arr[i][j] === '1' && arr[i][j + 1] === '1') {
                morse += '-';
            }
        }
        result += MORSE_TABLE[morse];
    }

    return result;

}
module.exports = {
    decode
}