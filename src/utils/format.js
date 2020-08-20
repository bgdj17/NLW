const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português"
]

let weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber){
    const position = + subjectNumber - 1
    return subjects[position]
}
function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":")
    let result = Number((hour * 60) + minutes)
    return result
}
module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes

}