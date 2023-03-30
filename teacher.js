class Teacher {

    constructor (name, surname, yob, students)
        {
        this.name =name;
        this.surname=surname;
        this.yob=yob;
        this.students=students;
        }



    findBestStudent() {
        const students = this.students;
        let bestStudent=students[0];
        for (let i = 1; i < students.length; i++) {
            const actualStudent = students[i];
            const bestMean = bestStudent.calculateMean();
            const actualMean= students[i].calculateMean();

            if(bestMean<actualMean)
                bestStudent = actualStudent;
        }
        return bestStudent;
    }
/**

 * 
 * 
 */
    toString(){
        let str=`NOME: ${this.name} \nCOGNOME: ${this.surname}\nETA': ${this.calculateAge()}\nMIGLIOR STUDENTE: ${this.findBestStudent().name} ${this.findBestStudent().surname}`
        return str;
    }
    
    calculateAge(){
        const date=new Date();
        let year=date.getFullYear();
        let age=year-this.yob;
        return age;
    }
}
