// &&(and) ||(or) - and는 둘다 참이어야 참, or은 둘중 하나라도 참이면 참

const x = 5;
const result = x || 100; // 
console.log(result);

const y = 7;
const result3 = x < y && 'yy가 큼';
console.log(result3);

// falsy undefined, null, 0, false, '', Nan
let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);
