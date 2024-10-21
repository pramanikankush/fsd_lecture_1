const students = [
    {name : 'alice', score: 50} , 
    {name : 'bob', score: 65} , 
    {name : 'charlie', score: 75} , 
    {name : 'david', score: 85} , 
    {name : 'emma', score: 90}
]
let newar = students.filter((student) => student.score > 60);
console.log(newar);