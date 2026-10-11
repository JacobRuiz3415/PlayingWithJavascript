console.log("hello World")
document.getElementById('p1').textContent = 'updated text';
let c = document.getElementById('pi').textContent;
console.log(c);
alert(c);

const button = document.getElementById('myButtom');

button.addEventListener('click', function(){
    alert('button was clicked!');
});