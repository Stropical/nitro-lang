var u1:any = "123";
var u2:any = "abc";
var u3:any = [12];
u3.push("15");
console.log(10 - u1++, u1);
console.log(10 - u1--, u1);
console.log(10 - u2++, u2);
console.log(10 - u2--, u2);
console.log(10 - u3[1]++, u3[1]);
console.log(10 - u3[1]--, u3[1]);
