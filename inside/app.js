var nullVar = null;
console.log(typeof nullVar);
// typeof가 리플렉션임


// var foo = new Object();
var foo = {
	name : 'foo',
	age : 30,
	major : 'computer science'
};

var a;

for(a in foo){
	console.log(a, foo[a]);
} //a는 foo 안의 키값이다.

delete foo.name; //객체 foo안의 키값을 지움. 객체는 지울 수 없음.
console.log(foo);


var foo1 = new Object();

var foo2 = {};

function Moon(){
	
}

var foo3 = Moon();

console.log('1', foo1);
console.log('2', foo2);
console.log('3', foo3);