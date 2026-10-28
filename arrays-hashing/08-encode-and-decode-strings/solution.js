function decode(s) {
  let res = [];
  let i = 0;

  while (i < s.length) {
    const j = s.indexOf("#", i);

    const strLength = parseInt(s.slice(i, j));

    const word = s.slice(j + 1, j + 1 + strLength);
    res.push(word);

    i = j + 1 + strLength;
  }

  return res;
}

function encode(strs) {
  let encoded = "";

  for (let word of strs) {
    encoded += `${word.length}#${word}`;
  }
  return encoded;
}

// let strsEncode = encode(["lint", "code"]);             // [ 'lint', 'code' ]
// let strsEncode = encode(["4#lint", "#code"]);           // [ '4#lint', '#code' ]
// let strsEncode = encode([""]);                           // [ '' ]
let strsEncode = encode([]); // []
console.log(strsEncode);

let strsDecode = decode(strsEncode);
console.log(strsDecode);
