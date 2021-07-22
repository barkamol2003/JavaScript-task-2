let students = [
    {
        name: 'Barkamol', 
        surname: 'Olimjonov',
        year: 2003
    },
    {
        name: 'Bekzod', 
        surname: 'Abdulkhaev',
        year: 2007  
    },
    {
        name: 'Ulug\'bek', 
        surname: 'Sadullayev',
        year: 2000
    },
    {
        name: 'Shaxzod', 
        surname: 'Hakimov',
        year: 1987
    }
] 

const student = students.filter(function (todo){
    return todo.year < 2002
}) ;

console.log(student);
