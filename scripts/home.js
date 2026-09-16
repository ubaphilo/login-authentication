const boddy = document.getElementById('students')


const students = [
    {
        firstName:'fidelia',
        lastName:'gama',
        age:18,
        department:'robotics',
    },
    {
        firstName:'fruitful',
        lastName:'daniels',
        age:18,
        department:'robotics',
    },
    {
        firstName:'ebube',
        lastName:'sunday',
        age:18,
        department:'robotics',
    },
    {
        firstName:'frances',
        lastName:'okpara',
        age:18,
        department:'robotics',
    },
    {
        firstName:'jennifer',
        lastName:'palms',
        age:18,
        department:'robotics',
    },
    {
        firstName:'samuel',
        lastName:'ophirie',
        age:18,
        department:'robotics',
    },
    {
        firstName:'damilola',
        lastName:'chiza',
        age:18,
        department:'robotics',
    },
    {
        firstName:'gabriel',
        lastName:'musuf',
        age:18,
        department:'robotics',
    },
    {
        firstName:'chidi',
        lastName:'dema',
        age:18,
        department:'robotics',
    },
    {
        firstName:'daniel',
        lastName:'fola',
        age:18,
        department:'robotics',
    }
]
let detail =""
const displayStudents = ()=>{
    
    students.map((student)=>{
        
        detail += `<div class='card'>
            <img class='navImg' src="/img/aberrantrealities-technology-8779250_1920.jpg" alt="">
            <div class='cardBody'>
            <p>Name: ${student.lastName.toUpperCase()} ${student.firstName.toUpperCase()}</p>
            <p>Age: ${student.age} </p>
            <p>Departmnt: ${student.department.toUpperCase()}</p>
            </div class='cardBody'>
        
        </div>`
        boddy.innerHTML= detail

    })
}
displayStudents()