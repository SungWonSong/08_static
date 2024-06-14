const { log } = require("console");

// spread 연산자 ...
const a = [1,2,3]
const b = [4,5]

const spread = [...a, ...b]
console.log(spread);


const c = [...'HELLO']

// 기존방식
const d = 'Hello'.split('');
console.log(d);

// spread 연산자를 Object에다가 사용
const chip = {
    base : 'chip',
    company : 'lotte'
};

const potato_chip = {
    ...chip,
    flavor:'potato',
}

console.log(chip);
console.log(potato_chip);

// ---------------------------
// rest 파라미터
// 함수에서 사용시
const values = [10,20,30,40,50,60];
function get(a,b, ...rest){  // 순서대로 읽고 나머지는 rest 넣어줘
    console.log(a,b);
    console.log(rest);
}
get(...values);


// ----------------------------
const icecream = {
    company: 'lotte',
    flavor: 'choco',
    price: 1000,
  };

const { flavor, ...rest } = icecream;
console.log(flavor);
console.log(rest);

// --- 배열에서 사용
const number = [1,2,3,4,5,6,7];
const [one1, two1, ...rest2] = number;
console.log(one1,two1);
console.log(rest2);