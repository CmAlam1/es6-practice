// function add (num1, num2 = 20){
//     // if( num2 == undefined){
//     //     num2 = 5;
//     // }
//     // num2 = num2 || 5;
//     return num1 + num2;
// }

// const total = add (30);
// console.log(total);

const students = [
    {id:21, name:'omar sunny'},
    {id:22, name:'omar al'},
    {id:23, name:'omar sal'},
    {id:24, name:'omar tal'}
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id>40);
console.log(ids);