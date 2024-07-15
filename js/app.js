var years = function (birthday) {
    //Extracción del año de la fecha ingresada
    var dateYear = birthday.getFullYear();
    //Fecha del dia de hoy
    var currentDate = new Date();
    //Extracción del año de la fecha actual
    var currentYear = currentDate.getFullYear();
    //Calculo de edad
    var result = currentYear - dateYear;
    console.log("Tengo " + result + " años :3");
};
var date = new Date(1999, 7, 4);
years(date);
