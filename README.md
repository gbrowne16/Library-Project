# NobelPrizeWinnerLibrary
The library contains functions to use on a data set of Nobel Prize winners
#
##### Returns the motivation of a winner given either their last or first name, or both
###### @param prizeWinner {string}=a first, last, or full name of a winner
###### @return {string} = the motivation of prizeWinner
###### @return {string} = a message if there are no winners with the name prizeWinner
**`function getMotivation(prizeWinner)`**
#

##### Populates then returns a list of all last names of all winners from a country
###### @param country {string}=a country name
###### @return {list} = all winners from that country
###### @return {string} = a message if there are no winners from that country
**`function getLastNamesofCountry(country)`**
#

##### Returns the age of a winner given either their last or first name, or both
###### @param winner {string}=a first, last, or full name of a winner 
###### @return {number} = the age of that winner when they won
###### @return {string} = a message if there are no winners with the name winner
**`function getAgeWhenWon(winner)`**
#

##### Populates and returns a list of all the last names of winners in a specified category
###### @param categoryInput {string}=a category or awards
###### @return {list} = all winners in the category 
###### @return {string} = a message if there are no winners within that category (that category doesn't exist)
**`function getLastNamesofCategory(categoryInput)`**
#

##### Returns the last name of a winner given their first name
###### @param firstName {string}=a first name of a winner 
###### @return {string} = the last name of the winner with first name firstName
###### @return {string} = a message if there are no winners with the name firstName
**`function getLastName(firstName)`**
#


