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
  '-----': '0'
};

function decode(expr) {
  const arr = [];
  for (let i = 0; i < expr.length; i += 10) {
    arr.push(expr.slice(i, i + 10));
    arr.push(' ');
  }
  const arr1 = [];
  arr.forEach((elem)=>{
      if(elem ==="**********"){
          return arr1.push(' ');
      }else{
    for (let i = 0; i < 10; i += 2) {
        arr1.push(elem.slice(i, i + 2));}
      }
  })
  const morsearr = arr1.map(elem => {
    if (elem === '00') {
        return elem = '';
      }
    if (elem === '10') {
      return elem = '.';
    }
    if (elem === '11') {
        return elem = '-';
      } 
      if (elem === ' ') {
        return elem = ' ';
      }
  });
  const str = morsearr.join('');
  const words = str.split('  ');
  const letters = words.map(w => w.split(' '));
  const decoded = [];

  for (let i = 0; i < letters.length; i++) {
    decoded[i] = [];
    for (let x = 0; x < letters[i].length; x++) {
      if (MORSE_TABLE[letters[i][x]]) {
        decoded[i].push(MORSE_TABLE[letters[i][x]]);
      }
    }
  }
  return decoded.map(arr => arr.join('')).join(' ');
}
    module.exports = {
  decode
};
