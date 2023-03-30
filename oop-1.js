// E' un modo di scrivere software, molto amato perchè la logica è simile agli altri codici, javascript aveva un modo strano di scrivere i software, alcuni programmatori
// si son lamentati e ne hanno creato uno che ha praticamente un "velo" su quello nuovo per nascondere quello vecchio


// MODELLARE

// const student1 = {
//     name: 'Davide',
//     surname: 'Consigliere',
//     yob: 1989,
//     grades: [4,6,7,4,6]
// }

// const student2 = {
//     name: 'Francesco',
//     surname: 'Badile',
//     yob: 1993,
//     grades: [5,8,6,7,10]
// }

// const student3 = {
//     name: 'Valentina',
//     surname: 'Cherubini',
//     yob: 2001,
//     grades: [8,7,10,9,8]
// }

// const teacher = {
//     name: 'Andrea',
//     surname: 'Asioli',
//     yob: 1978,
//     students: [student1,student2,student3]
// }


// function calculateMeanOfStudent(student){
//    const grades = student.grades;
//    let sum = 0;
//    for (let i = 0; i < grades.length; i++) {
//     const grade = grades[i];
//     sum += grade;
//    }
//    const mean = sum/grades.length;
//    return mean;
// }


// console.log(calculateMeanOfStudent(student1))

// function findBestStudent(teacher){
//     const students = teacher.students;
//     let bestStudent = students[0]
//     for (let i = 1; i < students.length; i++) {
//         const actualStudent = students[i];
//         const bestMean = bestStudent.calculateMean(bestStudent);
//         const actualMean = actualStudent.calculateMean(actualStudent);
//         if(actualMean > bestMean){
//             bestStudent = actualStudent
//         }

//     }return bestStudent;
// }



//______________________________________________________________________________________________________________________________________________________________________

// FUNZIONI RIMODELLLATE
const student1 = new Student('Davide', 'Consigliere', 1989, [4, 6, 7, 4, 6])
const student2 = new Student('Francesco', 'Badile', 1993, [5, 8, 6, 7, 10]);
const student3 = new Student('Valentina', 'Cherubini', 2001, [8, 7, 10, 9, 8])
const teacher = new Teacher('Andrea', 'Asioli', 1978, [student1, student2, student3])

console.log(student1)
console.log(student2)
console.log(student3)
console.log(teacher)
console.log(student1.calculateMean())
console.log(teacher.findBestStudent())

//______________________________________________________________________________________________________________________________________________________________________



// ESERCIZI

1) aggiungere un "toString()" (funzione) a Student e Teacher. 
// PER INSEGNANTE
// toString(){}
// NOME: Andrea
// COGNOME: Asioli
// ETA': 45
// MIGLIOR STUDENTE: Valentina Cherubini
//

// PER STUDENTE
// toString(){}
// NOME: DAVIDE
// COGNOME CONSIGLIERE
// ETA': 34
// MEDIA: 5.4
2) aggiungere "calculateAge()" a Student e Teacher 
