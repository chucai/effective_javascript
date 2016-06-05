// == 和 ===
// 1. == 会将比较的两个值进行隐式的转换
// 2. === 是严格的相等
// 3. 不要使用 == ，因为隐式转换不可知

console.log("1" == true); // true
console.log("1" === true); // false
