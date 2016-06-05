// JavaScript 有5个原始类型: 布尔类型，数字，字符串，null 和 undefined
// 我怀疑原始类型的数据存储在 栈中，但是一般的Object 存在堆中
// String 是一个 Object, 不是原始的字符串
var s = new String("hello");
console.log(typeof s); // object

 s = s + ' world';
 console.log(typeof s); // String, 被隐式的转换成了 字符串

var s1 = new String("hello");
var s2 = new String("hello");
// false， 因为不同的String Object 对应的内存地址不一样
console.log(s1 === s2);

// 原始的字符串对象的内存地址是一样的
console.log("hello" === "hello");

// 调用原始字符串上的 toUpperCase 方法
console.log("hello".toUpperCase());
console.log(s.toUpperCase());
console.log(s1.toUpperCase());

// 设置原始对象的属性，但不会对其产生影响
"hello".someProperty = 17;
console.log("hello".someProperty); //undefined
s1.someProperty = 17;
console.log(s1.someProperty); // 17

