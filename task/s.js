
const students =[
    {
        id : 1,
        name : "JOHN",
        age : 22,
        marks : 85,
        skills : ["js","node"]
    },
    {
        id : 2,
        name : "PETER",
        age : 21,
        marks : 90,
        skills : ["js","node"]

    }
];
const result = students.some(student => {
   // debugger;
    return student.age == 22;
});

console.log(result);