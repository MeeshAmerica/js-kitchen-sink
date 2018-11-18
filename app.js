// console.log ('Hello JS Kitchen Sink Lab');
 var name = 'Meschelle';
// console.log (name);
// const usStateNumber = 50;
// console.log (usStateNumber);
// var val = 8 + 5;
// console.log (val);

//Code below displays "Back of the Line!" if the first letter of the var name is greater than L. If not, it displays "Next!" 
// if (name.substring(0,1) > "L") {
//     alert('Back of the Line!');
// } else {
//     alert('Next!');
// }

function sayHello() {
    alert("Hello World!");
}
//sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert(`Sorry ${name} you aren't old enough to view this page!`);
    }
}

checkAge('Charles', 21);

let veggies = ['Green Beans', 'Corn', 'Carrots', 'Pea'];
console.log(veggies.length);

for(let i = 0; i < veggies.length; i++){
    console.log(veggies[i]);
}
