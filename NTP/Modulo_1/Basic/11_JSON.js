const data = require('./MOCKA_DATA.json')

// console.log(MOCKA_DATA);

var modifiedData = data.map((person)=> {
person.first_name = person.first_name.toUpperCase()
return person
})

var filterResult = modifiedData.filter((person)=> person.id ===3)

//console.log(modielfiedMOCKA_DATA)
console.log(filterResult)