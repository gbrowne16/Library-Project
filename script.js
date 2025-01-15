// Insert name, outputs motivation
// country, all last names within the country (do .includes)
var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Science/Nobel%20Prize%20Winners%201901-2016.csv"

var firstName = getColumn(url,1)
var lastName = getColumn(url,2)
var motivation = getColumn(url,8)
var countryOfBirth = getColumn(url,4)



function getMotivation(prizeWinner){
for (var i = 0; i < firstName.length; i++){
    if (firstName[i].toLowerCase().includes(prizeWinner.toLowerCase()) || lastName[i].toLowerCase().includes(prizeWinner.toLowerCase())){
     
        if (motivation[i].includes(",")){
            return motivation[i].substring(1, motivation[i].length -1)
        }
        return motivation[i]
    }

}
return "That name was not found"
}

console.log(getMotivation("Sigrid"))






// function getLastNames(country){
//     var lastNameList = [];
//     for (var i = 0; i < firstName.length; i++){
//         if (countryOfBirth[i].toLowerCase().includes(country.toLowerCase())){
//             lastNameList.push(lastName[i])
//         }
        
//     }

   
//     if (lastNameList.length == 0){
//     return ["There is no Noble Prize winners from that country."]
//     }
//     return lastNameList; 
// }

// console.log(getLastNames("paris"))