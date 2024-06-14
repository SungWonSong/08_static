// 구조분해 할당
// const arr1 = [1,2,3,4,5];
// const arr2 = ['a','b','c'];

// const { title } = require("process");

// const [one, two, three, four, five] = arr1;
// console.log(one, two, three, four, five)

// const [x,y,z, alpha] = arr2;
// console.log(x,y,z, alpha);

let num1 = 1;
let num2 = 2;

// 변수값의 교환, 2개이 변수값을 교환할때 제3의 변수를 사용, 지금 x 
console.log('Before : ', num1, num2);
[num2, num1] = [num1, num2]
console.log('After : ', num1, num2);

// 디폴트값을 지정할 수 있다.
const lists = ['apple', 'grape'];
[f1,f2,f3='orange'] = lists;
console.log(f1,f2,f3);

// 객체, Object : key 와 value, {}

const obj = {
    title : '엘리먼트',
    content : 'fun',
    num : 5
}


// 표기법
console.log(obj.content);
console.log(obj['content']);


// 객체 구조 분해 - 구조분해는 객체에도 사용할 수 있다.
const {num, title, content, star=1000} = obj;
console.log(num, title,content);

const {a1, b1, c1} = obj; // 같은 key값이 없으면 Undefined로 나온다.
console.log(a1,b1,c1); // 결과 = 셋다 Undefined

// undefined : 변수는 할당되었지만 (초기화), 값이 할당 x

const lectureInfo = {
    name : '코딩온',
    part : 'web',
    leader : 'song'
}

function getInfo(lecture){
    const {name, part,leader} = lecture;
    const output = `${name} 강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader} 입니다.`
    console.log(output);
}

getInfo(lectureInfo)