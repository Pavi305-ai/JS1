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

    },
    {
        id : 3,
        name : "Rohan",
        age : 45,
        marks : 89,
        skills : ["react","asp.net"]

    },
    {
        id : 4,
        name : "ramya",
        age : 54,
        marks : 99,
        skills : ["python",".netcore"]
    }
];
const result = students.some(student => {
    return student.name == "JOHN";
});

console.log(result);