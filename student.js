// class Student {
//     // ogni classe deve avere un costruttore constructor()
//     constructor(name, surname, yob, grades) {
//         this.name = name;
//         this.surname = surname;
//         this.yob = yob;
//         this.grades = grades;

//     }

//     calculateMean() {                                       // ho preso la funzione calculate mean dell'altro file e ho solo modificato la const grades
//         const grades = this.grades;
//         let sum = 0;
//         for (let i = 0; i < grades.length; i++) {
//             const grade = grades[i];
//             sum += grade;
//         }
//         const mean = sum / grades.length;
//         return mean;
//     }

     


// }
class Student{

    constructor(name, surname, yob, grades){
        this.name =name;
        this.surname=surname;
        this.yob=yob;
        this.grades=grades;
    }
    calculateMean(){
        let sum=0;
        const grades = this.grades;
        for (let i = 0; i < grades.length; i++) {
            const grade =grades[i];
            sum+=grade;
            }
        const mean = sum / grades.length;
        return mean;
    }
/**
 * ritornare una riga con "NOME: Davide \n COGNOME: Consigliere \n ETA': 34 \n MEDIA: 5.4 
 * 
 * 
 */
    toString(){
        let str=`NOME: ${this.name} \nCOGNOME: ${this.surname}\nETA': ${this.calculateAge()}\nMEDIA: ${this.calculateMean()}`
        return str;
    }

    calculateAge(){
        const date=new Date();
        let year=date.getFullYear();
        let age=year-this.yob;
        return age;
    }

}


