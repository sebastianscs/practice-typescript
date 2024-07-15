
const years = (birthday:Date) => {
    //Extracción del año de la fecha ingresada
    let dateYear:number = birthday.getFullYear();
    //Fecha del dia de hoy
    let currentDate:Date = new Date();
    //Extracción del año de la fecha actual
    let currentYear:number = currentDate.getFullYear();
    //Calculo de edad
    let result = currentYear - dateYear;

    console.log("Tengo " + result + " años :3")
};
let date:Date = new Date(1999,7,4);
years(date);