console.log("hello World")
document.getElementById('p1').textContent = 'updated text';
let c = document.getElementById('pi').textContent;
console.log(c);
alert(c);

const button = document.getElementById('myButtom');
let  a = 1;
let b = 2;
alert(a, typeof(a))
alert(b, typeof(b))

alert(a + b)

function wasClick(){
    alert("the buttom was click")
    document.getElementById('p2') = a + b;
}