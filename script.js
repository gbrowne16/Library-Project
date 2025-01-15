var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Science/Nobel%20Prize%20Winners%201901-2016.csv"

var firstNames = getColumn(url,1)
var lastNames = getColumn(url,2)
var countryOfBirth = getColumn(url,4)
var dateOfBirth = getColumn(url,3)
var yearOfAward = getColumn(url,6)
var category = getColumn(url,7)
var motivation = getColumn(url,8)


// //Returns the motivation of a winner given either their last or first name, or both
// //prizeWinner {string}=a first, last, or full name of a winner 
// //return {string} = the motivation of prizeWinner
// //return {string} = a message if there are no winners with the name prizeWinner
// function getMotivation(prizeWinner){
//     for (var i = 0; i < firstNames.length; i++){
//         if (lastNames[i].toLowerCase().includes(prizeWinnerwinner.toLowerCase()) || firstNames[i].toLowerCase().includes(prizeWinner.toLowerCase()) || (firstNames[i].toLowerCase()+" "+lastNames[i].toLowerCase()).includes(prizeWinner.toLowerCase())){
//           if (motivation[i].includes(",")){
//                 return motivation[i].substring(1, motivation[i].length -1)
//             }
//             return motivation[i]
//         }
//     }
//     return "That name was not found"
//     }
    
//     console.log(getMotivation("Sigrid"))
    

// //Populated then returns a list of all last names of all winners from a country
// //country {string}=a country name
// //return {list} = all winners from that country
// //return {string} = a message if there are no winners from that country
// function getLastNamesofCountry(country){
//     var lastNameList = [];
//     for (var i = 0; i < firstName.length; i++){
//         if (countryOfBirth[i].toLowerCase().includes(country.toLowerCase())){
//             lastNameList.push(lastNames [i])
//         }
//     }
//     if (lastNameList.length == 0){
//     return ["There is no Noble Prize winners from that country."]
//     }
//     return lastNameList; 
// }

// console.log(getLastNamesofCountry("paris"))

    //Returns the age of a winner given either their last or first name, or both
//winner {string}=a first, last, or full name of a winner 
//return {number} = the age of that winner when they won
//return {string} = a message if there are no winners with the name winner
// function getAgeWhenWon(winner){
//     for (i=0; i<category.length; i++){
        
//         if (lastNames[i].toLowerCase().includes(winner.toLowerCase()) || firstNames[i].toLowerCase().includes(winner.toLowerCase()) || (firstNames[i].toLowerCase()+" "+lastNames[i].toLowerCase()).includes(winner.toLowerCase())){
//             var yearOfBirth = dateOfBirth[i].substring((dateOfBirth[i].length-4));
//             return parseFloat(yearOfAward[i])-parseFloat(yearOfBirth)
//         }
//     }
//     return "That name was not found"
// }
// console.log(getAgeWhenWon("Elizabeth H. Blackburn"))

//Populates and returns all the last names of winners in a specified category
//categoryInput {string}=a category or awards
//return {list} = all winners in the category 
//return {string} = a message if there are no winners within that category (that category doesn't exist)
function getLastNamesofCategory(categoryInput){
    var LastNamesofCategory = []
    for (i=0; i<category.length;i++){
        if (category[i].toLowerCase()==categoryInput.toLowerCase()){
            LastNamesofCategory.push(lastNames[i])
    }
    } 
    if(LastNamesofCategory.length>0){
        return LastNamesofCategory
    }
    else{
        return "No winner found from that category"
    }

} 

console.log(getLastNamesofCategory("astrophysics"))

// //Returns the last name of a winner given their first name
// //firstName {string}=a first name of a winner 
// //return {string} = the last name of the winner with first name firstName
// //return {string} = a message if there are no winners with the name firstName
// function getLastName(firstName){
//     for (i=0; i<category.length; i++){
//     if((firstNames[i].toLowerCase())==(firstName.toLowerCase())){
//         return lastNames[i]
//     }
//     }
//     return "That name was not found"
// }

// console.log(getLastName("Elinor"))



