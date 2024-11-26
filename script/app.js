let generateBtn = document.getElementById("generatePersonInfo");

let firstPerson = document.getElementById("firstPerson");
let firstPersonLastName = document.getElementById("firstPersonLastName");
let firstPersonCodeStackEmail = document.getElementById("firstPersonCodeStackEmail");
let firstPersonPersonalEmail = document.getElementById("firstPersonPersonalEmail");
let sixthPerson = document.getElementById("sixthPerson");
let eigthPerson = document.getElementById("eigthPerson");
let seventhPerson = document.getElementById("seventhPerson");
let ninthPerson = document.getElementById("ninthPerson");
let tenthPerson = document.getElementById("tenthPerson");

let arrayOfPriorNames = [];

generateBtn.addEventListener("click", function(){
    // alert("button works"); test button

    //test name sections 1-10 list items
    //tenthPerson.innerText = "New text";
    
    getRandomPerson();

    //let personInformation = getRandomPerson();
    //firstPerson.innerText = personInformation;
})

function getData(){
    return fetch("../data/data.json")
        .then(response => response.json())
        .then(data =>{
            console.log(data.list)
            return data.list
        })
}


function getRandomPerson(){
    
    getData().then(data =>{
        
        //Test the list array
        console.log(data);
        let randomIndex = Math.floor(Math.random() * data.length);

        let newArray =[];

        
        firstPerson.innerText = data[randomIndex].firstName;
        firstPersonLastName.innerText = data[randomIndex].lastName;
        firstPersonCodeStackEmail.innerText = data[randomIndex].codeStackEmail;
        firstPersonPersonalEmail.innerText = data[randomIndex].Email;

        arrayOfPriorNames.push(data[randomIndex].firstName);
        
        sixthPerson.innerText = arrayOfPriorNames[0];
        seventhPerson.innerText = arrayOfPriorNames[1];
        eigthPerson.innerText = arrayOfPriorNames[2];
        ninthPerson.innerText = arrayOfPriorNames[3];
        tenthPerson.innerText = arrayOfPriorNames[4];

        if( arrayOfPriorNames.length ==5){
            arrayOfPriorNames.shift();
        }
    })


    
    //Test to see if it grabs 
    //console.log(students[randomIndex]);

}