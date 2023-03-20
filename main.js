
let str = `
010-1234-56789
thehello@naver.com
http://img.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
`;

const regexp = new RegExp('the','gi');  //g-모두찾는것 i 대소문자 안가린다
const regexpliter = /the/gi;
console.log(str.match(regexp));
console.log(str.match(regexpliter));

const regexptest = /fox/gi;
console.log(regexptest.test(str));

console.log( str.replace(regexptest, 'AAA'));
console.log( str )
//str = str.replace(regexptest, 'AAA');
//console.log( str )

console.log( str.match(/\./gi)); // 마침표 검색
console.log( str.match(/\.$/gi)); // 줄의 끝에있는 마침표 검색
console.log( str.match(/\.$/gim)); //줄의 끝에있는 마침표 검색


console.log( str.match(/d$/gm));
console.log( str.match(/^t/gm));

console.log( str.match(/./g));
console.log( str.match(/h..p/g));

console.log( str.match(/fox|dog/g));
console.log( str.match(/https?/g));  // http 가 a s가 b 에 해당
console.log( str.match(/\w{2,3}/g));  // \w 숫자포함 알파벳
console.log( str.match(/\b\w{2,3}\b/g));  // \b 앞뒤가 공백 및 특수문자

console.log( str.match(/[fox]/g));  // f또는 o또는 x일치
console.log( str.match(/[0-9]{1,}/g));  // 숫자이면서 1글자 이상의 글자

console.log( str.match(/\bf\w{1,}\b/g)); 

const h = `    the hello   world !   
`;
console.log( h.replace(/\s/g, ''));

console.log(str.match(/.{1,}(?=@)/g) );
console.log(str.match(/(?<=@).{1,}/g) );