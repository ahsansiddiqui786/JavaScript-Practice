// var sportName = ["Football" , "Hockey" , "Cricket" , "Reckit" , "Tennis"]
// sportName.unshift(true , false)

// console.log(sportName)

// let fruits = ["Mango" , "Banana" , "Apple"]
// console.log(fruits)
// fruits[0] = "Pine Apple"
// console.log(fruits)

// let favCars = ["Fortuner" , "Lamborghini" , "Volvo" , "Ford" , "Honda Every" , "Aqua"]
// console.log(favCars)

// favCars.unshift("Honda Civic")
// console.log(favCars)

// favCars.push("KIA Picanto")
// console.log(favCars)


// favCars.shift()
// console.log(favCars)

// favCars.pop()
// console.log(favCars)

// var teamScores = []

// var team1 = +prompt("Enter Team Score 1?")
// var team2 = +prompt("Enter Team Score 2? ")

// teamScores.push(team1 , team2)
// console.log(teamScores)
// if(teamScores[0] > teamScores[1]){
// console.log("Team 1 Has Won")
// }else{
//     console.log("Team 2 Has Won")
// }

// var shoppingList = [];
// shoppingList.push("Milk", "Bread", "Egg", "Cheese");
// var askAboutCheese = prompt('it is necessary to buy cheese or not?');
// if (askAboutCheese === "no") {
//     shoppingList.pop()
// }

// var askAboutapple = prompt("Apple is Required or Not")
// if(askAboutapple === "yes"){
// shoppingList.unshift("Apple")
// }
// console.log(shoppingList)

        // *** Splice ***

// let fruits = ["Apple" , "Banana" , "Mango"]
// fruits.splice(0 , 1 , "Strawberry" , "Orange")

// console.log(fruits)
  
// Hard Code copy krne ka

// let vegetableNames = ['Carrot' , 'Cucumber' , 'Okra' , 'Cabbage' , 'Cauliflower' , 'Potato' , 'Coriander']
// print = ['Okra' , 'Potato']
// console.log(vegetableNames , print)

// Soft Code copy krne ka

// let vegetableNames = ['Carrot' , 'Cucumber' , 'Okra' , 'Cabbage' , 'Cauliflower' , 'Potato' , 'Coriander']
// // print = vegetableNames.slice(1 , 5)
// // print = vegetableNames.slice(3 , 7)
// // print = vegetableNames.slice( 5, 7)
// print = vegetableNames.slice(0, 7)
//  console.log(vegetableNames , print)

/*let bikeCompanynames = ['Super Power' , 'Unique' , 'Super Star' , 'Target' , 'Bionic' , 'Honda']
console.log(bikeCompanynames)
//bikeCompanynames.splice(0 , 5)//indexed , //delete
//bikeCompanynames.splice(1 , 1) //index , //delete
//bikeCompanynames.splice(3 , 1) //index , //delete
//bikeCompanynames.splice(1 , 1)
bikeCompanynames.splice(5 , 1)
bikeCompanynames.splice(1 , 1)
bikeCompanynames.push('Unique')
bikeCompanynames.unshift('Honda')
 console.log(bikeCompanynames)*/

//Percentage

// let candidateNames = ['Touseef' , 'Talha' , 'Ayan']
// let candidateScores = [422 , 385 , 520]
// let percentage1 = (candidateScores[0] / 550) *100;
// let percentage2 = (candidateScores[1] / 550) *100;
// let percentage3 = (candidateScores[2] / 550) *100;

// console.log('Score of ' + candidateNames[0] + " is " +candidateScores[0] +"." + percentage1 + "%")
// console.log('Score of ' + candidateNames[1] + " is " + candidateScores[1] + "." + percentage2 + "%" )
// console.log('Score of ' + candidateNames[2] + ' is ' + candidateScores[2] + '.' + percentage3 + '%')

//Standard Method Percentage Nikalne ka

// let studentNames = ['Ahsan' , 'Hamza' , 'Moin']
// let studentMarks = [490 , 520 , 420]
// let index = 0;

// console.log( "Score of " + studentNames[index] + " is " + studentMarks[index] +"."+(studentMarks[index] / 550) * 100 + "%");
// index++
// console.log(' Score of ' + studentNames[index] + ' is ' + studentMarks[index] + '.' + (studentMarks[index] / 550 *100 + '%'))
// index++
// console.log(' Score of ' + studentNames[index] + ' is ' + studentMarks[index] +'.'+(studentMarks[index] / 550)*100 +'%')


// let originalNumber = 23;
// let newNumber = originalNumber + 7;
// alert(newNumber)

// userName , myVar , requiredArray

// userResponse
// userResponseTime
// userResponseTimeLimit
// response
// userResponseuserResponseTime
// userResponseTimeLimit


// var popularNumber = 2+2
// console.log(popularNumber)

// alert("True , False")

// var popularNumber = 12 - 24
// alert(popularNumber)

// var num = 10;
// var popularNumber = num + 200;
// alert(popularNumber)

// let num = 1;
// let anotherNumber = 12;
// alert(anotherNumber + num)

// let modulus = 13 % 3;
// alert(modulus)

// var userName = "Ahsan"
// alert("Thanks" + userName + "!")

// var numberOfCats = +prompt("How Many cats?")
// var manycats = numberOfCats+1
// alert(manycats)

// 

// let tableNumber = +prompt("Please Provide me a Table Number")
// let tablelength = +prompt("Please Provide me a Table Length")

// for(let i = 1 ; i<=tablelength;i++){
// tableStatements = tableNumber + "x" + i + "=" + (tableNumber*i)
// console.log(tableStatements)
// }

// var cleanCities = ["karachi", "Lahore", "Faisalabad", "Multan"];
// var userCity = prompt("Enter Your City in Pakistan");
// var cityFlag = false;
// for (var i = 0; i < cleanCities.length; i++) {
//     if (userCity === cleanCities[i]) {
//         cityFlag = true;
//         break
//     }
// }
// if (cityFlag === true) {
//     alert("Cleaned City")
// } else {
//     alert("Not cleaned City")
// }

// Math.round method kisi bhi no.ko 1 extra le leta hai agar wo . ke bad 5 ho ya 5 se ziada ho

// var number = prompt("Enter Your Number(Round OFF)")
// var roundingNumber = Math.round(number)
// console.log(roundingNumber)

// // Math.ceil method . ke bad chahe .1 ho ya.01 ye 1 consider krta hai or eik no.ko increase kr deta hai smjhne ke lye ceil ke maine hota hai chat(roof)is lye ye eik no.ko up kr deta hai

// var number = prompt("Enter Your Number(Ceil)")
// var updatedNumber = Math.ceil(number)
// console.log(updatedNumber)

// // Math.floor method jitna bhi ho.ke bd ye eik no.ko kam kr deta hai

// var number = prompt("Enter Your Number(Floor)")
// var updatedNumber = Math.floor(number)
// console.log(updatedNumber)

// random Number hai jo randomly 0. me randomly no. Generate Krta hai

// var randomNumbnumber = Math.random(userNumber)
// console.log(randomNumber)

// var text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, "

// for (let index = 0; index < text.length; index++) {
//     var copyText = text.slice(index, index + 5)
//     if (copyText === "Lorem") {
//         text = text.slice(0, index) + "Dummy" + text.slice(index + 5)
//     }
// }
// console.log(text)

// Very Easy Way

// var text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. "

// var updatedYear = text.replace(/Lorem/g, "Dummy")
// console.log(updatedYear)

// var text = "a quick brown fox jumps over the lazy dog"
// var count = 0;
// for (var index = 0; index < text.length; index++) {
//     var copyText = text.slice(index, index+1)
//     if (copyText === "b") {
//         count++
//     }
// }
// console.log("count", count)

// Math.round method kisi bhi no.ko 1 extra le leta hai agar wo . ke bad 5 ho ya 5 se ziada ho


// var percentage = prompt("Enter Your Percentage (Round Off)")
// var updatedPercentage = Math.round(percentage)
// console.log(updatedPercentage)

// // Math.ceil method . ke bad chahe .1 ho ya.01 ye 1 consider krta hai or eik no.ko increase kr deta hai smjhne ke lye ceil ke maine hota hai chat(roof)is lye ye eik no.ko up kr deta hai


//  var percentage = prompt("Enter Your Percentage (Ceil)")
//  var updatedPercentage = Math.ceil(percentage)
//  console.log(updatedPercentage)

// Math.floor method jitna bhi ho.ke bd ye eik no.ko kam kr deta hai


//  var percentage = prompt("Enter Your Percentage(Floor)")
//  var updatedPercentage = Math.floor(percentage)
//  console.log(updatedPercentage)

// random Number hai jo randomly 0. me randomly no. Generate Krta hai


// var genRanNum = Math.random(genRanNum)
// console.log(genRanNum)

// var text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, quod?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, quod?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, quod?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, quod?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, quod?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, quod?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, quod?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, quod?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, quod?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, quod?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, quod?"

//  var updatedText = text.replace(/Lorem/g , "Dummy")
//  console.log(updatedText)

// var text = "a quick brown fox jumps over the lazy dog"
// var count = 0;

// for (var index = 0; index < text.length; index++) {
//     var checkLetter = text.slice(index, index + 1)
//     if (checkLetter === "o") {
//         count++
//     }
// }
// console.log("Count", count)

// var paragraph = "a quick brown fox jumps over the lazy dog a quick brown fox jumps over the lazy dog"

// var count = 0;

// for (var index = 0; index < paragraph.length; index++) {
//     var useLetter = paragraph.slice(index,index+1)
//     if(useLetter === "a"){
// count++
//     }
// }
// console.log("count" , count)

// var myName = ["Muhammad" , "Ahsan" , "Siddiqui"]
// console.log(myName)
// // var copyWordsplice(0 , 1 , "Qamar")
// console.log(copyWord)

// let x = 23;
// let y = "6";

// console.log(typeof x , typeof y)

// String ko Number me Convert krne ka method(Number)

// let x = 23;
// let y = "6";

// console.log(x + Number(y))

// let x = 23;
// let y = "7";

// console.log(x + Number.parseInt(y))

// let a = '45';
// let b = 5;

// console.log(Number(a) + b)
// console.log(Number.parseInt(a) + b)

























